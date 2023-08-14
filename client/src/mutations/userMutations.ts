import { gql } from "@apollo/client";

const SIGNUP = gql`
  mutation signUp($name: String!, $email: String!, $password: String!) {
    signUp(name: $name, email: $email, password: $password) {
      token
      user {
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
  }
`;
const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
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
  }
`;

export { SIGNUP, LOGIN };
