import Image, { ImageProps } from 'next/image';
import React from 'react';
import { appImageStyles } from './styles';
import { constructClassName } from '../../utils/constructClassName';
import { Media } from '../../graphql/generated/schema';

type Props = Partial<ImageProps> & {
  image?: Media | null
  imageSize: 'card' | 'feature'
  className?: string
}

const imageSizes = {
  card: {
    height: 480,
    width: 640,
  },
  feature: {
    height: 576,
    width: 1024,
  },
};

export const AppImage: React.FC<Props> = ({ image, imageSize, className, ...rest }) => {
  const styles = appImageStyles();

  if (typeof image === 'object') {
    if (!image?.url) return null;

    switch (imageSize) {
      case 'feature':
        return (
          <Image
            src={image?.sizes?.feature?.url || image.url}
            alt={image.alt}
            width={imageSizes[imageSize].width}
            height={imageSizes[imageSize].height}
            className={constructClassName([
              styles.container,
              className,
            ])}
            quality={100}
            {...rest}
          />
        );
      default:
        return (
          <Image
            src={image?.sizes?.card?.url || image.url}
            alt={image.alt}
            width={imageSizes[imageSize].width}
            height={imageSizes[imageSize].height}
            className={constructClassName([
              styles.container,
              className,
            ])}
            quality={100}
            {...rest}
          />
        );
    }
  }

  return null;
};
