import { LitElement, html, css, nothing } from 'lit';

export class UniphoreTextarea extends LitElement {
  static properties = {
    label: { type: String },
    value: { type: String },
    disabled: { type: Boolean },
    invalid: { type: Boolean, reflect: true },
    helpText: { type: String },
    error: { type: String },
    placeholder: { type: String },
  };

  static styles = css`
    :host {
      display: flex;
      flex-direction: column-reverse;
      width: 313px;
      margin: 28px 24px;
    }

    label {
      display: block;
      font-weight: 700;
      font-size: 14px;
      margin-bottom: 4px;
    }

    textarea {
      padding: 8px;
      padding-right: 22px;
      border: 1px solid #abaebc;
      border-radius: 4px;
      outline: 0;
      resize: vertical;
      font-size: 1rem;
    }

    .help-text {
      font-size: 12px;
      color: var(--sonic-gray, #6d6f79);
      font-weight: 500;
      margin: 8px 0;
    }

    textarea:active,
    textarea:focus,
    textarea:focus-visible {
      border-color: #0062d6;
    }

    textarea:active + label,
    textarea:focus + label,
    textarea:focus-visible + label {
      color: #0062d6;
    }

    :host([invalid]) .help-text {
      color: #a00;
    }

    textarea .placeholder {
      color: var(--sonic-gray, #6d6f79);
    }

    :host([invalid]) label {
      color: #a00;
    }

    :host([invalid]) textarea {
      border-color: #a00;
    }

    :host([disabled]) label {
      color: var(--cool-gray, #8b8ba0);
    }

    :host([disabled]) textarea {
      border: 1px solid var(--cool-gray, #8b8ba0);
      background: var(--frost-gray, #e9ecf4);
      color: var(--cool-gray, #8b8ba0) !important;
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
      <textarea
        .placehoder=${this.placeholder || ''}
        .value=${this.value}
        ?disabled=${this.disabled}
        @input=${this.handleInput}
      ></textarea>
      <label>${this.label}</label>
    `;
  }

  handleInput(event) {
    this.value = event.target.value;
  }
}

customElements.define('uniphore-textarea', UniphoreTextarea);
