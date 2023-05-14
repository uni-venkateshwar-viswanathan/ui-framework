import React from 'react';
import './icon-description.scss';
import cx from 'classnames';
import '../../../assets/icons/icomoon/style.css';

export const IconDescription = ({ iconClassName, description }) => (
  <div className='uniphore-storybook-icon-description'>
    <div className={cx("uniphore-storybook-icon", iconClassName)} />
    <section className='uniphore-storybook-icon-visual-description'>{description}</section>
  </div>
);
