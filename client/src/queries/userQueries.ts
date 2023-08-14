import { gql } from "@apollo/client";

const ALL_USERS = gql`
  query users {
    users {
      name
      email
      followers
      following
      connections
      headline
      city
      profileImg
      about
    }
  }
`;

const USER = gql`
  query User($id: String!) {
    user(id: $id) {
      name
      email
      followers
      following
      connections
      headline
      city
    }
  }
`;

export { ALL_USERS, USER };
