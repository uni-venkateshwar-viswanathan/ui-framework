import './uniphore-tags';
import { withActions } from '@storybook/addon-actions/decorator';

export default {
  title: 'Tags/Tags List',
  component: 'uniphore-tags',
  tags: ['autodocs'],
  parameters: {
    actions: {
      handles: ['remove-tag', 'add-tag'],
    },
  },
  decorators: [withActions],
};

export const SimpleTags = {
  args: {
    tags: [{ label: 'Tag1' }, { label: 'Tag2' }],
  },
};

export const RemovableTags = {
  args: {
    ...SimpleTags.args,
    removable: true,
  },
};

export const NewTag = {
  args: {
    ...SimpleTags.args,
    showAddTag: true,
  },
};
