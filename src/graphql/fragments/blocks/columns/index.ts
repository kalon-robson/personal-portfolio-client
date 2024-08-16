import gql from 'graphql-tag';
import { CONTENT_BLOCK } from '../content';

export const COLUMNS_BLOCK = gql`
  fragment ColumnsBlockFragment on Columns {
    columns {
      id
      columnWidth
      blocks {
        ...ContentBlockFragment
      }
    }
    id
    blockName
    blockType
  }
  ${CONTENT_BLOCK}
`;
