import { gql } from '@apollo/client';
import { ARTICLE_SCROLLER_BLOCK, BUTTONS_BLOCK, CARD_LIST_BLOCK, CONTENT_BLOCK, IMAGE_BLOCK } from '../../fragments/blocks';

export const PAGES = gql`
  query Pages($where: Page_where, $limit: Int, $page: Int, $sort: String) {
    Pages(where: $where, limit: $limit, page: $page, sort: $sort) {
      docs {
        id
        title
        header {
          description
        }
        slug
        showSideNavigation
        updatedAt
        createdAt
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

export const PAGE = gql`
  query Pages($draft: Boolean, $where: P{age_where},) {
    Page(draft: $draft, where: $where, limit: 1, page: 1) {
      docs {
        id
        title
        header {
          description
        }
        slug
        showSideNavigation
        updatedAt
        createdAt
        layout {
          blocks {
            ...ContentBlockFragment
            ...ImageBlockFragment
            ...ButtonsBlockFragment
            ...ArticleScrollerBlockFragment
            ...CardListBlockFragment
          }
        }
      }
    }
  }
  ${CONTENT_BLOCK}
  ${IMAGE_BLOCK}
  ${BUTTONS_BLOCK}
  ${ARTICLE_SCROLLER_BLOCK}
  ${CARD_LIST_BLOCK}
`;
