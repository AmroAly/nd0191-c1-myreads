import { useState } from "react";
import { Link } from "react-router-dom";

const SearchBar = ({ onChangeInput }) => {
  let filterTimeout;
  const onChangeInputHandler = (e) => {
    clearTimeout(filterTimeout);
    filterTimeout = setTimeout(() => {
      onChangeInput(e.target.value);
    }, 500);
  };

  return (
    <div className="search-books-bar">
      <Link className="close-search" to="/">
        Close
      </Link>
      <div className="search-books-input-wrapper">
        <input
          type="text"
          onChange={onChangeInputHandler}
          placeholder="Search by title, author, or ISBN"
        />
      </div>
    </div>
  );
};

export default SearchBar;
