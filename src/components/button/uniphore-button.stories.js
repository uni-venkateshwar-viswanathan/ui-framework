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
import { horizontalStory } from '../../storybook/decorators/horizontal-story.js';

export default {
  title: 'Button',
  component: 'uniphore-button',
  render: args => html`
    <uniphore-button
      type=${args.type}
      size=${args.size}
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
  parameters: {
    actions: {
      handles: ['uniphore-button-click'],
    },
  },
  decorators: [withActions],
};

export const PrimaryButton = {
  args: {
    text: 'PrimaryButton',
    type: PRIMARY_BUTTON,
    size: MEDIUM_BUTTON,
  },
};

export const ButtonTypes = {
  render: () => html`
    <uniphore-button type=${PRIMARY_BUTTON} size=${MEDIUM_BUTTON}
      >Primary</uniphore-button
    >
    <uniphore-button type=${SECONDARY_BUTTON} size=${MEDIUM_BUTTON}
      >Secondary</uniphore-button
    >
    <uniphore-button type=${TEXT_BUTTON} size=${MEDIUM_BUTTON}
      >Text</uniphore-button
    >
  `,
  decorators: [horizontalStory],
};

export const ButtonSizes = {
  render: () => html`
    <uniphore-button type=${PRIMARY_BUTTON} size=${LARGE_BUTTON}
      >Large</uniphore-button
    >
    <uniphore-button type=${PRIMARY_BUTTON} size=${MEDIUM_BUTTON}
      >Medium</uniphore-button
    >
    <uniphore-button type=${PRIMARY_BUTTON} size=${SMALL_BUTTON}
      >Small</uniphore-button
    >
  `,
  decorators: [horizontalStory],
};

export const ButtonKindsDisabled = {
  render: () => html`
    <uniphore-button
      type=${PRIMARY_BUTTON}
      size=${MEDIUM_BUTTON}
      .isDisabled=${true}
      >Primary</uniphore-button
    >
    <uniphore-button
      type=${SECONDARY_BUTTON}
      size=${MEDIUM_BUTTON}
      .isDisabled=${true}
      >Secondary</uniphore-button
    >
    <uniphore-button
      type=${TEXT_BUTTON}
      size=${MEDIUM_BUTTON}
      .isDisabled=${true}
      >Text</uniphore-button
    >
  `,
  decorators: [horizontalStory],
};
