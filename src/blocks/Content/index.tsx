import React from 'react';
import { Content } from '../../graphql/generated/schema';
import { RichText } from '../../components';
import { Container } from '../../components/layouts';

export const ContentComponent: React.FC<Content> = ({ content }) => (
  <Container>
    <RichText
      content={content}
    />
  </Container>
);
