import { LitElement, html } from 'lit';
import '../../assets/icons/icomoon/style.css';
import { uniphoreIconMoonStyle } from '../../assets/icons/icomoon/style.js';
import { uniphoreIconStyle } from './uniphore-icon-style.js';
import { ICON_DEFAULTS } from './uniphore-icon-consts.js';

export class UniphoreIcon extends LitElement {
  static properties = {
    name: String,
    color: String,
    size: String,
  };

  static styles = [uniphoreIconMoonStyle, uniphoreIconStyle];

  constructor() {
    super();
    this.name = ICON_DEFAULTS.name;
    this.size = ICON_DEFAULTS.size;
    this.color = ICON_DEFAULTS.color;
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
    return html`<i class=${`uniphore-icon icon-${this.name}`} />`;
  }

  connectedCallback() {
    super.connectedCallback();
    this._setStyleVariables(this.color, this.size);
  }
}
if (!customElements.get('uniphore-icon')) {
  customElements.define('uniphore-icon', UniphoreIcon);
}
