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
      // https://storybook.js.org/addons/storybook-addon-themes/
      default: 'uniphore-default-theme',
      list: [
        { name: 'pink-theme', class: ['pink-theme'], color: '#E61A6B' },
        { name: 'uniphore-default-theme', class: ['uniphore-default-theme'], color: '#0062D6' }
      ],
    }
  },
};

export default preview;
