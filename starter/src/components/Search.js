import { useState } from "react";
import SearchBar from "./SearchBar";
import SearchResult from "./SearchResult";

const Search = () => {
  return (
    <div className="search-books">
      <SearchBar />
      <SearchResult />
    </div>
  );
};

export default Search;
