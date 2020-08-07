import { gql } from "@apollo/client";

export const FETCH_USERS = gql`
  query SearchUsers($first: Int, $type: SearchType!, $query: String!) {
    search(first: $first, type: $type, query: $query) {
      userCount
      edges {
        cursor
        node {
          ... on User {
            login
            name
            url
            avatarUrl
          }
        }
      }
    }
  }
`;

export const FETCH_USER = gql`
  query FetchUser($username: String!) {
    user(login: $username) {
      bio
      avatarUrl
      company
      createdAt
      followers {
        totalCount
      }
      following {
        totalCount
      }
    }
  }
`;
