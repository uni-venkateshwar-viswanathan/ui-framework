import { css } from 'lit';

export const uniphoreRichTextEditorStyles = css`
  :root {
    --edit-text-area-background-color: #f1f2f4;
  }

  .editor-container {
    position: relative;
  }

  .tox-tinymce {
    border: 1px solid #cfd4d5;
    border-radius: 0;
  }

  .tox-tinymce--disabled .tox-edit-area__iframe {
    background-color: var(--edit-text-area-background-color);
  }

  .no-border {
    border: 1px solid transparent;
  }

  .tox:not(.tox-tinymce-inline) .tox-editor-header {
    box-shadow: none;
    border-bottom: 1px solid #cfd4d5;
  }

  .tox .tox-tbtn--bespoke[title='Font sizes'] {
    width: 60px;
  }

  /*.tox .tox-tbtn--bespoke[title="Blocks"] {*/
  /*    width: 95px;*/
  /*}*/

  .autocomplete-container {
    position: absolute;
    z-index: 1;
    display: none;
  }

  .show-autocomplete {
    display: inline-block;
  }

  .autocomplete-trigger {
    width: 50px;
    height: 10px;
  }
`;
