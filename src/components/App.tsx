import React from "react";

function App() {
  return (
    <div className="container">
      <h2 className="text-center mt-5">
        Welcome to the Github Search platform
      </h2>
      <div className="top-form-area text-center d-flex justify-content-center my-4">
        <form className="form-inline">
          <input placeholder="Search github..." className="form-control" />
          <button className="btn btn-primary mx-3" type="submit">
            Search
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
