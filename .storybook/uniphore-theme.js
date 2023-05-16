import { create } from '@storybook/theming/create';
import uniphoreLogo from './uniphore-logo.png';


export default create({
  base: 'uniphore-default-theme',

  brandTitle: 'Uniphore Design System',
  brandUrl: 'https://style.uniphore.com',
  brandImage: uniphoreLogo,
  brandTarget: '_self',

  colorPrimary: '#D40F7D',
  colorSecondary: '#EE9FCB',
});