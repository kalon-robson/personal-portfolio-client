import gql from 'graphql-tag';
import { CONTENT_BLOCK } from '../content';
import { CARD_CONTENT_BLOCK } from '../cardContent';

export const COLUMNS_BLOCK = gql`
  fragment ColumnsBlockFragment on Columns {
    columns {
      id
      columnWidth
      blocks {
        ...ContentBlockFragment
        ...CardContentBlockFragment
      }
    }
    id
    blockName
    blockType
  }
  ${CONTENT_BLOCK}
  ${CARD_CONTENT_BLOCK}
`;
