import React from 'react';
import { serializeLexical } from './serialize';
import { Content } from '../../graphql/generated/schema';

export const RichText: React.FC<{ className?: string; content: Content['content'] }> = ({
  className,
  content,
}) => {
  if (!content?.root?.children) {
    return null;
  }

  return <div className={className}>{serializeLexical({ nodes: content?.root?.children })}</div>;
};
