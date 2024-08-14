import { gql } from '@apollo/client';
import { CONTENT_BLOCK } from '../content';

export const COLUMNS_BLOCK = gql`
  fragment ColumnsBlockFragment on Columns {
    columns {
      id
      columnWidth
      block {
        ...ContentBlockFragment
      }
    }
    id
    blockName
    blockType
  }
  ${CONTENT_BLOCK}
`;
