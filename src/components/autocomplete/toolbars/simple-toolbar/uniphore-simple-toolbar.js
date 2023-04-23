import { LitElement, html } from 'lit';
import { dispatchWebComponentEvent } from '../../../../common.js';
import { uniphoreSimpleToolbarStyles } from './uniphore-simple-toolbar-styles.js';

export class UniphoreSimpleToolbar extends LitElement {
  static properties = {
    item: { type: Object },
    icon: { type: String },
    tooltip: { type: String },
  };

  static styles = uniphoreSimpleToolbarStyles;

  render() {
    return html`
            <img class="uniphore-simple-toolbar-icon"
                 src="${this.icon}"
                 title="${this.tooltip}"
                 @click="${this._handlePreviewClick}">
            </img>`;
  }

  _handlePreviewClick() {
    dispatchWebComponentEvent(this, 'uniphore-simple-toolbar-click', this.item);
  }
}
customElements.define('uniphore-simple-toolbar', UniphoreSimpleToolbar);
