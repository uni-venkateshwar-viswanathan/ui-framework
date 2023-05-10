import { LitElement, html } from 'lit';
import {
  ButtonType,
  ButtonSize,
  MEDIUM_BUTTON,
  PRIMARY_BUTTON,
} from './uniphore-button-consts.js';
import { uniphoreButtonStyles } from './uniphore-button-styles.js';
import { dispatchWebComponentEvent } from '../../common.js';

export class UniphoreButton extends LitElement {
  static properties = {
    text: { type: String },
    disabled: { type: Boolean },
    name: { type: String },
    formId: { type: String },
    nativeType: { type: String },
    size: { type: String },
    type: { type: String },
  };

  static styles = uniphoreButtonStyles;

  constructor() {
    super();

    this.text = 'Button';
    this.disabled = false;
    this.name = 'uniphore-button';
    this.formId = -1;
    this.nativeType = ButtonType.button;
    this.size = MEDIUM_BUTTON;
    this.type = PRIMARY_BUTTON;
  }

  render() {
    const buttonClass = `${`uniphore-${this.type}-button`} ${
      ButtonSize[this.size]
    }`;

    return html`<button
      type=${this.nativeType}
      name=${this.name}
      formId=${this.formId}
      class=${buttonClass}
      ?disabled=${this.disabled}
      @click=${this._onButtonClick}
      part="uniphore-button"
    >
      <slot name="uniphore-button-prefix"></slot>
      ${this.text}
      <slot name="uniphore-button-postfix"></slot>
    </button>`;
  }

  _onButtonClick(event) {
    dispatchWebComponentEvent(this, 'uniphore-button-click', event);
  }
}

customElements.define('uniphore-button', UniphoreButton);

// CSS USAGE EXAMPLE
// uniphore-button::part(uniphore-button) {
//   background-color: green;
// }