import React, { useState } from "react";

const Search = ({
  showAlert,
  searchUsers,
  clearUsers,
  usersLoaded,
  onChange,
  onSubmit
}) => {
  const [text, setText] = useState("");
  onChange = e => setText(e.target.value);

  onSubmit = e => {
    e.preventDefault();
    if (text === "") {
      showAlert("Please enter a username", "alert-light");
    } else {
      searchUsers(text);
      setText("");
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit} className='form'>
        <input
          type='text'
          placeholder='Search users.'
          value={text}
          onChange={onChange}
        />
        <input
          type='submit'
          value='Search'
          className='btn btn-dark btn-block'
        />
      </form>
      {usersLoaded && (
        <button className='btn btn-light btn-block' onClick={clearUsers}>
          Clear
        </button>
      )}
    </div>
  );
};

export default Search;
