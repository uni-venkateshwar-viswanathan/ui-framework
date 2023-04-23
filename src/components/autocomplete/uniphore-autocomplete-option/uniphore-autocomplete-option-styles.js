import { css } from 'lit';

export const uniphoreAutocompleteOptionStyles = css`
  :host {
    --uniphore-label-line-height: 19px;
  }

  .uniphore-autocomplete-option {
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    color: #606266;
    padding: 15px var(--uniphore-autocomplete-padding) 13px
      var(--uniphore-autocomplete-padding);
  }

  .uniphore-autocomplete-option:hover {
    cursor: pointer;
    color: var(--uniphore-autocomplete-option-hover-background-color, white);
    background-color: var(
      --uniphore-autocomplete-option-hover-background-color,
      #4da1ff
    );
  }

  .prefix-container,
  .suffix-container {
    height: var(--uniphore-label-line-height);
  }
`;
