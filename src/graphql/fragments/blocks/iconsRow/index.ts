import gql from 'graphql-tag';

export const ICONS_ROW_BLOCK = gql`
  fragment IconsRowBlockFragment on IconsRow {
    icons {
      id
      icon
    }
    id
    blockName
    blockType
  }
`;
