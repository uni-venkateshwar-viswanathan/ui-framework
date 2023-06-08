import { css } from 'lit';

export const uniphoreButtonStyles = css`
  button {
    display: flex;
    align-items: center;
    border-radius: 4px;
    font-family: var(--uniphore-font-family);
    font-weight: var(--button-text-weight, 500);
  }

  button:hover {
    cursor: pointer;
  }

  button:disabled {
    cursor: var(--uniphore-button-disabled-cursor, not-allowed);
  }

  .uniphore-primary-button {
    outline: none;
    color: var(--uniphore-primary-button-color, white);
    background-color: var(--uniphore-primary-button-background-color, #0062d6);
    border: 1px solid var(--uniphore-primary-button-background-color, #0062d6);
  }

  .uniphore-primary-button:hover:enabled {
    background-color: var(
      --uniphore-primary-button-hover-background-color,
      #3381de
    );
    border: 1px solid var(--uniphore-primary-button-hover-border-color, #3381de);
  }

  .uniphore-primary-button:active:enabled {
    background-color: var(
      --uniphore-primary-button-active-background-color,
      #004eab
    );
    border: 1px solid
      var(--uniphore-primary-button-active-background-color, #004eab);
  }

  .uniphore-primary-button:disabled {
    color: var(--uniphore-primary-button-disabled-color, #8b8ba0);
    opacity: 0.6;
    background-color: var(
      --uniphore-primary-button-disabled-background-color,
      #d7dae3
    );
    border: 1px solid
      var(--uniphore-primary-button-disabled-border-color, #d7dae3);
  }

  .uniphore-secondary-button {
    outline: none;
    color: var(--uniphore-secondary-button-color, #0062d6);
    border: 1px solid var(--uniphore-secondary-button-border, #0062d6);
    background-color: var(--uniphore-secondary-button-background-color, white);
  }

  .uniphore-secondary-button:hover:enabled {
    background-color: var(
      --uniphore-secondary-button-hover-background-color,
      #afd5ff
    );
  }

  .uniphore-secondary-button:active:enabled {
    color: var(--uniphore-secondary-button-active-color, #004eab);
    background-color: var(
      --uniphore-secondary-button-active-background-color,
      #99c0ef
    );
    border: 1px solid var(--uniphore-secondary-button-active-border, 004EAB);
  }

  .uniphore-secondary-button:disabled {
    color: var(--uniphore-secondary-button-disabled-color, #8b8ba0);
    border: 1px solid var(--uniphore-secondary-button-disabled-border, #8b8ba0);
  }

  button.uniphore-text-button {
    outline: none;
    color: var(--uniphore-text-button-color, #0062d6);
    border: var(--uniphore-text-button-border, none);
    background: none;
  }

  .uniphore-text-button:disabled {
    color: var(--uniphore-text-button-disabled-color, #8b8ba0);
  }

  .uniphore-text-button:hover:enabled {
    color: var(--uniphore-text-button-hover-color, #3381de);
  }

  .uniphore-text-button:active:enabled {
    color: var(--uniphore-text-button-active-color, #004eab);
  }

  .uniphore-large-button {
    font-size: 16px;
    line-height: 24px;
    padding: var(--uniphore-large-button-padding, 12px 14px);
  }

  .uniphore-medium-button {
    font-size: 14px;
    line-height: 21px;
    padding: var(--uniphore-medium-button-padding, 10px 14px);
  }

  .uniphore-small-button {
    font-size: 12px;
    line-height: 18px;
    padding: var(--uniphore-small-button-padding, 7px 14px);
  }
`;
