import React from 'react';
import { Content } from '../../graphql/generated/schema';
import { RichText } from '../../components';

export const ContentComponent: React.FC<Content> = ({ content }) => (
  <div>
    <RichText
      content={content}
    />
  </div>
);
