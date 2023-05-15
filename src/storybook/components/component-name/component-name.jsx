import cx from 'classnames';
import './component-name.scss';
import React from 'react';

export const ComponentName = ({ children, className }) => {
  return (
    <h1 className={cx('uniphore-storybook-component-name', className)}>
      {children}
    </h1>
  );
};
