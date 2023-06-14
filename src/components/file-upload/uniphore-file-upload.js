import { LitElement, html, nothing } from 'lit';
import { uniphoreFileUploadStyles } from './uniphore-file-upload-styles';
import '../button/uniphore-button.js';
import { dispatchWebComponentEvent } from '../../common.js';

export class UniphoreFileUploadElement extends LitElement {
  static properties = {
    label: { type: String, attribute: true, reflect: true },
    multiple: { type: Boolean },
    type: { type: String },
    accept: { type: String },
    icon: { type: String },
    isDisabled: { type: Boolean },
  };

  static styles = uniphoreFileUploadStyles;

  constructor() {
    super();
    this.accept = '';
    this.type = 'button';
    this.label = 'Upload';
    this.multiple = false;
    this.isDisabled = false;

    this.addEventListener('uniphore-button-click', this._onButtonClicked);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener('uniphore-button-click', this._onButtonClicked);
  }

  _onButtonClicked(e) {
    e.detail.preventDefault();
    e.detail.stopPropagation();
    this.shadowRoot.getElementById('fileUploadLabel').click();
  }

  // eslint-disable-next-line  no-unused-vars
  firstUpdated(changedProperties) {
    this.shadowRoot.querySelector('input').onchange = e => {
      if (e.target.files) {
        dispatchWebComponentEvent(this, 'upload', e.target.files);
      }
    };
  }

  _getLabelTemplate() {
    switch (this.type) {
      case 'button':
        return html`<uniphore-button>
          <span>${this.label}</span>
        </uniphore-button>`;

      case 'label':
        return nothing;

      case 'icon':
        return html`<img
          src=${this.icon}
          alt="${'upload file'}"
          class="file-upload-icon"
        />`;

      default:
        return nothing;
    }
  }
  _getInputTemplate() {
    if (this.isDisabled) {
      return html`<input accept=${this.accept} type="file" hidden disabled />`;
    }

    if (this.multiple) {
      return html`<input accept=${this.accept} multiple type="file" hidden />`;
    }

    return html`<input accept=${this.accept} type="file" hidden />`;
  }

  render() {
    return html`
      <div
        id="uniphoreFileUpload"
        class="uniphore-file-upload ${this.isDisabled ? 'disabled-upload' : ''}"
      >
        <label id="fileUploadLabel" class="uniphore-file-upload-label">
          ${this._getInputTemplate()} ${this._getLabelTemplate()}
        </label>
      </div>
    `;
  }
}

customElements.define('uniphore-file-upload', UniphoreFileUploadElement);

/**
 * How to use:
 *
 *   <uniphore-file-upload label="Upload" type="button" accept="image/*,video/*,.doc" multiple="true" @upload="onUpload"/>
 *
 * Properties:
 *
 * label - String - Button label, default is 'Upload'
 * upload - event name when upload is triggered
 * type - type of trigger - default is 'button'
 * accept - allowed files - image/*,video/*,audio/*,.pdf,.doc etc., default is all types
 * multiple - allow multiple files - Boolean, default is false
 * */
