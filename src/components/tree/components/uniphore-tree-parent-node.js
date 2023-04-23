import { LitElement, html } from 'lit';
import { map } from 'lit/directives/map.js';
import './uniphore-tree-child-node.js';
import '../../loader/uniphore-loader.js';

export class UniphoreTreeParentNode extends LitElement {
  static properties = {
    nodes: { type: Array },
  };

  constructor() {
    super();
  }

  createRenderRoot() {
    return this;
  }

  render() {
    return html`
      <ul class="uniphore-tree-parent-node">
        ${map(
          this.nodes,
          item => html` <uniphore-tree-child-node
            id="${item.id}"
            label="${item.label}"
            .node="${item}"
          ></uniphore-tree-child-node>`,
        )}
        <li class="lazy-loading-loader">
          <uniphore-loader></uniphore-loader>
        </li>
      </ul>
    `;
  }

  // eslint-disable-next-line  no-unused-vars
  updated(changedProperties) {
    // remove lazy loading animation
    const lazyLoader = this.renderRoot.querySelector('.lazy-loading-loader');
    lazyLoader.classList?.remove('lazy-loading-display');
  }
}
customElements.define('uniphore-tree-parent-node', UniphoreTreeParentNode);
