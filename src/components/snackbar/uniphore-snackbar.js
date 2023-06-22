import { LitElement, html, css } from 'lit';
import { dispatchWebComponentEvent } from '../../common';

export class UniphoreSnackbar extends LitElement {
  static properties = {
    message: { type: String },
    isVisible: { type: Boolean, default: true },
  };

  static styles = css`
    :host {
      left: 50%;
      transform: translateX(-50%, -50%);
      min-width: 30%;
      max-width: calc(100% - 48px);
      position: fixed;
      bottom: 24px;
      z-index: 9999;
    }

    .snackbar {
      display: flex;
      align-items: center;
      justify-content: space-between;
      background-color: var(--uniphore-snackbar-background, black);
      color: white;
      padding: 12px;
      margin-bottom: 8px;
      border-radius: 4px;
      box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);
    }

    .message {
      margin-right: 16px;
      max-width: 50%;
    }

    .close-button {
      margin-left: 8px;
    }
  `;

  render() {
    return !this.isVisible
      ? ''
      : html`
          <div class="snackbar">
            <div class="message">${this.message}</div>
            <div class="buttons">
              <slot />
              <uniphore-icon
                class="close-button"
                icon="close"
                @click=${() => this._close()}
              ></uniphore-icon>
            </div>
          </div>
        `;
  }

  _close() {
    this.isVisible = false;
    dispatchWebComponentEvent(this, 'Close Snackbar');
  }
}
customElements.define('uniphore-snackbar', UniphoreSnackbar);
