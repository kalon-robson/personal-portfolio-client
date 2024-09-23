import gql from 'graphql-tag';
import { ARTICLE_SCROLLER_BLOCK, BUTTONS_BLOCK, CARD_CONTENT_BLOCK, CARD_LIST_BLOCK, COLUMNS_BLOCK, CONTENT_BLOCK, IMAGE_BLOCK } from '../../fragments/blocks';
import { ICONS_ROW_BLOCK } from '../../fragments/blocks/iconsRow';
import { META_FIELD } from '../../fragments/fields';

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
  query Page( $where: Page_where,) {
    Pages(where: $where, limit: 1, page: 1) {
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
            ...IconsRowBlockFragment
            ...ColumnsBlockFragment
            ...CardContentBlockFragment
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
  ${BUTTONS_BLOCK}
  ${ARTICLE_SCROLLER_BLOCK}
  ${CARD_LIST_BLOCK}
  ${ICONS_ROW_BLOCK}
  ${COLUMNS_BLOCK}
  ${CARD_CONTENT_BLOCK}
  ${META_FIELD}
`;
