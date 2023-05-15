import React from 'react';
import './text-styles.scss';
import { VisualDescription, Frame } from '../../../components';

const CSS_BASE_CLASS = 'uniphore-storybook-text-description';
const fontStyles = [
  {
    fontType: 'H1',
    title: 'Main heading (Poppins 64px bold)',
    description: 'Use as main header on a page',
    className: 'font-h1',
  },
  {
    fontType: 'H2',
    title: 'Secondary heading (Poppins 48px bold)',
    description: 'Use as secondary header on a page',
    className: 'font-h2',
  },
  {
    fontType: 'H3',
    title: 'Third heading (Poppins 32px bold)',
    description: 'Use as third header on a page',
    className: 'font-h3',
  },
  {
    fontType: 'Subtitle1',
    title: 'Subtitle big strong (Poppins 24px bold)',
    description: 'Use as a bold big subtitle',
    className: 'font-subtitle-h1',
  },
  {
    fontType: 'Subtitle2',
    title: 'Subtitle big normal (Poppins 24px normal)',
    description: 'Use as a normal big subtitle',
    className: 'font-subtitle-h2',
  },
  {
    fontType: 'Subtitle3',
    title: 'Subtitle small strong (Poppins 18px bold)',
    description: 'Use as a bold small subtitle',
    className: 'font-subtitle-h3',
  },
  {
    fontType: 'Subtitle4',
    title: 'Subtitle small normal (Poppins 18px normal)',
    description: 'Use as a normal small subtitle',
    className: 'font-subtitle-h4',
  },
  {
    fontType: 'Body1',
    title: 'Body big strong (Poppins 16px strong)',
    description: 'Use as a big strong text',
    className: 'font-body-h1',
  },
  {
    fontType: 'Body2',
    title: 'Body big normal (Poppins 16px normal)',
    description: 'Use as a big normal text',
    className: 'font-body-h2',
  },
  {
    fontType: 'Body3',
    title: 'Body medium strong (Poppins 14px strong)',
    description: 'Use as a medium strong text',
    className: 'font-body-h3',
  },
  {
    fontType: 'Body4',
    title: 'Body medium normal (Poppins 14px normal)',
    description: 'Use as a medium normal text',
    className: 'font-body-h4',
  },
  {
    fontType: 'Body5',
    title: 'Body small strong (Poppins 12px strong)',
    description: 'Use as a small strong text',
    className: 'font-body-h5',
  },
  {
    fontType: 'Body6',
    title: 'Body small normal (Poppins 12px normal)',
    description: 'Use as a small normal text',
    className: 'font-body-h6',
  },
];

export const TextStyles = () => {
  return (
    <Frame>
      {fontStyles.map((item, index) => (
        <VisualDescription
          key={index}
          className={CSS_BASE_CLASS}
          ariaLabel={item.fontType}
          title={item.title}
          description={item.description}
        >
          <div className={item.className}>{item.fontType}</div>
        </VisualDescription>
      ))}
    </Frame>
  );
};
