import { gql } from '@apollo/client';
import { MEDIA_FIELD } from '../../fields/media';

export const IMAGE_BLOCK = gql`
  ${MEDIA_FIELD}
  fragment ImageBlockFragment on Image {
    image {
      ...MediaFieldFragment
    }
    caption
    id
    blockName
    blockType
  }
`;
