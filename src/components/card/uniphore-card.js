import { LitElement, html, css, nothing } from 'lit';

export class UniphoreCard extends LitElement {
  static properties = {
    title: { type: String },
    subtitle: { type: String },
  };

  static styles = css`
    :host {
      display: flex;
      flex-direction: column-reverse;
      width: 313px;
      margin: 1rem;
      border-radius: 10px;
      border: 1px solid var(--pale-gray, #d7dae3);
      background: var(--white, #fff);
      overflow: hidden;
    }

    .spacer {
      padding: 1rem;
    }
    :host(:active),
    :host(:focus) {
      border-color: var(--true-blue, #0062d6);
    }

    .card-header .title {
      color: #333;
      font-size: 1rem;
      font-weight: 700;
    }

    .card-header .sub-title {
      color: var(--cool-gray, #8b8ba0);
      font-size: 12px;
      font-weight: 500;
    }
    .content {
      color: var(--sonic-gray, #6d6f79);
      font-size: 12px;
      margin-top: 8px;
      margin-bottom: 1rem;
    }
    .image ::slotted(*) {
      width: 100%;
      height: auto;
    }
  `;

  render() {
    return html`
    <div>
        <div class="image">
            <slot name="image"></slot>
        </div>
        <div class="spacer">
      <div class="card-header">
        ${this.title ? html`<div class="title">${this.title}</div>` : nothing}
        ${
          this.subtitle
            ? html`<div class="sub-title">${this.subtitle}</div>`
            : nothing
        }
        </div>
        <div class="content">
            <slot></slot>
        </div>
        <div class="footer">
            <slot name="footer"></slot>
        </div>
      </div>
      </div>
      </div>
    `;
  }

  handleInput(event) {
    this.value = event.target.value;
  }
}

customElements.define('uniphore-card', UniphoreCard);
