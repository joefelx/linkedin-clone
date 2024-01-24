import { gql } from "@apollo/client";

const ALLPOST = gql`
  query getPosts {
    posts {
      id
      userId
      caption
      containMedia
      media
      likes
      comments {
        commenterId
        comment
      }
      repost
    }
  }
`;

const POST_USER = gql`
  query User($id: String!) {
    user(id: $id) {
      name
      headline
      profileImg
    }
  }
`;

export { ALLPOST, POST_USER };
