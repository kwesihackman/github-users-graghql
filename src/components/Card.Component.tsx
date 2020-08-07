import React from "react";
import { UserData } from "../Types";
import { useHistory } from "react-router-dom";

interface Props {
  user: UserData;
}

const Card: React.FC<Props> = ({ user }) => {
  return (
    <div className="card shadow-sm">
      <img src={user.avatarUrl} className="card-img-top" alt={user.login} />
      <div className="card-body">
        <h5>{user.login}</h5>
        {user.name && <div>{user.name}</div>}
        <a className="btn btn-primary my-3" href={user.url} target="_blank">
          View Full Profile
        </a>
      </div>
    </div>
  );
};

export default Card;
