import gql from 'graphql-tag';

export const ARTICLE_SCROLLER_BLOCK = gql`
  fragment ArticleScrollerBlockFragment on ArticleScroller {
    articles {
      id
      slug
      title
      publishedAt
      header {
        description
      }
      createdAt
      updatedAt
    }
    id
    blockName
    blockType
  }
`;
