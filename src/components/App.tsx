import React from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import "../App.css";
import { API_ENDPOINT } from "../utils/Constants";

const client = new ApolloClient({
  uri: API_ENDPOINT,
  cache: new InMemoryCache({}),
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_GITHUB_TOKEN}`,
  },
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App"></div>;
    </ApolloProvider>
  );
}

export default App;
