import gql from 'graphql-tag';

export const CARD_CONTENT_BLOCK = gql`
  fragment CardContentBlockFragment on CardContent {
    content
    id
    blockName
    blockType
  }
`;
