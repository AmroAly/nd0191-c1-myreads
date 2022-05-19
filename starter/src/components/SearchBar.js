import { useState } from "react";

const SearchBar = () => {
  const [showSearchPage, setShowSearchpage] = useState(false);

  return (
    <div className="search-books-bar">
      <a
        className="close-search"
        onClick={() => setShowSearchpage(!showSearchPage)}
      >
        Close
      </a>
      <div className="search-books-input-wrapper">
        <input type="text" placeholder="Search by title, author, or ISBN" />
      </div>
    </div>
  );
};

export default SearchBar;
