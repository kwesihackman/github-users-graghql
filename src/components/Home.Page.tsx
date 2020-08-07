import React from "react";
import { useForm } from "react-hook-form";
import { useLazyQuery } from "@apollo/client";
import { FETCH_USERS } from "../graphql/queries";
import { SearchInput, SearchType, SearchResultItemConnection } from "../Types";
import CardList from "./CardList.Component";

const Home = () => {
  const [getSearchResult, { loading, data, error }] = useLazyQuery(FETCH_USERS);
  const { register, handleSubmit } = useForm<SearchInput>();

  const handleSearchTapped = (data: SearchInput) => {
    const variables: SearchResultItemConnection = {
      first: 20,
      type: SearchType.USER,
      query: data.search,
    };

    getSearchResult({ variables });
  };

  if (loading) return <p>Loading ...</p>;
  if (error) return <p>Error fetching users</p>;
  if (data) {
    console.log(data);
  }

  return (
    <div className="container">
      <h2 className="text-center mt-5" data-testid="welcomeText">
        Welcome to the Github Search platform
      </h2>
      <div className="top-form-area text-center">
        <div className="row  d-flex justify-content-center my-4">
          <form
            className="form-inline"
            onSubmit={handleSubmit(handleSearchTapped)}
          >
            <input
              placeholder="Search github..."
              className="form-control"
              name="search"
              ref={register}
              data-testid="search-input"
            />
            <button className="btn btn-primary mx-3" type="submit">
              Search
            </button>
          </form>
        </div>

        <div className="row d-flex mt-5 justify-content-center">
          <div>
            {loading && <div className="">Loading</div>}
            {error && <div className="">Error Fetch Users</div>}
          </div>
          {data && (
            <div>
              <h4 className="text-center">{`Total Result  : ${data.search.userCount}`}</h4>
              <CardList data={data.search.edges} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
