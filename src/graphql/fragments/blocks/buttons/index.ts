import { gql } from '@apollo/client';
import { LINK_FIELD } from '../../fields';

export const BUTTONS_BLOCK = gql`
  fragment ButtonsBlockFragment on Buttons {
    buttons {
      id
      buttonType
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
