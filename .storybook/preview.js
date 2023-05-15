/** @type { import('@storybook/web-components').Preview } */
import '../src/themes/pink-theme.css';
import '../src/themes/uniphore-default-theme.css';
import '../src/storybook/themes/storybook-default-theme.css';

const preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },

    themes: {
      default: 'uniphore-default-theme',
      list: [
        { name: 'pink-theme', class: ['pink-theme', 'light-mode'], color: 'pink' },
        { name: 'uniphore-default-theme', class: ['uniphore-default-theme', 'dark-mode'], color: '#3b5998' }
      ],
    }


  },
};

export default preview;
