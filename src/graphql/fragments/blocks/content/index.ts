import { gql } from '@apollo/client';

export const CONTENT_BLOCK = gql`
  fragment ContentBlockFragment on Content {
    content
    id
    blockName
    blockType
  }
`;
