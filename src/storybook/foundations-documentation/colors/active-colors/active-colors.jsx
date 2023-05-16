import React from 'react';
import { ColorsDescription } from '../../../components/colors-description/colors-description.jsx';

const colorKeys = [
  'icy-blue-color-hila',
  'baby-blue-color',
  'uniphore-blue-color',
  'true-blue-color',
  'active-blue-color',
  'oxford-blue-color',
  'nav-blue-color',
];

export const ActiveColors = () => <ColorsDescription colorNames={colorKeys} />;
