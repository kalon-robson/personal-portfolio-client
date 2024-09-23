import gql from 'graphql-tag';
import { MEDIA_FIELD } from '../media';

export const META_FIELD = gql`
  fragment MetaFieldFragment on Meta {
    title
    description
    image {
      ...MediaFieldFragment
    }
  }
  ${MEDIA_FIELD}
`;
