import React from "react";
import cx from 'classnames';

import "./visual-description.scss";

export const VisualDescription = ({ title, ariaLabel, children, description, className }) => {
  return (
    <div className={cx("uniphore-storybook-visual-description", className)} aria-label={ariaLabel}>
      <figure className="uniphore-storybook-visual-description_visual" aria-hidden>
        {children}
      </figure>
      <section className="uniphore-storybook-visual-description_text">
        <h5>{title}</h5>
        {description}
      </section>
    </div>
  );
};