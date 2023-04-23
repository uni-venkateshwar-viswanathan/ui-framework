import { css } from 'lit';

export const uniphoreCheckboxStyles = css`
  :host {
    display: flex;
    flex-direction: column;
  }

  .uniphore-checkbox {
    display: flex;
  }

  .uniphore-checkbox-label {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .uniphore-checkbox-label-cb {
    border: 1px solid var(--checkbox-color);
    width: var(--checkbox-square-size);
    height: var(--checkbox-square-size);
    border-radius: 3px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    background-color: var(--checkbox-background-color);
  }

  .uniphore-checkbox-label-text {
    cursor: pointer;
    font-size: var(--checkbox-label-size);
  }

  .uniphore-checkbox-label-cb uniphore-icon {
    display: none;
  }

  .uniphore-checkbox-label > input {
    display: none;
  }

  .uniphore-checkbox-label > input[disabled] + .uniphore-checkbox-label-cb,
  .uniphore-checkbox-label > input[disabled] ~ .uniphore-checkbox-label-text {
    cursor: default;
    opacity: 0.5;
  }

  .uniphore-checkbox-label
    > input:checked
    + .uniphore-checkbox-label-cb
    uniphore-icon {
    display: flex;
  }
`;
