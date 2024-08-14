import { gql } from '@apollo/client';
import { MEDIA_FIELD } from '../../fragments/fields/media';
import { CONTENT_BLOCK, IMAGE_BLOCK } from '../../fragments/blocks';

export const PAGES = gql`
  ${CONTENT_BLOCK}
  ${IMAGE_BLOCK}
  ${MEDIA_FIELD}
  query Pages($where: Page_where, $limit: Int, $page: Int, $sort: String) {
    Pages(where: $where, limit: $limit, page: $page, sort: $sort) {
      docs {
        id
        title
        image {
          ...MediaFieldFragment
        }
        layout {
          ...ContentBlockFragment
          ...ImageBlockFragment
        }
        meta {
          title
          description
        }
        slug
        updatedAt
        createdAt
      }
    }
  }
`;
