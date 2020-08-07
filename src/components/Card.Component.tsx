import React from "react";
import { UserData } from "../Types";

interface Props {
  user: UserData;
}

const Card: React.FC<Props> = ({ user }) => {
  console.log(user);
  return (
    <div className="card shadow-sm">
      <div>{user.login}</div>
      {user.name && <div>{user.name}</div>}
    </div>
  );
};

export default Card;
