import React from "react";
import { MockedProvider } from "@apollo/client/testing";
import { render, queryByTestId } from "@testing-library/react";
import renderer from "react-test-renderer";
import Home from "./components/Home.Page";
import Card from "./components/Card.Component";
import { UserData } from "./Types";
import App from "./components/App";

const appSetup = () => {
  return render(
    <MockedProvider addTypename={false}>
      <App />
    </MockedProvider>
  );
};

it("Home component renders correctly", () => {
  renderer.create(<Home />);
});

it("card component renders correctly", () => {
  const user: UserData = {
    avatarUrl:
      "https://avatars1.githubusercontent.com/u/2277160?u=ec4030b31db18e0161ab276c1c446161b80e207d&v=4",
    login: "kwesihackman",
    name: "Eric Hackman",
    url: "https://github.com/kwesihackman",
  };

  renderer.create(<Card user={user} />);
});
