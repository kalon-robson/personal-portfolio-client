import gql from 'graphql-tag';

export const CARD_LIST_BLOCK = gql`
  fragment CardListBlockFragment on CardList {
    cards {
      id
      title
      content
      tags
    }
    id
    blockName
    blockType
  }
`;
