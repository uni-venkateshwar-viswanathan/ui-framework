import { css } from 'lit';

export const uniphoreFileUploadStyles = css`
  :host {
    display: flex;
    flex-direction: column;
  }

  uniphore-button,
  .uniphore-file-upload,
  .uniphore-file-upload-label {
    display: flex;
  }

  .file-upload-icon:hover {
    cursor: pointer;
  }
`;
