import gql from 'graphql-tag';
import { CODE_SNIPPET_BLOCK, CONTENT_BLOCK, IMAGE_BLOCK } from '../../fragments/blocks';
import { MEDIA_FIELD, META_FIELD } from '../../fragments/fields';

export const ARTICLES = gql`
  query Articles($draft: Boolean, $where: Article_where, $limit: Int, $page: Int, $sort: String) {
    Articles(draft: $draft, where: $where, limit: $limit, page: $page, sort: $sort) {
      docs {
        id
        title
        slug
        header {
          description
          featuredImage {
            ...MediaFieldFragment
          }
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
  ${MEDIA_FIELD}
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
            ...CodeSnippetBlockFragment
          }
        }
        meta {
          ...MetaFieldFragment
        }
      }
    }
  }
  ${CONTENT_BLOCK}
  ${IMAGE_BLOCK}
  ${META_FIELD}
  ${CODE_SNIPPET_BLOCK}
`;
