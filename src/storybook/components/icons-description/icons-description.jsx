import React from 'react';
import { Frame } from '../frame/frame';
import { IconDescription } from '../icon-description/icon-description';
import { iconsMap } from '../../../utils/icons';
import './icons-description.scss';

export const IconsDescription = () => {
  const descriptions = () =>
    iconsMap.map(icon => (
      <IconDescription
        key={icon.description}
        iconClassName={icon.className}
        description={icon.description}
      />
    ));
  return (
    <div className="uniphore-storybook-icons-description">{descriptions()}</div>
  );
};
