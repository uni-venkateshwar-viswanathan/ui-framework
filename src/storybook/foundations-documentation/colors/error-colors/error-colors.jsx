import React from 'react';
import { ColorsDescription } from '../../../components/colors-description/colors-description.jsx';

const colorKeys = [
  'linen-color',
  'raw-silk-color',
  'pale-magenta-color',
  'ultra-red-color',
  'dark-candy-red-color',
];

export const ErrorColors = () => <ColorsDescription colorNames={colorKeys} />;
