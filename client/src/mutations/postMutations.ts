import { gql } from "@apollo/client";

const CREATE_POST = gql`
  mutation CreatePost(
    $userId: String!
    $caption: String!
    $containMedia: Boolean!
    $mediaType: String!
    $media: Array!
  ) {
    createPost(
      userId: $userId
      caption: $caption
      containMedia: $containMedia
      mediaType: $mediaType
      media: $media
    ) {
      id
      userId
      caption
      containMedia
      mediaType
      media
    }
  }
`;

export { CREATE_POST };
