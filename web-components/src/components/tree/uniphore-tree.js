import { LitElement, html } from 'lit';
import './components/uniphore-tree-parent-node.js';
import { uniphoreTreeStyles } from './uniphore-tree-styles.js';

export class UniphoreTree extends LitElement {
  static properties = {
    data: { type: Array, default: [] },
  };

  static styles = uniphoreTreeStyles;

  constructor() {
    super();

    this.selectedNode = null;
  }

  render() {
    return html`
      <uniphore-tree-parent-node
        .nodes="${this.data}"
      ></uniphore-tree-parent-node>
    `;
  }

  connectedCallback() {
    super.connectedCallback();

    this.addEventListener('tree-node-selected', this.onNodeSelected);
  }

  onNodeSelected(customEvent) {
    const newSelectedNode = customEvent.detail.node;
    if (this.selectedNode !== null) {
      this.unselectedNodeById(this.selectedNode.id);
    }

    this.selectedNode = newSelectedNode;
  }

  unselectedNodeById(id) {
    if (id !== '') {
      const removeOldSelectedNode = this.shadowRoot.getElementById(id);
      const unselectedRow = removeOldSelectedNode.renderRoot?.querySelector(
        '.uniphore-tree-child-row',
      );
      unselectedRow.classList.toggle('selected');
    }
  }
}

customElements.define('uniphore-tree', UniphoreTree);
