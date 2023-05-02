import { LitElement, html } from 'lit';
import { map } from 'lit/directives/map.js';
import { dispatchWebComponentEvent } from '../../common.js';
import './uniphore-tag/uniphore-tag.js';
import { uniphoreTagsStyles } from './uniphore-tags-styles.js';

export class UniphoreTags extends LitElement {
  static properties = {
    tags: { type: Array },
    removable: { type: Boolean },
    showAddTag: { type: Boolean, attribute: 'show-add-tag' },
    addTagPlaceholder: { type: String, attribute: 'add-tag-placeholder' },
  };

  static styles = uniphoreTagsStyles;

  constructor() {
    super();
    this.tags = [];
    this.removable = false;
    this.showAddTag = false;
    this.addTagPlaceholder = '+ Add Tag';
  }

  render() {
    return html`
      <ul>
        ${this._getAddTagInput()}
        ${map(
          this.tags,
          (item, index) => html` <li>${this._getTag(item, index)}</li>`,
        )}
      </ul>
    `;
  }

  _getAddTagInput() {
    if (this.showAddTag) {
      return html`<li>
        <input
          class="add-tag-input"
          type="text"
          placeholder=${this.addTagPlaceholder}
          @keypress=${this._addTag}
          @blur="${this._addTag}"
        />
      </li>`;
    }
  }

  _getTag(item, index) {
    if (this.removable) {
      return html`<uniphore-tag
        id=${index}
        label=${item.label}
        removable=${this.removable}
        background=${item.background}
        color="${item.color}"
        @on-remove-tag=${this._onRemoveTag}
      ></uniphore-tag>`;
    }

    return html`<uniphore-tag
      id=${index}
      label=${item.label}
      background=${item.background}
      color="${item.color}"
    ></uniphore-tag>`;
  }

  get input() {
    return this.renderRoot?.querySelector('.add-tag-input') ?? null;
  }

  _onRemoveTag(event) {
    const tagIdToRemove = event.detail.tagId;
    const indexTagToRemove = event.detail.tagId;
    const tagToRemove = this.tags[indexTagToRemove];
    const details = {
      message: 'remove tag',
      removeTag: tagToRemove,
      removeTagId: tagIdToRemove,
      currentTags: this.tags,
    };

    dispatchWebComponentEvent(this, 'remove-tag', details);
  }

  _addTag(event) {
    if (event && (event.key === 'Enter' || event.type === 'blur')) {
      if (this.input.value) {
        const newTag = { label: this.input.value };
        const details = {
          message: 'add new tag',
          addTag: newTag,
          currentTags: this.tags,
        };

        dispatchWebComponentEvent(this, 'add-tag', details);
        this._clearAddTagInputValue();
      }
    }
  }

  _clearAddTagInputValue() {
    this.input.value = '';
  }
}
customElements.define('uniphore-tags', UniphoreTags);
