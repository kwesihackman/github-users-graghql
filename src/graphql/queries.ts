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
