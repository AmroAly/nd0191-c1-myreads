import { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import SearchResult from "./SearchResult";
import * as BooksAPI from "../BooksAPI";

const Search = () => {
  const [searchResults, setSearchResults] = useState([]);

  const onChangeInputHandler = async (query) => {
    if (!query) return setSearchResults([]);
    const books = await BooksAPI.search(query, 5);
    setSearchResults(books);
  };

  const onBooksUpdate = (book, newShelf) => (book.shelf = newShelf);

  const [allBooks, setAllBooks] = useState([]);

  useEffect(() => {
    let mounted = false;
    const getBooks = async () => {
      const res = await BooksAPI.getAll();
      setAllBooks(res);
      mounted = true;
    };

    if (!mounted) getBooks();
  }, []);

  return (
    <div className="search-books">
      <SearchBar onChangeInput={onChangeInputHandler} />
      {Array.isArray(searchResults) && (
        <SearchResult
          books={searchResults}
          allBooks={allBooks}
          onBooksUpdate={onBooksUpdate}
        />
      )}
    </div>
  );
};

export default Search;
