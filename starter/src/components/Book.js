import { update } from "../BooksAPI";
import { useEffect, useState } from "react";

const Book = ({ book, onBooksUpdate }) => {
  const [shelf, setShelf] = useState(book.shelf || "none");
  const [changed, setChanged] = useState(false);

  const onSelectChangeHandler = async (e) => {
    const selectedShelf = e.target.value;
    setShelf(selectedShelf);
    onBooksUpdate(book, selectedShelf);
    await update(book, selectedShelf);
  };
  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${
                book.imageLinks && book.imageLinks.smallThumbnail
              })`,
            }}
          ></div>
          <div className="book-shelf-changer">
            <select value={shelf} onChange={onSelectChangeHandler}>
              <option value="moveto" disabled>
                Move to...
              </option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">
          {book.authors && book.authors.join(", ")}
        </div>
      </div>
    </li>
  );
};

export default Book;
