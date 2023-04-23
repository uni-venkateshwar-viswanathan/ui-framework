import { css } from 'lit';

export const uniphoreCollapseStyles = css`
  :host,
  .uniphore-collapse {
    display: flex;
    flex-direction: column;
  }

  .uniphore-collapse-toggle {
    cursor: pointer;
    padding: 10px;
    background: var(--header-background-color, transparent);
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .uniphore-collapse-toggle.caret-position-left {
    justify-content: flex-start;
    gap: 10px;
  }

  .uniphore-collapse-content {
    display: flex;
    flex-direction: column;
    overflow: hidden;
    transition: max-height 0.5s ease-out;
  }

  .uniphore-collapse-content-body {
    display: flex;
    flex-direction: column;
    border: var(--border-style, none);
  }
`;
