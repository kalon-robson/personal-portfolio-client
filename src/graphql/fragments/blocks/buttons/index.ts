import gql from 'graphql-tag';
import { LINK_FIELD } from '../../fields';

export const BUTTONS_BLOCK = gql`
  fragment ButtonsBlockFragment on Buttons {
    buttons {
      id
      link {
        ...LinkFieldFragment
      }
    }
    id
    blockName
    blockType
  }
  ${LINK_FIELD}
`;
