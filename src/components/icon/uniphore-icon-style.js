import { css } from 'lit';
export const uniphoreIconStyle = css`
  :host {
    display: flex;
    flex-direction: column;
  }

  .uniphore-icon {
    color: var(--icon-color, 'white');
    font-size: var(--icon-size, '12px');
  }
`;
