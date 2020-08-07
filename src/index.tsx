import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import * as serviceWorker from "./serviceWorker";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { API_ENDPOINT } from "./utils/Constants";
import "dotenv/config";
console.log("token is ", process.env.REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN);

const client = new ApolloClient({
  uri: API_ENDPOINT,
  cache: new InMemoryCache({}),
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN}`,
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
