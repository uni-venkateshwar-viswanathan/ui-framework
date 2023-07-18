import { LitElement, html, css, nothing } from 'lit';
import { dispatchWebComponentEvent } from '../../common.js';

export class UniphoreInput extends LitElement {
  static properties = {
    label: { type: String },
    value: { type: String },
    placeholder: { type: String },
    helpText: { type: String },
    error: { type: String },
    invalid: { type: Boolean, reflect: true },
    disabled: { type: Boolean },
  };

  static styles = css`
    :host {
      display: flex;
      flex-direction: column-reverse;
      width: 313px;
      position: relative;
      margin: 28px 24px;
    }

    label {
      display: block;
      font-weight: 700;
      font-size: 14px;
      margin-bottom: 4px;
    }

    input {
      padding: 8px;
      padding-right: 22px;
      border: 1px solid #abaebc;
      border-radius: 4px;
      outline: 0;
      font-size: 1rem;
    }

    .help-text {
      font-size: 12px;
      color: var(--sonic-gray, #6d6f79);
      font-weight: 500;
      margin: 8px 0;
    }

    input:active,
    input:focus,
    input:focus-visible {
      border-color: #0062d6;
    }

    input:active + label,
    input:focus + label,
    input:focus-visible + label {
      color: #0062d6;
    }

    :host([invalid]) .help-text {
      color: #a00;
    }

    input .placeholder {
      color: var(--sonic-gray, #6d6f79);
    }

    :host([invalid]) label {
      color: #a00;
    }

    :host([invalid]) input {
      border-color: #a00;
    }

    :host([disabled]) label {
      color: var(--cool-gray, #8b8ba0);
    }

    :host([disabled]) input {
      border: 1px solid var(--cool-gray, #8b8ba0);
      background: var(--frost-gray, #e9ecf4);
      color: var(--cool-gray, #8b8ba0) !important;
    }

    uniphore-icon.close {
      position: absolute;
      --icon-size: 12px;
      right: 8px;
      bottom: 12px;
      cursor: pointer;
    }
  `;

  constructor() {
    super();
    this.value = '';
  }

  updated() {
    this.invalid = this.invalid || !!this.error;
    super.updated();
  }

  render() {
    return html`
      ${this.helpText || this.error
        ? html`<div class="help-text">${this.error || this.helpText}</div>`
        : nothing}
      <input
        type="text"
        id="input-element"
        .value=${this.value}
        .placeholder=${this.placeholder || ''}
        aria-label="${this.placeholder}"
        .disabled=${this.disabled}
        @input=${this.handleInput}
      />
      <label for="input-element">${this.label}</label>
      ${this.value && !this.disabled
        ? html`<uniphore-icon
            class="close"
            name="close"
            @click="${this.handleClear}"
          ></uniphore-icon>`
        : nothing}
    `;
  }

  handleInput(event) {
    this.value = event.target.value;
  }

  handleClear() {
    this.value = '';
    dispatchWebComponentEvent(this, 'input', {
      value: '',
    });
  }
}

customElements.define('uniphore-input', UniphoreInput);
