import React from 'react';
import { LexicalReactRender } from './serialize';
import { Content } from '../../graphql/generated/schema';

export const RichText: React.FC<{ className?: string; content: Content['content'] }> = ({
  className,
  content,
}) => {
  if (!content?.root?.children) {
    return null;
  }

  return <div className={className}>{LexicalReactRender({ content })}</div>;
};
