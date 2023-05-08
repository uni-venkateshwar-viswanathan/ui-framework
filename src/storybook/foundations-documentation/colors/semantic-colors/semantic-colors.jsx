import React from "react";
import { ColorsDescription } from "../../../components/colors-description/colors-description.jsx";

const colorKeys = [
  "primary-color",
  "primary-hover-color",
  "primary-selected-color",
  "primary-selected-hover-color",
  "negative-color",
  "negative-color-hover",
  "negative-color-selected",
  "negative-color-selected-hover"
];

export const SemanticColors = () => <ColorsDescription colorNames={colorKeys} />;