import gql from 'graphql-tag';

export const LINK_FIELD = gql`
  fragment LinkFieldFragment on Link {
    type
    reference {
      id
      slug
    }
    url
    label
  }
`;
