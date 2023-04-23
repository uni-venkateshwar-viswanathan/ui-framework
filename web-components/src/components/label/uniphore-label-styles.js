import { css } from 'lit';

export const uniphoreLabelStyles = css`
  .uniphore-label {
    color: var(--uniphore-label-text-color, #606266);
    font-size: var(--uniphore-label-text-font-size, 16px);
    line-height: var(--uniphore-label-text-line-height, 1.5);
    position: relative;
  }

  .uniphore-label-ellipsis {
    width: var(--uniphore-label-width, 100%);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    display: inline-block;
  }
`;
