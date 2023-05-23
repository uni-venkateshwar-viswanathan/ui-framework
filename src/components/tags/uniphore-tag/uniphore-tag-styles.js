import { css } from 'lit';

export const uniphoreTagStyles = css`
  .uniphore-tag {
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    min-width: 20px;
    max-width: 180px;
    width: fit-content;
    height: 30px;
    font-size: 13px;
    background-color: var(
      --uniphore-tag-background-color,
      rgba(2, 136, 209, 0.15)
    );
    border: 1px solid var(--uniphore-tag-border, #dcdfe6);
    border-radius: 4px;
    color: var(--uniphore-tag-color, #606266);
    padding-left: 6px;
    padding-right: var(--uniphore-tag-padding-right, 6px);
    box-sizing: border-box;

    .uniphore-label-in-tag {
      padding-top: 3px;
      padding-right: 5px;
    }

    .remove-tag-icon {
      cursor: pointer;
    }
  }
`;
