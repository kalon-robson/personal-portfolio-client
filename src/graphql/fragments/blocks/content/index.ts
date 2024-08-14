import gql from 'graphql-tag';

export const CONTENT_BLOCK = gql`
  fragment ContentBlockFragment on Content {
    content
    id
    blockName
    blockType
  }
`;
