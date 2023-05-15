import { create } from '@storybook/theming/create';
import uniphoreLogo from './uniphore-logo.png';

export default create({
  base: 'light',

  brandTitle: '<img src="./uniphore-logo.svg" width="10px" height="10px"/>',
  brandUrl: 'https://style.uniphore.com',
  brandImage: uniphoreLogo,
  brandTarget: '_self',

  colorPrimary: '#D40F7D',
  colorSecondary: '#EE9FCB',
});
