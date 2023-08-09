import { gql } from "@apollo/client";

const ALLPOST = gql`
  query getPosts {
    posts {
      id
      userId
      caption
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

export { ALLPOST };
