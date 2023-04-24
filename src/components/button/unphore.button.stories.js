import { html } from 'lit';
import './uniphore-button.js';
import '../../themes/UniphoreDefaultTheme.css';
import {
  PRIMARY_BUTTON,
  SECONDARY_BUTTON,
  TEXT_BUTTON,
} from './uniphore-button-consts.js';

export default {
  title: 'UniphoreButton',
  render: args =>
    html`<uniphore-button
      text="${args.text}"
      type="${args.type}"
    ></uniphore-button>`,
  argTypes: {
    type: [PRIMARY_BUTTON, SECONDARY_BUTTON, TEXT_BUTTON],
  },
};
export const Primary = {
  args: {
    text: 'PrimaryButton',
    type: PRIMARY_BUTTON,
  },
};
