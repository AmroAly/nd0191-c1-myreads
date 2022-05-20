import { useState } from "react";
import { Link } from "react-router-dom";

const SearchBar = ({ onChangeInput }) => {
  const [query, setQuery] = useState("");
  const onChangeInputHandler = (e) => {
    setQuery(e.target.value.trim());
    query && onChangeInput(query);
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
          value={query}
        />
      </div>
    </div>
  );
};

export default SearchBar;
