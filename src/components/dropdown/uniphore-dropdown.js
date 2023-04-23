import { LitElement, html } from 'lit';
import { map } from 'lit/directives/map.js';
import { dispatchWebComponentEvent } from '../../common';
import { uniphoreDropdownStyles } from './uniphore-dropdown-styles.js';

// Example of basic usage: <uniphore-dropdown :items="items"
//          width="200px" :customStyles="{
//                             border: '1px solid red'
//                          }"></uniphore-dropdown>

export class UniphoreDropdown extends LitElement {
  static get properties() {
    return {
      items: { type: Array },
      height: { type: String, default: '40px' },
      width: { type: String, default: '100%' },
      noDataText: { type: String, default: 'No Data' },
      placeHolder: { type: String, default: '-- select an option --' },
      customStyles: { type: Array },
    };
  }

  static styles = uniphoreDropdownStyles;

  constructor() {
    super();
    this.noDataText = 'No Data';
    this.placeHolder = '-- Select an option --';
    this.width = '100%';
    this.height = '40px';
  }

  render() {
    if (this.items && this.items.length) {
      return html`
        <select class="uniphore-dropdown" @change="${this.selectionChanged}">
          <option disabled selected value>${this.placeHolder}</option>
          ${map(
            this.items,
            item => html` <option value="${item.id}">${item.value}</option>`,
          )}
        </select>
      `;
    } else {
      return html`
        <select
          class="uniphore-dropdown no-options-placeholder"
          @change="${this.selectionChanged}"
        >
          <option disabled selected value>${this.noDataText}</option>
        </select>
      `;
    }
  }

  selectionChanged(event) {
    dispatchWebComponentEvent(this, 'selection-changed', event);
  }

  setSelectedValue(value) {
    this.renderRoot.querySelector('.uniphore-dropdown').value = value;
  }

  get selectedValue() {
    return this.renderRoot.querySelector('.uniphore-dropdown').value;
  }

  firstUpdated() {
    this.setStyleVariables(this.height, this.width);
    this.applyCustomStyles(this.customStyles);
  }

  applyCustomStyles(styles) {
    const dropdownElement = this.renderRoot.querySelector('.uniphore-dropdown');
    if (dropdownElement && styles?.length) {
      Object.keys(styles).forEach(styleKey => {
        dropdownElement.style[styleKey] = styles[styleKey];
      });
    }
  }

  setStyleVariables(height, width) {
    if (height) {
      this.style.setProperty('--uniphore-dropdown-height', height);
    }

    if (width) {
      this.style.setProperty('--uniphore-dropdown-width', width);
    }
  }
}
customElements.define('uniphore-dropdown', UniphoreDropdown);
