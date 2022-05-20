import Book from "./Book";

const SearchResult = ({ books, onBooksUpdate, allBooks }) => {
  allBooks.forEach((b) =>
    books.forEach((book) => {
      if (b.id == book.id) {
        book.shelf = b.shelf;
      }
    })
  );
  return (
    <div className="search-books-results">
      <ol className="books-grid">
        {books.map((book) => (
          <Book book={book} key={book.id} onBooksUpdate={onBooksUpdate} />
        ))}
      </ol>
    </div>
  );
};

export default SearchResult;
