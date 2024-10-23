import React from 'react';
import NextImage from 'next/image';
import { sizes } from './sizes';
import { ImageBlockFragmentFragment } from '../../graphql/generated/schema';
import { Container } from '../../components/layouts';
import { imageStyles } from './styles';

export const ImageComponent: React.FC<ImageBlockFragmentFragment> = ({
  image,
}) => {
  const styles = imageStyles();

  if (typeof image === 'object' && image.sizes) {
    const sizesToUse = sizes
      .map((size) => `(max-width: ${size}px) ${size}px`)
      .join(', ');

    return (
      <Container
        className={styles.container}
      >
        <NextImage
          src={image.url ?? ''}
          alt={image.alt}
          layout="responsive"
          width={image.width ?? 0}
          height={image.height ?? 0}
          sizes={sizesToUse}
        />
      </Container>
    );
  }

  return null;
};
