import { LitElement, html } from 'lit';
import { uniphoreCollapseListStyles } from './uniphore-collapse-list-style';

class UniphoreCollapseListElement extends LitElement {
  static styles = uniphoreCollapseListStyles;

  constructor() {
    super();
  }

  render() {
    return html`
      <div class="uniphore-collapse-list">
        <slot></slot>
      </div>
    `;
  }
}

customElements.define('uniphore-collapse-list', UniphoreCollapseListElement);

/**
 * How to use:
 *
 * <uniphore-collapse-list>
 *      <uniphore-collapse>
 *        <span slot="toggle">Here goes the header</span>
 *        <span slot="content">Here goes the content</span>
 *      </uniphore-collapse>
 * </uniphore-collapse-list>
 *
 * */
