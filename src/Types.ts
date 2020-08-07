export type SearchInput = {
  search: string;
};

//github search types
//https://docs.github.com/en/graphql/reference/enums#searchtype
export enum SearchType {
  USER = "USER",
  REPOSITORY = "REPOSITORY",
  ISSUE = "ISSUE",
}

export type SearchResultItemConnection = {
  after?: string;
  before?: string;
  first?: number;
  last?: number;
  query: string;
  type: SearchType;
};

export type UserEdges = {
  cursor: string;
  node: UserData;
};

export type UserData = {
  avatarUrl: string;
  login: string;
  name: string | null;
  url: string;
};
