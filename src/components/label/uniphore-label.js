import { LitElement, html } from 'lit';
import { uniphoreLabelStyles } from './uniphore-label-styles.js';
import { dispatchWebComponentEvent } from '../../common.js';

export class UniphoreLabel extends LitElement {
  static properties = {
    text: { type: String },
    color: { type: String },
    showEllipsis: { type: Boolean },
  };

  static styles = uniphoreLabelStyles;

  constructor() {
    super();
    this.text = '';
    this.showEllipsis = true;
  }

  render() {
    return html`
      <span
        id="uniphore-label"
        class="uniphore-label"
        @click=${this._onLabelClick}
        >${this.text}</span
      >
    `;
  }

  get span() {
    return this.renderRoot.querySelector('.uniphore-label') ?? null;
  }

  // eslint-disable-next-line  no-unused-vars
  firstUpdated(changedProperties) {
    const labelSpan = this.span;
    labelSpan.addEventListener(
      'mouseenter',
      this._setTitleIfNecessary.bind(labelSpan),
    );

    if (this.showEllipsis) {
      this.renderRoot
        .querySelector('.uniphore-label')
        .classList.add('uniphore-label-ellipsis');
    }
  }

  _setTitleIfNecessary() {
    if (
      this.offsetWidth < this.scrollWidth &&
      this.className.includes('uniphore-label-ellipsis') &&
      !this.hasAttribute('title')
    ) {
      this.setAttribute('title', this.innerText);
    }
  }

  _setTagColor(color) {
    if (color) {
      this.style.setProperty('--uniphore-label-text-color', color);
    }
  }

  _onLabelClick(event) {
    dispatchWebComponentEvent(this, 'uniphore-label-click', event);
  }

  connectedCallback() {
    super.connectedCallback();
    this._setTagColor(this.color);
  }

  disconnectedCallback() {
    const labelSpan = this.span;
    labelSpan.removeEventListener(
      'mouseenter',
      this._setTitleIfNecessary.bind(labelSpan),
    );
    super.disconnectedCallback && super.disconnectedCallback();
  }
}
customElements.define('uniphore-label', UniphoreLabel);
