import { gql } from '@apollo/client';

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
