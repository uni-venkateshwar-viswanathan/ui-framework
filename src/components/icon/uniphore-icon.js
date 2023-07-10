import { LitElement, html } from 'lit';
import '../../styles/icons.css';
import { uniphoreIconMoonStyle } from '../../assets/icons/icomoon/style.js';
import { uniphoreIconStyle } from './uniphore-icon-style.js';
import { ICON_DEFAULTS } from './uniphore-icon-consts.js';

export class UniphoreIcon extends LitElement {
  static properties = {
    id: String,
    name: { type: String, default: ICON_DEFAULTS.name },
    color: { type: String, default: ICON_DEFAULTS.color },
    size: { type: String, default: ICON_DEFAULTS.size },
  };

  static styles = [uniphoreIconMoonStyle, uniphoreIconStyle];

  constructor() {
    super();
  }

  _setStyleVariables(iconColor, iconSize) {
    if (iconColor) {
      this.style.setProperty('--icon-color', iconColor);
    }
    if (iconSize) {
      this.style.setProperty('--icon-size', iconSize);
    }
  }

  render() {
    return html`<i id=${this.id} class=${`uniphore-icon icon-${this.name}`} />`;
  }

  connectedCallback() {
    super.connectedCallback();
    this._setStyleVariables(this.color, this.size);
  }
}
if (!customElements.get('uniphore-icon')) {
  customElements.define('uniphore-icon', UniphoreIcon);
}
