import { LitElement, html } from 'lit';
import '../../label/uniphore-label.js';
import { uniphoreAutocompleteOptionStyles } from './uniphore-autocomplete-option-styles.js';
import { dispatchWebComponentEvent } from '../../../common.js';
import {
  UNIPHORE_AUTOCOMPLETE_OPTION_COLOR,
  UNIPHORE_AUTOCOMPLETE_OPTION_COLOR_ON_HOVER,
} from '../uniphore-autocomplete-consts.js';

export class UniphoreAutocompleteOption extends LitElement {
  static properties = {
    label: { type: String },
    value: { type: Object },
  };

  static styles = uniphoreAutocompleteOptionStyles;

  render() {
    return html` <div
      class="uniphore-autocomplete-option"
      @click="${this._onOptionClick}"
      @mouseover="${this._onMouseOver}"
      @mouseout="${this._onMouseOut}"
    >
      <div class="prefix-container">
        <div class="prefix-icon"></div>
        <uniphore-label text="${this.label}"></uniphore-label>
      </div>
      <div class="suffix-container">
        <slot name="uniphore-autocomplete-option-toolbar"></slot>
      </div>
    </div>`;
  }

  _onOptionClick() {
    dispatchWebComponentEvent(
      this,
      'uniphore-autocomplete-option-click',
      this.value,
    );
  }

  _onMouseOver() {
    this.style.setProperty(
      '--uniphore-label-text-color',
      UNIPHORE_AUTOCOMPLETE_OPTION_COLOR_ON_HOVER,
    );
  }

  _onMouseOut() {
    this.style.setProperty(
      '--uniphore-label-text-color',
      UNIPHORE_AUTOCOMPLETE_OPTION_COLOR,
    );
  }
}
customElements.define(
  'uniphore-autocomplete-option',
  UniphoreAutocompleteOption,
);
