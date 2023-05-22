import './uniphore-tag';
import { withActions } from '@storybook/addon-actions/decorator';

export default {
  title: 'Design System/Tag',
  component: 'uniphore-tag',
  argTypes: {
    color: { control: 'color' },
    background: { control: 'color' },
  },
  parameters: {
    actions: {
      handles: ['remove-tag'],
    },
  },
  decorators: [withActions],
};

export const SimpleTag = {
  args: {
    label: 'SimpleTag',
  },
};

export const RemovableTag = {
  args: {
    label: 'RemovableTag',
    removable: true,
  },
};
