import { html } from 'lit';

export const horizontalStory = story =>
  html`<div style="display: flex; gap: 50px;">${story()}</div>`;
