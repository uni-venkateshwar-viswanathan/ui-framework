import { LitElement, html } from 'lit';
import '../../label/uniphore-label.js';
import './uniphore-tree-parent-node.js';
import { dispatchWebComponentEvent } from '../../../common.js';

export class UniphoreTreeChildNode extends LitElement {
  static properties = {
    node: { type: Object },
  };

  constructor() {
    super();
    this.node = {};
  }

  render() {
    return html`
      <li class="uniphore-tree-child-node">
        <div id="${this.node.id}" class="uniphore-tree-child-row">
          <div
            class="uniphore-tree-child-node-label-arrow"
            @click="${this._onExtendCollapseArrowClicked}"
          >
            <span
              class="${this.node.children?.length > 0 ||
              this.node?.numOfChildren > 0
                ? 'arrow right'
                : ''}"
            ></span>
          </div>
          <div
            class="uniphore-tree-child-node-label-text"
            @click="${this._onTreeChildNodeClick}"
          >
            <uniphore-label text="${this.node.label}" .showEllipsis="${false}></uniphore-label>
          </div>
        </div>
        ${this._addParentNode(this.node)}
      </li>
    `;
  }

  _addParentNode(item) {
    if (item.children || item.numOfChildren > 0) {
      return html`
        <uniphore-tree-parent-node
          .nodes="${item.children}"
        ></uniphore-tree-parent-node>
      `;
    }

    return html``;
  }

  createRenderRoot() {
    return this;
  }

  _onTreeChildNodeClick() {
    const selectedNode = this.renderRoot?.querySelector(
      '.uniphore-tree-child-row',
    );
    selectedNode.classList.toggle('selected');

    this.onTreeNodeClicked();
  }

  _onExtendCollapseArrowClicked() {
    // extend sub tree only if exists in UI
    const parentNodeElement = this.renderRoot?.querySelector(
      '.uniphore-tree-parent-node',
    );
    if (parentNodeElement) {
      parentNodeElement.classList.toggle('extend-sub-tree');
    }

    const extend = this.renderRoot?.querySelector('.arrow');
    extend.classList.toggle('down');

    const info = {
      message: 'uniphore tree node expand arrow clicked',
      node: this.node,
    };
    dispatchWebComponentEvent(this, 'tree-node-expended', info);

    // lazy loading
    if (this.node.numOfChildren && !this.node.children) {
      this._showLazyLoadingAnimation();

      const info = {
        message: 'uniphore tree node expand lazy loading',
        node: this.node,
      };
      dispatchWebComponentEvent(this, 'tree-node-lazy-loading', info);
    }
  }

  onTreeNodeClicked() {
    const details = {
      message: 'uniphore tree node clicked and selected',
      node: this.node,
    };

    dispatchWebComponentEvent(this, 'tree-node-selected', details);
  }

  _showLazyLoadingAnimation() {
    const lazyLoader = this.renderRoot?.querySelector('.lazy-loading-loader');
    lazyLoader.classList.add('lazy-loading-display');
  }
}
customElements.define('uniphore-tree-child-node', UniphoreTreeChildNode);
