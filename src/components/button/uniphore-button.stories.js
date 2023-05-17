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

const buttonTypesControl = {
  control: 'select',
  options: [PRIMARY_BUTTON, SECONDARY_BUTTON, TEXT_BUTTON],
};

const buttonSizesControl = {
  control: 'select',
  options: [LARGE_BUTTON, MEDIUM_BUTTON, SMALL_BUTTON],
};

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
    type: buttonTypesControl,
    size: buttonSizesControl,
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

export const ButtonTypes = {
  render: args => html`
    <uniphore-button type=${args.type}>
      <span>Example Button</span>
    </uniphore-button>
  `,
  argTypes: {
    type: buttonTypesControl,
  },
  args: {
    type: PRIMARY_BUTTON,
  },
};

export const ButtonSizes = {
  render: args => html`
    <uniphore-button size=${args.size}>
      <span>Example Button</span>
    </uniphore-button>
  `,
  argTypes: {
    size: buttonSizesControl,
  },
  args: {
    size: LARGE_BUTTON,
  },
};

export const DisabledButtons = {
  render: args => html`
    <uniphore-button type=${args.type} isDisabled=${true}>
      <span>Disabled Button</span>
    </uniphore-button>
  `,
  argTypes: {
    type: buttonTypesControl,
  },
  args: {
    type: PRIMARY_BUTTON,
  },
};
