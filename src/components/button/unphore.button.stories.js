import './uniphore-button.js';
import {
  PRIMARY_BUTTON,
  SECONDARY_BUTTON,
  TEXT_BUTTON,
  LARGE_BUTTON,
  MEDIUM_BUTTON,
  SMALL_BUTTON,
} from './uniphore-button-consts.js';
import { withActions } from '@storybook/addon-actions/decorator';

export default {
  title: 'UniphoreButton',
  component: 'uniphore-button',
  argTypes: {
    type: {
      control: 'select',
      options: [PRIMARY_BUTTON, SECONDARY_BUTTON, TEXT_BUTTON],
    },
    size: {
      control: 'select',
      options: [LARGE_BUTTON, MEDIUM_BUTTON, SMALL_BUTTON],
    },
  },
  parameters: {
    actions: {
      handles: ['uniphore-button-click'],
    },
  },
  decorators: [withActions],
};

export const Primary = {
  args: {
    text: 'PrimaryButton',
    type: PRIMARY_BUTTON,
  },
};

export const Secondary = {
  args: {
    text: 'SecondaryButton',
    type: SECONDARY_BUTTON,
  },
};

export const Text = {
  args: {
    text: 'TextButton',
    type: TEXT_BUTTON,
  },
};

export const Large = {
  args: {
    text: 'LargeButton',
    size: LARGE_BUTTON,
  },
};

export const Medium = {
  args: {
    text: 'MediumButton',
    size: MEDIUM_BUTTON,
  },
};

export const Small = {
  args: {
    text: 'SmallButton',
    size: SMALL_BUTTON,
  },
};

export const PrimaryDisabledButton = {
  args: {
    text: 'PrimaryDisabledButton',
    type: PRIMARY_BUTTON,
    disabled: true,
  },
};

export const SecondaryDisabledButton = {
  args: {
    text: 'SecondaryDisabledButton',
    type: SECONDARY_BUTTON,
    disabled: true,
  },
};
