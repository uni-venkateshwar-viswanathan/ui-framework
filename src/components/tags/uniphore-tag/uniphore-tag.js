import '../../label/uniphore-label.js';
import { LitElement, html } from 'lit';
import { dispatchWebComponentEvent } from '../../../common.js';
import { uniphoreTagStyles } from './uniphore-tag-styles.js';
import '../../../assets/icons/icomoon/style.css';
import {UniphoreIcon} from "../../icon/uniphore-icon";

export class UniphoreTag extends LitElement {
  static properties = {
    id: { type: Number },
    label: { type: String },
    color: { type: String },
    background: { type: String },
    removable: { type: Boolean },
    removeIconSize: { type: Number, default: 12 },
    removeIconClassName: { type: String, default: 'close-solid'},
    removeIconColor: { type: String }
  };

  static styles = uniphoreTagStyles;

  constructor() {
    super();
    this.id = Math.floor(Math.random() * 10);
    this.removable = false;
    this.removeIconSize = 13; // same as label font size
    this.removeIconClassName = 'close-solid'; // list can be found in 'src/assets/icons/icomoon/style.js'
    this.removeIconColor = '#606266';
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
        ${this._getRemovableTag()}
      </span>
    `;
  }

  _getRemovableTag() {
    if (this.removable) {
      return html`<uniphore-icon
          id="${`remove-tag-${this.id}`}"
          class="remove-tag-icon"
          name="${this.removeIconClassName}"
          color="${this.removeIconColor}"
          size=${`${this.removeIconSize}px`}
          @click="${() => this._removeTag()}"/>`;
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
