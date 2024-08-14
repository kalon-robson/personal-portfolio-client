import gql from 'graphql-tag';
import { CONTENT_BLOCK, IMAGE_BLOCK } from '../../fragments/blocks';

export const ARTICLES = gql`
  query Articles($draft: Boolean, $where: Article_where, $limit: Int, $page: Int, $sort: String) {
    Articles(draft: $draft, where: $where, limit: $limit, page: $page, sort: $sort) {
      docs {
        id
        title
        slug
        header {
          description
        }
        publishedAt
        createdAt
        updatedAt
      }
      hasNextPage
      hasPrevPage
      limit
      nextPage
      offset
      page
      pagingCounter
      prevPage
      totalDocs
      totalPages
    }
  }
`;

export const ARTICLE = gql`
  query Article($draft: Boolean, $where: Article_where,) {
    Articles(draft: $draft, where: $where, limit: 1, page: 1) {
      docs {
        id
        title
        slug
        header {
          description
        }
        publishedAt
        createdAt
        updatedAt
        layout {
          blocks {
            ...ContentBlockFragment
            ...ImageBlockFragment
          }
        }
      }
    }
  }
  ${CONTENT_BLOCK}
  ${IMAGE_BLOCK}
`;
