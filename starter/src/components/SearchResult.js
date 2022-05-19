import Book from "./Book";

const SearchResult = () => (
  <div className="search-books-results">
    <ol className="books-grid">
      <Book />
    </ol>
  </div>
);

export default SearchResult;
