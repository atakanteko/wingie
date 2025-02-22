import { gql } from '@apollo/client';

export const GET_USERS = gql`
  {
    users {
      id
      name
      username
      email
      phone
      website
      aboutMe
      photo
      numberOfVote
    }
  }
`;

export const INCREASE_VOTE = gql`
  mutation IncreaseVote($id: ID!) {
    increaseVote(id: $id) {
      id
      name
      numberOfVote
    }
  }
`;

export const GET_USER = gql`
  query GetUser($id: ID!) {
    user(id: $id) {
      id
      name
      username
      email
      phone
      website
      aboutMe
      photo
      numberOfVote
    }
  }
`;
