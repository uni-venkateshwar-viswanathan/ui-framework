import { LitElement, html, css } from 'lit';

export class UniphoreToast extends LitElement {
  static properties = {
    toasts: { type: Array, default: [] },
  };

  static styles = css`
    :host {
      position: fixed;
      z-index: 9999;
    }

    :host(.bottom) {
      bottom: 58px;
    }

    :host(.top) {
      top: 56px;
    }

    :host(.right) {
      right: 24px;
    }

    :host(.left) {
      left: 24px;
    }

    .toast {
      display: flex;
      align-items: center;
      background-color: var(--uniphore-toast-background, black);
      color: white;
      padding: 12px;
      margin-bottom: 8px;
      border-radius: 4px;
      box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);
    }

    .close-button {
      margin-left: 16px;
    }
  `;

  connectedCallback() {
    super.connectedCallback();
    // add default classes to host
    const hostClassList = this.shadowRoot?.host?.classList;
    hostClassList.add('bottom', 'left');
  }

  render() {
    return html`
      ${this.toasts.map(
        toast => html`
          <div class="toast">
            <span class="message">${toast.message}</span>
            <uniphore-icon
              class="close-button"
              icon="close"
              @click=${() => this._close(toast)}
            ></uniphore-icon>
          </div>
        `,
      )}
    `;
  }

  show(message, duration = 3000) {
    const toast = { message, duration };
    this.toasts = [...this.toasts, toast];

    setTimeout(() => {
      this._close(toast);
    }, duration);
  }

  _close(toast) {
    this.toasts = this.toasts.filter(t => t !== toast);
  }
}
customElements.define('uniphore-toast', UniphoreToast);
