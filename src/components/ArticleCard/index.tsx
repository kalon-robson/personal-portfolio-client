import React from 'react';
import Link from 'next/link';
import { articleCardStyles } from './styles';
import { Article } from '../../graphql/generated/schema';
import { AppImage } from '../AppImage';

export const ArticleCard: React.FC<Article> = ({ title, slug, header }) => {
  const styles = articleCardStyles();

  return (
    <Link href={`/articles/${slug}`}>
      <div className={styles.container}>
        <AppImage
          image={header?.featuredImage}
          imageSize="card"
          className={styles.featuredImage}
        />
        <div className={styles.imageOverlay} />
        <h3 className={styles.title}>{title}</h3>
      </div>
    </Link>

  );
};
