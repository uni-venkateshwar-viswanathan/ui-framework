
import React from "react";
import "./color-description.scss";
import { VisualDescription } from "../visual-description/visual-description";

export const ColorDescription = ({ colorName, description }) => {
  const color = (
    <div
      className={"uniphore-storybook-color-description"}
      style={{ backgroundColor: `var(--${colorName})` }}
    />
  );
  return (
    <VisualDescription title={colorName} description={description} className="uniphore-storybook-color-visual-description">
      {color}
    </VisualDescription>
  );
};