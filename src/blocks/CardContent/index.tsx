import React from 'react';
import { Content } from '../../graphql/generated/schema';
import { RichText } from '../../components';
import { Container } from '../../components/layouts';
import { cardContentComponentStyles } from './styles';

export const CardContentComponent: React.FC<Content> = ({ content }) => {
  const styles = cardContentComponentStyles();

  return (
    <Container className={styles.container}>
      <RichText
        content={content}
      />
    </Container>
  );
};
