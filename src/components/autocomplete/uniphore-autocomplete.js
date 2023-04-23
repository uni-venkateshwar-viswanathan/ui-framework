import { LitElement, html } from 'lit';
import { repeat } from 'lit/directives/repeat.js';
import { dispatchWebComponentEvent } from '../../common';
import { uniphoreAutocompleteStyles } from './uniphore-autocomplete-styles.js';
import './uniphore-autocomplete-option/uniphore-autocomplete-option.js';
import '../loader/uniphore-loader.js';
import searchIcon from '../../assets/icons/search.svg';
import {
  DISPLAYED_OPTIONS_COUNT,
  ITEMS_PROPERTY_NAME,
  UNIPHORE_AUTOCOMPLETE_DROPDOWN_HEIGHT,
  UNIPHORE_AUTOCOMPLETE_DROPDOWN_WIDTH,
  IS_DROPDOWN_VISIBLE_PROPERTY_NAME,
  UNIPHORE_AUTOCOMPLETE_HIDE_CLASS_NAME,
  UNIPHORE_AUTOCOMPLETE_NO_RESULTS_OPTION_COLOR,
  UNIPHORE_AUTOCOMPLETE_OPTION_COLOR,
  UNIPHORE_AUTOCOMPLETE_TAG_NAME,
  UNIPHORE_AUTOCOMPLETE_DROPDOWN_ARROW_AXIS_X_OFFSET,
  UNIPHORE_AUTOCOMPLETE_DROPDOWN_AXIS_X_PADDING,
  UNIPHORE_AUTOCOMPLETE_DROPDOWN_AXIS_Y_PADDING,
} from './uniphore-autocomplete-consts.js';

// USAGE EXAMPLE:
//      <uniphore-autocomplete :items="items">
//         <div slot="uniphore-autocomplete-trigger"><input placeholder="Search" /></div>
//       </uniphore-autocomplete>

//items: [
//          {
//             id: 111,
//             label: '111',
//             value: 'Intent 11',
//             toolbar: html`<uniphore-toolbar-variable item="${JSON.stringify({toolbarInfo})}"></uniphore-toolbar-variable>`
//             },{
//              id: 222,
//              label: '222',
//              value: 'Intent 22',
//              toolbar: html`<uniphore-toolbar-variable item="${JSON.stringify({toolbarInfo})}"></uniphore-toolbar-variable>`
//            }
//          ]
export class UniphoreAutocomplete extends LitElement {
  static properties = {
    items: { type: Array },
    noResultsPlaceholder: { type: String },
    searchPlaceholder: { type: String },
    isAutofocus: { type: Boolean },
    groupSortByFields: { type: Array },
    _isLoading: { state: true },
    _isDropdownVisible: { state: true },
    _filteredData: { state: true },
    _transformX: { state: true },
    _transformY: { state: true },
  };

  static styles = uniphoreAutocompleteStyles;

  constructor() {
    super();
    this._isLoading = false;
    this._isDropdownVisible = false;
    this._filteredData = [];
    this._searchTimeoutId = -1;

    this.searchPlaceholder = 'Search';
    this.noResultsPlaceholder = 'No Results';
    this.isAutofocus = true;
    this.groupSortByFields = [];
  }

  render() {
    const uniphoreAutocompleteTrigger = html` <div
      class="uniphore-autocomplete-trigger"
      part="uniphore-autocomplete-trigger"
      @click="${this._onAutocompleteTriggerClick}"
    >
      <slot name="uniphore-autocomplete-trigger"></slot>
    </div>`;

    if (!this._isDropdownVisible) {
      return uniphoreAutocompleteTrigger;
    }

    return html`${uniphoreAutocompleteTrigger}
      <ul class="uniphore-autocomplete uniphore-autocomplete-results-hidden">
        <div class="uniphore-autocomplete-arrow"></div>
        <div class="uniphore-autocomplete-search">
          <input
            id="input-search"
            class="input-search"
            placeholder="${this.searchPlaceholder}"
            @keyup="${this._onSearchTextChange}"
          />
          <img
            class="input-search-icon"
            src="${searchIcon}"
            alt="search icon"
          />
        </div>
        ${this.autocompleteDropdownResults}
      </ul>`;
  }

  get inputSearch() {
    return this.renderRoot.querySelector('#input-search');
  }

  get autocompleteDropdownResults() {
    let autocompleteDropdownResults = '';
    if (this._isLoading) {
      autocompleteDropdownResults = html`<uniphore-loader></uniphore-loader>`;
    } else if (!this._filteredData.length) {
      autocompleteDropdownResults = html` <div
        class="uniphore-autocomplete-results"
      >
        <uniphore-autocomplete-option
          label="${this.noResultsPlaceholder}"
          class="no-results-option"
        >
        </uniphore-autocomplete-option>
      </div>`;
    } else {
      autocompleteDropdownResults = html` <div
        class="uniphore-autocomplete-results"
      >
        ${repeat(
          this._filteredData,
          item => html` <li id="${item.id}">
            <uniphore-autocomplete-option
              label="${item.label}"
              value="${JSON.stringify(item.value)}"
              @uniphore-autocomplete-option-click="${this._onOptionSelected}"
            >
              <div slot="uniphore-autocomplete-option-toolbar">
                ${item.toolbar}
              </div>
            </uniphore-autocomplete-option>
          </li>`,
        )}
      </div>`;
    }

    return autocompleteDropdownResults;
  }

  // eslint-disable-next-line  no-unused-vars
  firstUpdated(changedProperties) {
    window.addEventListener('click', this._handleWindowClick.bind(this));
  }

  _handleWindowClick(event) {
    if (!event.composedPath().includes(this)) {
      const dropdownElement = this.renderRoot.querySelector(
        '.uniphore-autocomplete',
      );
      dropdownElement?.classList.add(UNIPHORE_AUTOCOMPLETE_HIDE_CLASS_NAME);
      this._isDropdownVisible = false;
    }
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    window.removeEventListener('click', this._handleWindowClick);
  }

  update(changedProperties) {
    if (changedProperties.has(ITEMS_PROPERTY_NAME)) {
      this._filterPrimaryOptionsContainingSearchText();
      this._isLoading = false;
    }

    if (changedProperties.has(IS_DROPDOWN_VISIBLE_PROPERTY_NAME)) {
      if (this._isDropdownVisible) {
        if (this._transformX < 0 || this._transformY < 0) {
          const dropdownTimeoutId = setTimeout(() => {
            this._transformAutocompleteDropdown();
            clearTimeout(dropdownTimeoutId);
          }, 50);
        } else {
          const dropdownTranslateXTimeoutId = setTimeout(() => {
            const arrowLeftPosition =
              this._calcAutocompleteDropdownArrowLeftPosition();
            this._applyAutocompleteSettings(arrowLeftPosition);

            clearTimeout(dropdownTranslateXTimeoutId);
          }, 50);
        }
      } else {
        if (this.inputSearch) {
          this.inputSearch.value = '';
          this._filterPrimaryOptionsContainingSearchText();
        }
      }
    }
    super.update(changedProperties);
  }

  _onAutocompleteTriggerClick(event) {
    if (!this._isDropdownVisible) {
      if (!this.items.length) {
        this._isLoading = true;
      }

      this._transformX =
        window.innerWidth -
        event.clientX -
        UNIPHORE_AUTOCOMPLETE_DROPDOWN_WIDTH;
      this._transformY =
        window.innerHeight -
        event.clientY -
        UNIPHORE_AUTOCOMPLETE_DROPDOWN_HEIGHT;
    }

    this._isDropdownVisible = !this._isDropdownVisible;
    dispatchWebComponentEvent(
      this,
      'uniphore-autocomplete-trigger-click',
      event,
    );
  }

  _onOptionSelected(event) {
    const selectedOption = event.detail;
    if (selectedOption) {
      this._isDropdownVisible = false;
      dispatchWebComponentEvent(
        this,
        'uniphore-autocomplete-option-selected',
        selectedOption,
      );
    }
  }

  _onSearchTextChange() {
    if (this._searchTimeoutId) {
      clearTimeout(this._searchTimeoutId);
    }

    this._searchTimeoutId = setTimeout(() => {
      this._filterPrimaryOptionsContainingSearchText();
    }, 200);
  }

  _filterPrimaryOptionsContainingSearchText() {
    const searchText = this.inputSearch?.value || '';
    const upperCaseSearchText = searchText.toUpperCase().trimStart();
    const filteredData = this.items.filter(option =>
      option.label.toUpperCase().startsWith(upperCaseSearchText),
    );

    if (filteredData.length === DISPLAYED_OPTIONS_COUNT) {
      this._filteredData = this._sortAutocompleteOptionsByFields(filteredData);
      this._setAutocompleteDropdownProperties();
      return;
    }

    if (filteredData.length > DISPLAYED_OPTIONS_COUNT) {
      this._filteredData = this._sortAutocompleteOptionsByFields(
        filteredData.slice(0, DISPLAYED_OPTIONS_COUNT),
      );
      this._setAutocompleteDropdownProperties();
      return;
    }

    this._filterSecondaryOptionsContainingSearchText(
      upperCaseSearchText,
      filteredData,
    );
  }

  _filterSecondaryOptionsContainingSearchText(
    upperCaseSearchText,
    filteredData,
  ) {
    let optionIndex = 0;
    const includeOptionsFilterArray = [];
    let includeOptionsFilterCount =
      DISPLAYED_OPTIONS_COUNT - filteredData.length;

    while (includeOptionsFilterCount && optionIndex < this.items.length) {
      const upperCaseOptionLabel = this.items[optionIndex].label.toUpperCase();

      if (
        upperCaseOptionLabel.includes(upperCaseSearchText) &&
        !upperCaseOptionLabel.startsWith(upperCaseSearchText)
      ) {
        includeOptionsFilterArray.push(this.items[optionIndex]);
        includeOptionsFilterCount--;
      }

      optionIndex++;
    }

    this._filteredData = this._sortAutocompleteOptionsByFields(
      filteredData.concat(includeOptionsFilterArray),
    );
    this._setAutocompleteDropdownProperties();
  }

  _sortAutocompleteOptionsByFields(options) {
    if (!this.groupSortByFields.length) {
      return options.sort(this._sortAutocompleteOptions);
    }

    let sortedOptions = [];

    for (
      let sortFieldIndex = 0;
      sortFieldIndex < this.groupSortByFields.length;
      sortFieldIndex++
    ) {
      const fieldSortBy = this.groupSortByFields[sortFieldIndex];
      const candidateOptions = options.filter(
        option => !!option.value[fieldSortBy],
      );
      candidateOptions.sort(this._sortAutocompleteOptions);
      sortedOptions = sortedOptions.concat(candidateOptions);
    }

    return sortedOptions;
  }

  _sortAutocompleteOptions(first, second) {
    const firstOption = first.label.toUpperCase();
    const secondOption = second.label.toUpperCase();

    if (firstOption < secondOption) {
      return -1;
    }
    if (firstOption > secondOption) {
      return 1;
    }

    return 0;
  }

  _setAutocompleteDropdownProperties() {
    this._setOptionColor();
    this._setOptionLabelWidth();
  }

  _setOptionColor() {
    this.style.setProperty(
      '--uniphore-label-text-color',
      this._filteredData.length
        ? UNIPHORE_AUTOCOMPLETE_OPTION_COLOR
        : UNIPHORE_AUTOCOMPLETE_NO_RESULTS_OPTION_COLOR,
    );
  }

  _setOptionLabelWidth() {
    this.style.setProperty(
      '--uniphore-label-width',
      this._filteredData.some(item => item.toolbar)
        ? 'calc(var(--uniphore-autocomplete-width) * 0.6'
        : '100%',
    );
  }

  _transformAutocompleteDropdown() {
    const dropdownElement = this.renderRoot.querySelector('ul');
    const dropdownElementHeight = dropdownElement.offsetHeight;
    const dropdownArrowElement = this.renderRoot.querySelector(
      '.uniphore-autocomplete-arrow',
    );
    const dropdownTriggerSlotElement = this.renderRoot.querySelector(
      'slot[name=uniphore-autocomplete-trigger]',
    );
    const dropdownTriggerElementHeight =
      dropdownTriggerSlotElement.assignedElements()[0]?.offsetHeight;
    let arrowLeftPosition = dropdownElement.offsetWidth / 2;

    if (this._transformX < 0) {
      this._transformAutocompleteDropdownNegativeAxisX();
      arrowLeftPosition += UNIPHORE_AUTOCOMPLETE_DROPDOWN_AXIS_X_PADDING;
    } else if (this._transformY < 0) {
      const dropdownElementYPositionTransform = -(
        dropdownElementHeight +
        dropdownTriggerElementHeight +
        UNIPHORE_AUTOCOMPLETE_DROPDOWN_AXIS_Y_PADDING
      );
      dropdownElement?.style.setProperty(
        'transform',
        `translate(0, ${dropdownElementYPositionTransform}px)`,
      );
      this.style.setProperty(
        '--uniphore-autocomplete-arrow-top',
        `${
          dropdownElement.offsetHeight -
          UNIPHORE_AUTOCOMPLETE_DROPDOWN_ARROW_AXIS_X_OFFSET
        }px`,
      );
      dropdownArrowElement?.classList.add('uniphore-autocomplete-arrow-top');
      arrowLeftPosition = this._calcAutocompleteDropdownArrowLeftPosition();
    }
    this._applyAutocompleteSettings(arrowLeftPosition);
  }

  _applyAutocompleteSettings(arrowLeftPosition) {
    this._setAutocompleteDropdownArrowLeftPosition(arrowLeftPosition);
    this._removeAutocompleteDropdownHiddenClass();
    if (this.isAutofocus) {
      this._focusAutocompleteSearchInput();
    }
  }

  _calcAutocompleteDropdownArrowLeftPosition() {
    const dropdownElement = this.renderRoot.querySelector('ul');
    const dropdownElementWidth = dropdownElement.offsetWidth;
    const dropdownTriggerSlotElement = this.renderRoot.querySelector(
      'slot[name=uniphore-autocomplete-trigger]',
    );
    const dropdownTriggerElementWidth =
      dropdownTriggerSlotElement.assignedElements()[0]?.offsetWidth;

    return dropdownTriggerElementWidth < dropdownElementWidth
      ? dropdownTriggerElementWidth / 2
      : dropdownElementWidth / 2;
  }

  _setAutocompleteDropdownArrowLeftPosition(arrowLeftPosition) {
    const dropdownArrowElement = this.renderRoot.querySelector(
      '.uniphore-autocomplete-arrow',
    );
    this.style.setProperty(
      '--uniphore-autocomplete-arrow-left',
      `${arrowLeftPosition}px`,
    );
    dropdownArrowElement?.classList.add('uniphore-autocomplete-arrow-left');
  }

  _removeAutocompleteDropdownHiddenClass() {
    const removeClassTimeoutId = setTimeout(() => {
      const dropdownElement = this.renderRoot.querySelector('ul');
      dropdownElement?.classList.remove('uniphore-autocomplete-results-hidden');
      clearTimeout(removeClassTimeoutId);
    }, 0);
  }

  _focusAutocompleteSearchInput() {
    const focusAutocompleteSearchInputId = setTimeout(() => {
      const autocompleteSearchInput =
        this.renderRoot.querySelector('.input-search');
      autocompleteSearchInput.focus();
      clearTimeout(focusAutocompleteSearchInputId);
    }, 0);
  }

  _transformAutocompleteDropdownNegativeAxisX() {
    const dropdownElement = this.renderRoot.querySelector('ul');
    const dropdownTriggerSlotElement = this.renderRoot.querySelector(
      'slot[name=uniphore-autocomplete-trigger]',
    );
    const dropdownTriggerElementWidth =
      dropdownTriggerSlotElement.assignedElements()[0]?.offsetWidth ||
      dropdownElement.offsetWidth;

    if (
      dropdownTriggerSlotElement.assignedElements()[0].getBoundingClientRect()
        .left > 0
    ) {
      const offsetX =
        (dropdownElement.offsetWidth - dropdownTriggerElementWidth) / 2 +
        UNIPHORE_AUTOCOMPLETE_DROPDOWN_AXIS_X_PADDING;
      dropdownElement?.style.setProperty(
        'transform',
        `translate(${-offsetX}px, 0)`,
      );
    }
  }
}
customElements.define(UNIPHORE_AUTOCOMPLETE_TAG_NAME, UniphoreAutocomplete);
