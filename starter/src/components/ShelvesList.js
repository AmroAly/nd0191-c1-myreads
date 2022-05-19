import BooksShelf from "./BooksShelf";

const ShelvesList = () => {
  const shelves = ["Currently Reading", "Want to Read", "Read"];
  return (
    <div className="list-books-content">
      <div>
        {shelves.map((shelf) => (
          <BooksShelf key={shelf} shelf={shelf} />
        ))}
      </div>
    </div>
  );
};

export default ShelvesList;
