import { css } from 'lit';

export const uniphoreButtonStyles = css`
  button {
    display: flex;
    align-items: center;
    border-radius: 4px;
    font-family: var(--uniphore-font-family, var(--poppins-semi-bold));
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
    background-color: var(
      --uniphore-primary-button-color,
      var(--true-blue-color)
    );
    border: 1px solid
      var(--uniphore-primary-button-color, var(--true-blue-color));
  }

  .uniphore-primary-button:hover:enabled {
    background-color: var(
      --uniphore-primary-button-hover-color,
      var(--primary-hover-color)
    );
    border: 1px solid
      var(
        --uniphore-primary-button-hover-border-color,
        var(--primary-hover-color)
      );
  }

  .uniphore-primary-button:active:enabled {
    background-color: var(
      --uniphore-primary-button-active-color,
      var(--primary-active-color)
    );
    border: 1px solid
      var(--uniphore-primary-button-active-color, var(--primary-active-color));
  }

  .uniphore-primary-button:disabled {
    color: var(
      --uniphore-primary-button-disabled-color,
      var(--border-grey-color)
    );
    opacity: 0.6;
    background-color: var(
      --uniphore-primary-button-disabled-color,
      var(--cool-grey-color)
    );
    border: 1px solid var(--cool-grey-color);
  }

  .uniphore-secondary-button {
    outline: none;
    color: var(--uniphore-secondary-button-color, var(--true-blue-color));
    border: var(
      --uniphore-secondary-button-border,
      1px solid var(--true-blue-color)
    );
    background-color: var(--uniphore-secondary-button-color, white);
  }

  .uniphore-secondary-button:hover:enabled {
    background-color: var(
      --uniphore-secondary-button-hover-color,
      var(--secondary-hover-color)
    );
  }

  .uniphore-secondary-button:active:enabled {
    color: var(
      --uniphore-secondary-button-active-color,
      var(--active-blue-color)
    );
    background-color: var(
      --uniphore-secondary-button-active-color,
      var(--secondary-active-color)
    );
    border: var(
      --uniphore-secondary-button-active-border,
      1px solid var(--active-blue-color)
    );
  }

  .uniphore-secondary-button:disabled {
    color: var(
      --uniphore-secondary-button-disabled-color,
      var(--cool-grey-color)
    );
    border: var(
      --uniphore-secondary-button-disabled-border,
      1px solid var(--cool-grey-color)
    );
  }

  button.uniphore-text-button {
    outline: none;
    color: var(--uniphore-text-button-color, var(--true-blue-color));
    border: var(--uniphore-text-button-border, none);
    background: none;
  }

  .uniphore-text-button:disabled {
    color: var(--uniphore-text-button-disabled-color, var(--cool-grey-color));
  }

  .uniphore-text-button:hover:enabled {
    color: var(--uniphore-text-button-hover-color, var(--primary-hover-color));
  }

  .uniphore-text-button:active:enabled {
    color: var(--uniphore-text-button-active-color, var(--active-blue-color));
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
