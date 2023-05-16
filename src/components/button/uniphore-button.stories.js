import './uniphore-button.js';
import { html } from 'lit';
import {
  PRIMARY_BUTTON,
  SECONDARY_BUTTON,
  TEXT_BUTTON,
  LARGE_BUTTON,
  MEDIUM_BUTTON,
  SMALL_BUTTON,
  ButtonType,
} from './uniphore-button-consts.js';
import { withActions } from '@storybook/addon-actions/decorator';
import submit from '../../storybook/assets/images/submit.svg';

export default {
  title: 'Design System/Button',
  component: 'uniphore-button',
  parameters: {
    actions: {
      handles: ['uniphore-button-click'],
    },
  },
  decorators: [withActions],
};

export const PrimaryButton = {
  render: args => html`
    <uniphore-button
      id=${args.id}
      name=${args.name}
      type=${args.type}
      size=${args.size}
      nativeType=${args.nativeType}
      .isDisabled=${args.isDisabled}
    >
      ${args.text}
    </uniphore-button>
  `,
  argTypes: {
    type: {
      control: 'select',
      options: [PRIMARY_BUTTON, SECONDARY_BUTTON, TEXT_BUTTON],
    },
    size: {
      control: 'select',
      options: [LARGE_BUTTON, MEDIUM_BUTTON, SMALL_BUTTON],
    },
    nativeType: {
      control: 'select',
      options: [ButtonType.button, ButtonType.submit, ButtonType.reset],
    },
  },
  args: {
    id: 'uniphore-button1',
    name: 'uniphore-button',
    text: 'PrimaryButton',
    type: PRIMARY_BUTTON,
    size: MEDIUM_BUTTON,
  },
};

export const DisabledButton = {
  render: args => html`
    <uniphore-button .isDisabled=${args.isDisabled}>
      ${args.text}
    </uniphore-button>
  `,
  args: {
    text: 'DisabledButton',
    isDisabled: true,
  },
};

export const ButtonWithPrefix = {
  render: () => html`<uniphore-button type=${PRIMARY_BUTTON}>
    <img slot="uniphore-button-prefix" src=${submit} />
    <span>ButtonWithPrefix</span>
  </uniphore-button>`,
};

export const ButtonWithPostfix = {
  render: () => html`<uniphore-button type=${PRIMARY_BUTTON}>
    <img slot="uniphore-button-postfix" src=${submit} />
    <span>ButtonWithPostfix</span>
  </uniphore-button>`,
};
