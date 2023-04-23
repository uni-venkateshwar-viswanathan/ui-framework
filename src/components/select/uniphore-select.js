import { LitElement, html } from 'lit';
import { map } from 'lit/directives/map.js';
import { dispatchWebComponentEvent } from '../../common';
import { uniphoreSelectStyles } from './uniphore-select-styles.js';
import '../icon/uniphore-icon.js';
import {
  MULTI_SELECT_PROPS,
  SELECT_POPOVER_PROPS,
  SELECT_PROPS,
  SELECT_TOGGLE_PROPS,
} from './uniphore-select-consts.js';

export class UniphoreSelect extends LitElement {
  static get properties() {
    return {
      multiple: { type: Boolean },
      filterable: { type: Boolean },
      maximum: { type: Number },
      popoverMaxHeight: { type: String },
      isOpened: { type: Boolean },
      placeholder: { type: String },
      searchValue: { type: String, attribute: true, reflect: true },
      searchPlaceholder: { type: String },
      toggleBackgroundColor: { type: String },
      popoverBackgroundColor: { type: String },
      toggleColor: { type: String },
      popoverColor: { type: String },
      toggleBorderColor: { type: String },
      popoverBorderColor: { type: String },
      options: { type: Array, attribute: true, reflect: true },
      selected: { type: [Array, Object], attribute: true, reflect: true },
      identifierAttribute: { type: String },
      labelAttribute: { type: String },
      selectedIcon: { type: String },
      emptyListPlaceholder: { type: String },
    };
  }

  static styles = uniphoreSelectStyles;

  constructor() {
    super();
    this.options = [];
    this.isOpened = false;
    this.multiple = false;
    this.selected = this.multiple ? [] : null;
    this.popoverMaxHeight = SELECT_PROPS.MAX_HEIGHT;

    this.filterable = false;
    this.searchValue = '';
    this.searchPlaceholder = SELECT_PROPS.SEARCH_PLACEHOLDER;

    this.toggleBackgroundColor = SELECT_TOGGLE_PROPS.BG_COLOR;
    this.popoverBackgroundColor = SELECT_POPOVER_PROPS.BG_COLOR;
    this.popoverColor = SELECT_POPOVER_PROPS.COLOR;
    this.toggleColor = SELECT_TOGGLE_PROPS.COLOR;
    this.toggleBorderColor = SELECT_TOGGLE_PROPS.BORDER_COLOR;
    this.popoverBorderColor = SELECT_POPOVER_PROPS.BORDER_COLOR;

    this.selectedIcon = SELECT_PROPS.SELECTED_ICON;
    this.identifierAttribute = SELECT_PROPS.ID_ATTRIBUTE;
    this.labelAttribute = SELECT_PROPS.LABEL_ATTRIBUTE;
    this.placeholder = SELECT_PROPS.PLACEHOLDER;
    this.emptyListPlaceholder = SELECT_PROPS.EMPTY_LIST_PLACEHOLDER;
    this.emptySearchListPlaceholder =
      SELECT_PROPS.SEARCH_EMPTY_LIST_PLACEHOLDER;
    this.maximum = MULTI_SELECT_PROPS.MAXIMUM_TAGS;
  }

  attributeChangedCallback(name, oldval, newval) {
    console.log('attribute change: ', name, newval);
    super.attributeChangedCallback(name, oldval, newval);
  }

  connectedCallback() {
    super.connectedCallback();
    this._setStyleVariables(
      '--toggle-background-color',
      this.toggleBackgroundColor,
    );
    this._setStyleVariables(
      '--pop-over-background-color',
      this.popoverBackgroundColor,
    );
    this._setStyleVariables('--toggle-color', this.toggleColor);
    this._setStyleVariables('--pop-over-color', this.popoverColor);
    this._setStyleVariables(
      '--toggle-border-color',
      `1px solid ${this.toggleBorderColor}`,
    );
    this._setStyleVariables(
      '--pop-over-border-color',
      `1px solid ${this.popoverBorderColor}`,
    );
    this._setStyleVariables('--pop-over-max-height', this.popoverMaxHeight);

    document.addEventListener('click', this._catchEventClicks.bind(this));
    document.addEventListener(
      'closeAllSelects',
      this._catchEventClicks.bind(this),
    );
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    document.removeEventListener('click', this._catchEventClicks.bind(this));
    document.removeEventListener(
      'closeAllSelects',
      this._catchEventClicks.bind(this),
    );
  }

  render() {
    const iconArrow = this.isOpened ? 'arrow-up' : 'arrow-down';

    return html`
      <div
        class=${`uniphore-select ${
          this.multiple ? 'uniphore-multiple-select' : ''
        }`}
      >
        <div
          class=${`uniphore-select-toggle ${this.isOpened ? 'is-opened' : ''}`}
          @click=${this._toggleSelect}
        >
          ${this._renderToggleTemplate()}
          <uniphore-icon
            class="uniphore-select-toggle-caret"
            size="18px"
            color=${this.toggleColor}
            name=${iconArrow}
          />
        </div>
        ${this._renderPopoverTemplate()}
      </div>
    `;
  }

  _renderPopoverTemplate() {
    return this.isOpened
      ? html`
          <div class="uniphore-select-popover">
            ${this._renderSearchBar()}
            <div class="uniphore-select-popover-list">
              ${this._filteredOptions && this._filteredOptions.length
                ? map(
                    this._filteredOptions,
                    item => html`
                      <div
                        class=${`uniphore-select-popover-list-option ${
                          this._isSelectedItem(item) ? 'selected' : ''
                        }`}
                        @click=${() => this._selectItem(item)}
                      >
                        ${this._renderOptionIcon('option', item)}
                        <span class="uniphore-select-popover-list-option-label"
                          >${item[this.labelAttribute]}</span
                        >
                        <div class="uniphore-select-popover-list-option-marks">
                          ${this._isSelectedItem(item) && this.selectedIcon
                            ? html`<uniphore-icon
                                class="selected-item-checkmark"
                                size="14px"
                                color=${this.popoverColor}
                                name=${this.selectedIcon}
                              />`
                            : null}
                          ${this._renderOptionStatusColor(item)}
                        </div>
                      </div>
                    `,
                  )
                : this._renderEmptyPopover()}
            </div>
          </div>
        `
      : null;
  }

  _renderEmptyPopover() {
    return html`
      <div class="uniphore-select-popover-list-empty">
        ${this.filterable && this.searchValue
          ? html`
              <div class="uniphore-select-popover-list-empty-label">
                <span>${this.emptySearchListPlaceholder}</span>
                <span class="uniphore-select-popover-list-empty-label-sv"
                  >${this.searchValue}</span
                >
              </div>
            `
          : html`<div class="uniphore-select-popover-list-empty-label">
              ${this.emptyListPlaceholder}
            </div>`}
      </div>
    `;
  }

  _renderSearchBar() {
    return this.filterable
      ? html`
          <div class="uniphore-select-popover-search">
            <input
              id="uniphore-select-popover-search"
              placeholder=${this.searchPlaceholder}
              type="text"
              value=${this.searchValue}
              @keyup=${this._onSearchChange}
            />
            <uniphore-icon
              size="16px"
              color=${this.popoverColor}
              name="search"
            />
          </div>
        `
      : null;
  }

  _renderToggleTemplate() {
    if (this.multiple) {
      return this._renderMultipleSelectToggle();
    }

    return html`
      <div class="uniphore-select-toggle-item">
        ${this._renderOptionIcon('toggle', this.selected)}
        <div class="uniphore-select-toggle-item-label">
          ${this._renderToggleLabel()}
        </div>
        <div class="uniphore-select-popover-list-option-marks">
          ${this._renderOptionStatusColor()}
        </div>
      </div>
    `;
  }

  _renderMultipleSelectToggle() {
    let selected = this.selected.slice();
    let leftOver = [];

    if (this.maximum) {
      leftOver = selected.slice(this.maximum);
      selected = selected.slice(0, this.maximum);
    }

    return html`
      <div class="uniphore-select-toggle-items">
        ${selected && selected.length
          ? map(
              selected,
              item => html`
                <div class="uniphore-select-toggle-items-tag">
                  ${this._renderOptionIcon('toggle', item)}
                  <span class="uniphore-select-toggle-items-tag-label"
                    >${this._renderToggleLabel(item)}</span
                  >
                  <div class="uniphore-select-popover-list-option-marks">
                    ${this._renderOptionStatusColor(item)}
                    <uniphore-icon
                      class="uniphore-select-toggle-items-tag-remove"
                      @click=${e => this._removeTag(item, e)}
                      size="14px"
                      color=${this.toggleColor}
                      name="close-solid"
                    />
                  </div>
                </div>
              `,
            )
          : html`<span>${this.placeholder}</span>`}
        ${this._renderMaximumOverflowTag(leftOver)}
      </div>
    `;
  }

  _renderMaximumOverflowTag(leftOver) {
    return leftOver && leftOver.length
      ? html`
          <div class="uniphore-select-toggle-items-tag">
            <span>+${leftOver.length} More</span>
          </div>
        `
      : null;
  }

  _toggleSelect() {
    if (this.isOpened) {
      this._closeSelect();
    } else {
      this._openSelect();
    }
  }

  _openSelect() {
    this.isOpened = true;
    dispatchWebComponentEvent(this, 'closeAllSelects');

    if (this.filterable) {
      setTimeout(() => {
        this.shadowRoot
          .getElementById('uniphore-select-popover-search')
          .focus();
      }, 0);
    }
  }

  _closeSelect() {
    this.isOpened = false;
    this.searchValue = '';
  }

  _removeTag(item, e) {
    e.preventDefault();
    e.stopPropagation();
    const index = this.selected.findIndex(
      selected =>
        selected[this.identifierAttribute] === item[this.identifierAttribute],
    );
    this.selected.splice(index, 1);
    dispatchWebComponentEvent(this, 'on-select', this.selected);
  }

  _selectItem(item) {
    if (this.multiple) {
      const index = this.selected.findIndex(
        selected =>
          selected[this.identifierAttribute] === item[this.identifierAttribute],
      );

      if (index > -1) {
        this.selected.splice(index, 1);
      } else {
        this.selected.push(item);
      }
    } else {
      this.selected = item;
      this._closeSelect();
    }

    dispatchWebComponentEvent(this, 'on-select', this.selected);
  }

  _setStyleVariables(variable, value) {
    if (variable && value) {
      this.style.setProperty(variable, value);
    }
  }

  _catchEventClicks(e) {
    if (!e.composedPath().includes(this)) {
      this._closeSelect(this);
    }
  }

  _renderOptionIcon(source, item) {
    let color;
    switch (source) {
      case 'toggle':
        color = this.toggleColor;
        break;
      case 'option':
        color = this.popoverColor;
        break;
      default:
    }

    return item.icon
      ? html`<uniphore-icon size="18px" color=${color} name=${item.icon} />`
      : null;
  }

  _renderOptionStatusColor(item = this.selected) {
    return item.color
      ? html`<i
          class="option-color"
          style=${`background-color:${item.color}`}
        />`
      : null;
  }

  _isSelectedItem(item) {
    if (this.multiple) {
      return (
        this.selected &&
        this.selected.length &&
        this.selected.find(
          selected =>
            selected[this.identifierAttribute] ===
            item[this.identifierAttribute],
        )
      );
    }

    return (
      this.selected &&
      item[this.identifierAttribute] === this.selected[this.identifierAttribute]
    );
  }

  _renderToggleLabel(item) {
    if (this.multiple) {
      return item ? item[this.labelAttribute] : this.placeholder;
    }

    return this.selected
      ? this.selected[this.labelAttribute]
      : this.placeholder;
  }

  _onSearchChange(e) {
    this.searchValue = e.target.value;
  }

  get _filteredOptions() {
    if (!this.searchValue) {
      return this.options;
    }

    return this.options && this.options.length
      ? this.options.filter(
          option =>
            option[this.labelAttribute] &&
            option[this.labelAttribute]
              .toLowerCase()
              .includes(this.searchValue.toLowerCase()),
        )
      : [];
  }
}

if (!customElements.get('uniphore-select')) {
  customElements.define('uniphore-select', UniphoreSelect);
}
