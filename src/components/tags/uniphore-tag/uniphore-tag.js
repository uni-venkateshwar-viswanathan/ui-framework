import '../../label/uniphore-label.js';
import { LitElement, html } from 'lit';
import { dispatchWebComponentEvent } from '../../../common.js';
import { uniphoreTagStyles } from './uniphore-tag-styles.js';

export class UniphoreTag extends LitElement {
  static properties = {
    id: { type: Number },
    label: { type: String },
    color: { type: String },
    background: { type: String },
    removable: { type: Boolean },
  };

  static styles = uniphoreTagStyles;

  constructor() {
    super();

    this.id = 0;
    this.removable = false;
  }

  render() {
    return html`
      <span class="uniphore-tag">
        <uniphore-label
          id=${`uniphore-label${this.id}`}
          class="uniphore-label-in-tag"
          text=${this.label}
          color="${this.color}"
        ></uniphore-label>
        ${this._getRemovableButton()}
      </span>
    `;
  }

  _getRemovableButton() {
    if (this.removable) {
      return html`<button
        id="${`remove-tag-${this.id}`}"
        @click="${() => this._removeTag()}"
      ></button>`;
    }
  }

  _setTagColor(background) {
    if (background) {
      this.style.setProperty('--tag-background-color', background);
      this.style.setProperty('--tag-border', '1px solid ' + background);
    }
  }

  _setRemovable() {
    if (this.removable) {
      this.style.setProperty('--tag-padding-right', '22px');
    }
  }

  _removeTag() {
    const details = {
      message: 'remove tag',
      removeTag: this.label,
      tagId: this.id,
    };

    dispatchWebComponentEvent(this, 'remove-tag', details);
  }

  connectedCallback() {
    super.connectedCallback();

    this._setTagColor(this.background);
    this._setRemovable(this.removable);
  }
}
customElements.define('uniphore-tag', UniphoreTag);
