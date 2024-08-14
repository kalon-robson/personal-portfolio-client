import { gql } from '@apollo/client';

export const MEDIA_FIELD = gql`
  fragment MediaFieldFragment on Media {
    id
    alt
    updatedAt
    createdAt
    url
    filename
    mimeType
    filesize
    width
    height
    focalX
    focalY
    sizes {
      card {
        url
        width
        height
        mimeType
        filesize
        filename
      }
      feature {
        url
        width
        height
        mimeType
        filesize
        filename
      }
    }
  }
`;
