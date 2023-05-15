import React from 'react';
import { ColorsDescription } from '../../../components/colors-description/colors-description.jsx';

const colorKeys = [
  'cosmic-latte-color',
  'corn-silk-color',
  'marigold-color',
  'harvest-gold-color',
  'orange-color',
];

export const WarningColors = () => <ColorsDescription colorNames={colorKeys} />;
