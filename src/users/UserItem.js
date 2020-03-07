import React from "react";
import { Link } from "react-router-dom";
function UserItem(props) {
  const { avatar_url, login, url } = props.user;

  return (
    <div className='card text-center'>
      <img
        src={avatar_url}
        alt=''
        className='round-img'
        style={{ width: "60px" }}
      />
      <h3>{login}</h3>
      <Link
        to={{
          pathname: `/user/${login}`,
          state: {
            url: url
          }
        }}
        className='btn btn-dark btn-sm my-1'
      >
        More
      </Link>
    </div>
  );
}

export default UserItem;
