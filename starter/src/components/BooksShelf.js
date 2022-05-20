import Book from "./Book";
import * as BooksAPI from "../BooksAPI.js";
import { useEffect, useState } from "react";

const BooksShelf = ({ shelf }) => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    let mounted = false;
    const getBooks = async () => {
      const res = await BooksAPI.getAll();
      setBooks(res);
      mounted = true;
    };

    if (!mounted) getBooks();
  }, []);

  console.log(books);
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{shelf}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map((book) => (
            <Book key={book.title} book={book} />
          ))}
        </ol>
      </div>
    </div>
  );
};

export default BooksShelf;
