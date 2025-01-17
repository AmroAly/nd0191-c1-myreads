import * as BooksAPI from "../BooksAPI.js";
import { useEffect, useState } from "react";
import BooksShelf from "./BooksShelf";

const ShelvesList = () => {
  const shelves = [
    { title: "Currently Reading", val: "currentlyReading" },
    { title: "Want to Read", val: "wantToRead" },
    { title: "Read", val: "read" },
  ];

  const [books, setBooks] = useState([]);
  const [changed, setChanged] = useState(false);

  useEffect(() => {
    let mounted = false;
    const getBooks = async () => {
      const res = await BooksAPI.getAll();
      setBooks(res);
      mounted = true;
    };

    if (!mounted) getBooks();
  }, []);

  const onUpdateBooksHandler = (book, newShelf) => {
    book.shelf = newShelf;
    setChanged(!changed);
  };

  return (
    <div className="list-books-content">
      <div>
        {shelves.map((shelf) => {
          const booksForShelf = books.filter((book) => book.shelf == shelf.val);
          return (
            <BooksShelf
              key={shelf.title}
              shelf={shelf.title}
              books={booksForShelf}
              onBooksUpdate={onUpdateBooksHandler}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ShelvesList;
