import React from 'react';
import { icons } from './svgs';

export type IconType = keyof typeof icons;

interface Props {
  icon: IconType;
  className?: string;
  size?: number;
  fill?: string;
}

export const Icon: React.FC<Props> = ({
  className,
  size = 20,
  icon,
  fill,
}) => {
  const svg = icons[icon];

  const parser = new DOMParser();
  const svgDoc = parser.parseFromString(svg, 'image/svg+xml');
  const svgElement = svgDoc.getElementsByTagName('svg')[0];

  const viewBox = svgElement?.getAttribute('viewBox')?.split(' ');

  const width = viewBox ? parseInt(viewBox[2], 10) : 0;
  const height = viewBox ? parseInt(viewBox[3], 10) : 0;

  let svgWidth = 0;
  let svgHeight = 0;
  if (width >= height) {
    svgWidth = size;
    svgHeight = size * (height / width);
  } else {
    svgWidth = size * (width / height);
    svgHeight = size;
  }

  svgElement.setAttribute('width', svgWidth.toString());
  svgElement.setAttribute('height', svgHeight.toString());
  svgElement.setAttribute('className', className || '');
  svgElement.setAttribute('fill', fill || 'currentColor');

  return (
    <span
      dangerouslySetInnerHTML={{ __html: svgElement.outerHTML }}
      className={className}
      style={{
        display: 'inline-block',
        lineHeight: 0,
      }}
    />
  );
};
