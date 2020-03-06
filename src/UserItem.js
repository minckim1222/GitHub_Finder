import React from "react";

function UserItem(props) {
  const { avatar_url, html_url, logon } = props.user;
  return (
    <div className='card text-center'>
      <img
        src={avatar_url}
        alt=''
        className='round-img'
        style={{ width: "60px" }}
      />
      <h3>{logon}</h3>
      <a href={html_url} className='btn btn-dark btn-sm my-1'>
        More
      </a>
    </div>
  );
}

export default UserItem;
