import { LitElement, html } from 'lit';
import variablesRemoteService from '../../../../common/services/src/variables/VariablesRemoteService';
import tinymce from 'tinymce/tinymce.min';
import 'tinymce/models/dom/model';
import 'tinymce/skins/ui/oxide/skin.css';
import 'tinymce/themes/silver/theme';
import 'tinymce/icons/default';

import 'tinymce/skins/ui/oxide/skin.min.css';
import 'tinymce/skins/ui/oxide/content.min.css';
import 'tinymce/skins/content/default/content.css';

/* Import used plugins */
import 'tinymce/plugins/code';
import 'tinymce/plugins/autoresize';
import 'tinymce/plugins/link';
import 'tinymce/plugins/lists';

/* Import unused plugins - DO NOT REMOVE! */
//TO DO: import 'tinymce/plugins/codemirror';
//import 'tinymce/plugins/codesample';
// import 'tinymce/plugins/advlist';
// import 'tinymce/plugins/textcolor';
// import 'tinymce/plugins/emoticons';
// import 'tinymce/plugins/emoticons/js/emojis';
// import 'tinymce/plugins/table';

import { uniphoreRichTextEditorStyles } from './uniphore-rich-text-editor-styles.js';
import removeIcon from '../../assets/icons/remove.svg';

import { dispatchWebComponentEvent } from '../../common.js';
import {
  DEFAULT_CONTENT_PLACEHOLDER,
  DEFAULT_ID,
  PRIMARY_TOOLBAR,
} from './uniphore-rich-text-editor-consts.js';
import '../autocomplete/uniphore-autocomplete.js';
import '../autocomplete/toolbars/toolbar-variables/uniphore-toolbar-variable.js';
import '../autocomplete/toolbars/simple-toolbar/uniphore-simple-toolbar.js';
import entityIcon from '../../assets/icons/sessionType/entity.svg';
import UAssistService from '../../../../common-interact/services/UAssist/UAssistService.js';
import { UNIPHORE_AUTOCOMPLETE_ENTITY_TYPE_TOOLTIP } from '../autocomplete/uniphore-autocomplete-consts.js';

export class UniphoreRichTextEditor extends LitElement {
  static properties = {
    id: { type: String },
    content: { type: String },
    contentHeight: { type: String },
    contentPlaceholder: { type: String },
    showToolbar: { type: Boolean },
    customToolbar: { type: String },
    showBorder: { type: Boolean },
    isReadOnly: { type: Boolean },
    autocompleteMetadata: { type: Object }, // { organizationId: "1", businessProcessId: "1" }
    _autocompleteItems: { state: true },
  };

  constructor() {
    super();

    this.id = DEFAULT_ID;
    this.content = '';
    this.contentHeight = '';
    this.contentPlaceholder = DEFAULT_CONTENT_PLACEHOLDER;

    this.showToolbar = true;
    this.customToolbar = PRIMARY_TOOLBAR;
    this.showBorder = true;
    this.isReadOnly = false;
    this.isAutofocus = false;
    this.contentArea = null;

    this._autocompleteItems = [];
  }

  get _showAutocomplete() {
    return !!this.autocompleteMetadata;
  }

  createRenderRoot() {
    return this;
  }

  render() {
    return html`
      <style>
        ${uniphoreRichTextEditorStyles}
      </style>
      <div class="editor-container">
        <div
          .id="${this.id}"
          a_id="${this.id}"
          .innerHTML="${this.content}"
        ></div>

        <div
          id="autocomplete-container"
          a_id="autocomplete-container"
          class="autocomplete-container"
        >
          <uniphore-autocomplete
            .items="${this._autocompleteItems}"
            .isAutofocus="${this.isAutofocus}"
            .groupSortByFields="${['variableType', 'entityType']}"
            .searchPlaceholder="${'Search Variables and Entities'}"
            @uniphore-autocomplete-trigger-click="${this
              ._onAutocompleteClicked}"
            @uniphore-autocomplete-option-selected="${this
              ._onAutocompleteOptionSelected}"
          >
            <div
              id="autocomplete-trigger"
              a_id="autocomplete-trigger"
              slot="uniphore-autocomplete-trigger"
              class="autocomplete-trigger"
            ></div>
          </uniphore-autocomplete>
        </div>
      </div>
    `;
  }

  connectedCallback() {
    super.connectedCallback();

    const initEditorTimeoutId = setTimeout(() => {
      tinymce.init({
        selector: '#' + this.id,
        height: this.contentHeight,
        branding: false,
        menubar: false,
        statusbar: false,
        readonly: this.isReadOnly,
        placeholder: this.contentPlaceholder,
        // plugins: 'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed linkchecker a11ychecker tinymcespellchecker permanentpen powerpaste advtable advcode editimage tinycomments tableofcontents footnotes mergetags autocorrect typography inlinecss code',
        plugins: 'code link lists ' + (!this.contentHeight ? 'autoresize' : ''),
        toolbar: this.showToolbar ? this.customToolbar : false,
        // mergetags_list: [
        //     { value: 'First.Name', title: 'First Name' },
        //     { value: 'Email', title: 'Email' },
        // ],
        //inline_boundaries: false,
        autoresize_overflow_padding: 0,
        autoresize_bottom_margin: 0,
        min_height: 1,
        //forced_root_block: 'p',
        extended_valid_elements: 'span[*]',
        font_size_formats: '8px 10px 12px 14px 16px 18px 24px 36px',
        //toolbar_mode: 'floating', //'sliding',

        init_instance_callback: editor => {
          const autoCompleteContainer = this.renderRoot.querySelector(
            '.autocomplete-container',
          );

          editor.on('Change', e => {
            this._onContentChange(e.level.content);
          }),
            editor.on('Focus', e => {
              this._showBorder(e);
            }),
            editor.on('detach', () => {
              editor.destroy();
              console.log(`editor ${editor.id} was destroyed`);
            }),
            editor.on('Blur', () => {
              this._onBlur(editor.getContent());

              // TO DO: check if doesn't close it when you choose from autoCompleteContainer complete
              if (autoCompleteContainer) {
                //   autoCompleteContainer.classList.remove("show-autocomplete");
              }
            }),
            editor.on('click', e => {
              console.log('rice text editor component:  onclick: ', e);
              if (autoCompleteContainer) {
                autoCompleteContainer.classList.remove('show-autocomplete');
              }
            }),
            editor.on('Keyup', e => {
              console.log('rice text editor component:  onkeyup: ', e);
              // to avoid editor click on autocomplete variable
              if (e.target.id === 'autosized-input') {
                return;
              }

              const selection = editor.getWin().getSelection();
              const range = selection.getRangeAt(0);
              const rect = range.getClientRects()[0];

              if (e.key === 'Enter') {
                if (autoCompleteContainer) {
                  autoCompleteContainer.classList.remove('show-autocomplete');
                }
              }

              if (e.key !== 'Shift') {
                autoCompleteContainer.click();
                autoCompleteContainer.classList.remove('show-autocomplete');
              }

              if (e.key === '@') {
                console.log(
                  'rich text editor component:  onkeyup @: ',
                  this._showAutocomplete,
                );
                if (this._showAutocomplete && autoCompleteContainer) {
                  autoCompleteContainer.style.top = this.showToolbar
                    ? rect.top + 50 + 'px'
                    : rect.top + 2 + 'px';
                  autoCompleteContainer.style.left = rect.left - 20 + 'px';
                  autoCompleteContainer.classList.add('show-autocomplete');

                  const autocompleteTrigger = this.renderRoot.querySelector(
                    '#autocomplete-trigger',
                  );
                  autocompleteTrigger.click();
                }
              }

              this._onKeyUp(e.target.innerHTML);
            });

          //this._onAutocompleteVariableValueChange(editor);
          this._onAutocompleteVariableRemove(editor);
        },

        setup: editor => {
          editor.on('init', e => {
            this._onInit(e);

            /* add style for variable component */
            const style = document.createElement('style');
            style.textContent = `
                          
                          .uniphore-variable-name,
                          .uniphore-variable-value,
                          .uniphore-entity-name,
                          .uniphore-entity-value {        
                                font-family: Open Sans;
                                font-size: 14px;
                                height: 22px;
                                color: white;
                                background-color: #7B8F9F;
                                border: none;
                                border-radius: 29px;
                                padding-left: 10px;
                                outline: none;
                                padding-right: 10px;
                                margin-right: 5px;
                                margin-left: 5px;     
                                pointer-events: none;                                
                            }
                            
                            .uniphore-variable-name[contenteditable="false"]:not([data-mce-contenteditable])::after,
                            .uniphore-variable-value[contenteditable="false"]:not([data-mce-contenteditable])::after,
                            .uniphore-entity-name[contenteditable="false"]:not([data-mce-contenteditable])::after,
                            .uniphore-entity-value[contenteditable="false"]:not([data-mce-contenteditable])::after {
                                content: "";
                                background-image: url(${removeIcon});
                                margin-left: 6px;
                                display: inline-block;
                                width: 10px;
                                height: 10px;
                                pointer-events: auto;
                                cursor: pointer;
                            }
 
                            /* removing extra copy when removing variable */
                            .mce-offscreen-selection {
                                display: none;
                            }

                            .mce-content-body {
                                font-size: 14px;
                                font-family: Open Sans;
                            }
                            
                            .mce-content-body p, 
                            .mce-content-body ul, 
                            .mce-content-body li, 
                            .mce-content-body ol {
                                margin: 5px;
                            }
                        `;
            editor.getDoc().head.append(style);
          }),
            editor.on('setContent', e => {
              if (!e.initial) {
                // not the first time
                console.log('uniphore-rich-text-editor - setContent: ', e);
                this._onAutocompleteVariableRemove(editor);
              }
            });
        },
      });

      clearTimeout(initEditorTimeoutId);
    }, 0);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    tinymce.execCommand('mceRemoveEditor', false, this.id);
  }

  updated(changedProperties) {
    if (changedProperties.has('content')) {
      this.content = this._checkIfAutocompleteEditable(this.content);

      const oldValue = changedProperties.get('content');
      if (oldValue) {
        const newValue = this.content;
        if (tinymce.get(this.id)) {
          tinymce.get(this.id).setContent(newValue);
        }
      }
    }
  }

  _checkIfAutocompleteEditable(content) {
    let updatedContent = content;
    if (!this._showAutocomplete) {
      updatedContent = updatedContent.replaceAll(
        "contenteditable='false'",
        "contenteditable='true'",
      );
      updatedContent = updatedContent.replaceAll(
        "contenteditable='false'",
        "contenteditable='true'",
      );
      updatedContent = updatedContent.replaceAll(
        'contenteditable="false"',
        'contenteditable="true"',
      );
    }

    return updatedContent;
  }

  _onInit = () => {
    this.contentArea = this.renderRoot.querySelector('.tox-tinymce');
    this._hideBorder();
  };

  _showBorder = () => {
    if (!this.showBorder) {
      this.contentArea.classList.remove('no-border');
    }
  };

  _hideBorder = () => {
    if (!this.showBorder) {
      this.contentArea.classList.add('no-border');
    }
  };

  _onContentChange = updatedContent => {
    const detail = {
      message: 'uniphore editor content change',
      currentInnerHTML: updatedContent,
    };

    dispatchWebComponentEvent(this, 'on-content-change', detail);
  };

  _onBlur = updatedContent => {
    const detail = {
      message: 'uniphore editor blur',
      currentInnerHTML: updatedContent,
    };

    this._hideBorder();

    dispatchWebComponentEvent(this, 'on-blur', detail);
  };

  _onAutocompleteClicked = () => {
    if (!this._autocompleteItems.length) {
      const autocompleteDataPromises = [
        variablesRemoteService.getAllVariables(),
        UAssistService.getEntitiesByBusinessProcess(
          this.autocompleteMetadata.organizationId,
          this.autocompleteMetadata.businessProcessId,
        ),
      ];
      Promise.all(autocompleteDataPromises).then(
        ([variablesResponse, entitiesResponse]) => {
          const variables = variablesResponse.data.variables;
          const autocompleteVariables = variables.map(variable => ({
            id: variable.id,
            label: variable.name,
            value: variable,
            toolbar: html` <uniphore-toolbar-variable
              item="${JSON.stringify(variable)}"
            ></uniphore-toolbar-variable>`,
          }));

          const entities = entitiesResponse.data || [];
          const autocompleteEntities = entities.map(entity => ({
            id: entity.id,
            label: entity.name,
            value: entity,
            toolbar: html` <uniphore-simple-toolbar
              item="${JSON.stringify(entity)}"
              icon="${entityIcon}"
              title="${UNIPHORE_AUTOCOMPLETE_ENTITY_TYPE_TOOLTIP}"
            >
            </uniphore-simple-toolbar>`,
          }));

          this._autocompleteItems =
            autocompleteVariables.concat(autocompleteEntities);
          console.log('_onAutocompleteClicked', this._autocompleteItems);
        },
      );
    }
  };

  _onAutocompleteOptionSelected = event => {
    // Render new html web component
    let label = event.detail.name;
    let id = event.detail.id;
    let type = event.detail.variableType
      ? 'variable'
      : event.detail.entityType
      ? 'entity'
      : '';

    let className = `uniphore-${type}-name`;
    let idType = `${type}-id`;

    // update content, remove '@' and ser cursor back to its current place
    const editor = tinymce.activeEditor;
    let content = editor.getContent();
    const bookmark = editor.selection.getBookmark(2, true);
    content = content.replaceAll('@</p>', '');
    editor.setContent(content);
    bookmark.start[0]++;
    editor.selection.moveToBookmark(bookmark);

    // Add the new custom tag
    editor.insertContent(
      `<span ${idType}="${id}" class="${className}" contentEditable="${!this
        ._showAutocomplete}">${label}</span>`,
    );
  };

  _onKeyUp = updatedContent => {
    const detail = {
      message: 'uniphore editor keyUp',
      currentInnerHTML: updatedContent,
    };

    dispatchWebComponentEvent(this, 'on-key-up', detail);
  };

  // for client side event when variable value changed
  // _onAutocompleteVariableValueChange = (editor) => {
  //     const autocompleteUniphoreVariables = editor.dom.select("span[class^='uniphore-']");
  //
  //     const observer = new MutationObserver((mutations) => {
  //         mutations.forEach((mutation) => {
  //             const detail = {
  //                 message: "uniphore autocomplete variable value changed",
  //                 variableId: mutation.target.parentElement.id,
  //                 variableNewValue: mutation.target.nodeValue
  //             }
  //
  //             dispatchWebComponentEvent(this, 'on-autocomplete-variable-value-change', detail);
  //         });
  //     });
  //
  //     const config = {characterData: true, subtree: true};
  //     autocompleteUniphoreVariables.forEach((node) => {
  //         observer.observe(node, config);
  //     });
  // }

  _onAutocompleteVariableRemove(editor) {
    const autocompleteUniphoreVariables = editor.dom.select(
      "span[class^='uniphore-']",
    );

    autocompleteUniphoreVariables.forEach(uniphoreVariable => {
      uniphoreVariable.addEventListener('click', () => {
        this._removeAutocompleteVariable(editor, uniphoreVariable);
      });
    });
  }

  _removeAutocompleteVariable(editor, uniphoreVariable) {
    let uniphoreVariableSpan = uniphoreVariable.outerHTML.toString();
    uniphoreVariableSpan = uniphoreVariableSpan.replace(
      ' data-mce-selected="1"',
      '',
    );
    console.log('uniphore-rich-text-editor - remove: ', uniphoreVariableSpan);

    let content = editor.getContent();
    content = content.replaceAll(uniphoreVariableSpan, '');
    editor.setContent(content);

    // const bookmark = editor.selection.getBookmark(2,true);
    // content = content.replaceAll(uniphoreVariable, "");
    // editor.setContent(content);
    // bookmark.start[0]++;
    // editor.selection.moveToBookmark(bookmark);
  }
}

customElements.define('uniphore-rich-text-editor', UniphoreRichTextEditor);
