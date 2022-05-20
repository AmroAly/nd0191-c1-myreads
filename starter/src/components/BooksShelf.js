import Book from "./Book";

const BooksShelf = ({ shelf, books, onBooksUpdate }) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{shelf}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map((book) => (
            <Book key={book.title} book={book} onBooksUpdate={onBooksUpdate} />
          ))}
        </ol>
      </div>
    </div>
  );
};

export default BooksShelf;
