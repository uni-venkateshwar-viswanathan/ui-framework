import cx from "classnames";
import "./frame.scss";
import React from "react";

export const Frame = ({ children, className, noGutter, noBorder }) => (
  <div
    className={cx("uniphore-storybook-frame", className, {
      "uniphore-storybook-frame--no-gutter": noGutter,
      "uniphore-storybook-frame--no-border": noBorder
    })}
  >
    {children}
  </div>
);

export default Frame;