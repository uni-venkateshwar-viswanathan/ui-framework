import { LitElement, html } from 'lit';
import { uniphoreCollapseStyles } from './uniphore-collapse-style';
import {
  CARET_POSITION,
  CARET_ICON,
  CARET_PROPS,
  UNIPHORE_COLLAPSE_CLICK
} from './uniphore-collapse-consts';
import '../icon/uniphore-icon.js';
import {dispatchWebComponentEvent} from "../../common.js";

export class UniphoreCollapse extends LitElement {
  static properties = {
    isCollapsed: Boolean,
    isLocked: Boolean,
    showCaret: Boolean,
    keepMounted: Boolean,
    headerBackgroundColor: String,
    hasBorder: Boolean,
    caretPosition: String,
    caretIconWhenClosed: String,
    caretIconWhenOpened: String,
    caretColor: String,
    caretSize: String,
    identifier: String
  };

  static styles = uniphoreCollapseStyles;

  constructor() {
    super();
    this.isCollapsed = false;
    this.keepMounted = true;
    this.headerBackgroundColor = '';
    this.hasBorder = true;
    this.isLocked = false;

    this.showCaret = true;
    this.caretIconWhenClosed = CARET_ICON.CLOSED;
    this.caretIconWhenOpened = CARET_ICON.OPENED;
    this.caretPosition = CARET_POSITION.RIGHT;
    this.caretColor = CARET_PROPS.COLOR;
    this.caretSize = CARET_PROPS.SIZE;
  }

  _handleContentHeight(target) {
    setTimeout(
      () =>
        (target.style.maxHeight = this.isCollapsed
          ? 0
          : target.scrollHeight + 'px'),
    );
  }

  _setStyleVariables(headerBackgroundColor) {
    if (headerBackgroundColor) {
      this.style.setProperty(
        '--header-background-color',
        headerBackgroundColor,
      );

      if (this.hasBorder) {
        this.style.setProperty(
          '--border-style',
          `1px solid ${headerBackgroundColor}`,
        );
      }
    }
  }

  _onToggleClick(event) {
    event.preventDefault();
    event.stopPropagation();

    if (!this.isLocked) {
      this.isCollapsed = !this.isCollapsed;
      this._handleContentHeight(event.currentTarget.nextElementSibling);
      dispatchWebComponentEvent(this, UNIPHORE_COLLAPSE_CLICK, {identifier:this.identifier, isCollapsed: this.isCollapsed});
    }
  }

  firstUpdated() {
    const target = this.shadowRoot.getElementById('uniphore-collapse-content');
    this._handleContentHeight(target);

    const hasContent = this.shadowRoot.querySelector("slot[name='content']");
    if (hasContent && hasContent.assignedNodes().length === 0) {
      this.isCollapsed = true;
      this.isLocked = true;
    }
  }

  _getCaretIcon() {
    return this.isCollapsed
      ? this.caretIconWhenClosed
      : this.caretIconWhenOpened;
  }

  _renderCollapseCaret(caretDirection) {
    return !this.isLocked &&
      this.showCaret &&
      this.caretPosition === caretDirection
      ? html`<uniphore-icon
          size=${this.caretSize}
          color=${this.caretColor}
          name=${this._getCaretIcon()}
        />`
      : null;
  }

  expandElement() {
    if (this.isCollapsed) {
      this.isCollapsed = false;
      const target = this.shadowRoot.getElementById(
        'uniphore-collapse-content',
      );
      this._handleContentHeight(target);
    }
  }

  render() {
    return html`
      <div
        class=${`uniphore-collapse ${this.isCollapsed ? 'is-collapsed' : ''}`}
      >
        <div
          id="uniphore-collapse-toggle"
          class=${`uniphore-collapse-toggle caret-position-${this.caretPosition}`}
          @click=${this._onToggleClick}
        >
          ${this._renderCollapseCaret(CARET_POSITION.LEFT)}
          <slot name="toggle"></slot>
          ${this._renderCollapseCaret(CARET_POSITION.RIGHT)}
        </div>
        <div id="uniphore-collapse-content" class="uniphore-collapse-content">
          ${!this.keepMounted && this.isCollapsed
            ? null
            : html` <div class="uniphore-collapse-content-body">
                <slot name="content"></slot>
              </div>`}
        </div>
      </div>
    `;
  }

  connectedCallback() {
    super.connectedCallback();
    this._setStyleVariables(this.headerBackgroundColor);
  }
}

if (!customElements.get('uniphore-collapse')) {
  customElements.define('uniphore-collapse', UniphoreCollapse);
}

/**
 * How to use:
 *
 *   <uniphore-collapse>
 *      <span slot="toggle">Here goes the header</span>
 *      <span slot="content">Here goes the content</span>
 *   </uniphore-collapse>
 *
 * Properties:
 *
 * isCollapsed - Boolean - default status of the collapsible content
 * showCaret - Boolean - if the toggle icon is visible
 * caretCloseDirection - String - Options: ["right", "down"]
 * caretOpenDirection - String Options: ["up", "down"]
 * keepMounted - Boolean - if the content should remain mounted when collapsed
 * caretSide String - Options: ["right", "left"]
 * */
