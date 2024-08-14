import React from 'react';
import { Content } from '../../graphql/generated/schema';
import { RichText } from '../../components';
import { Container } from '../../components/layouts';
import { contentComponentStyles } from './styles';

export const ContentComponent: React.FC<Content> = ({ content }) => {
  const styles = contentComponentStyles();

  return (
    <Container className={styles.container}>
      <RichText
        content={content}
      />
    </Container>
  );
};
