import React from "react";
import Card from "./Card.Component";
import { UserEdges } from "../Types";

interface UserDataProps {
  data: UserEdges[];
}

const CardList: React.FC<UserDataProps> = ({ data }) => {
  console.log(data);
  return (
    <div className="row">
      {data.map((user) => (
        <div className="col-md-3 my-3" key={user.cursor}>
          <Card user={user.node} />
        </div>
      ))}
    </div>
  );
};

export default CardList;
