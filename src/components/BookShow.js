import { useState, useContext } from "react";
import BooksContext from "../context/books";
import BookEdit from "./BookEdit";

function BookShow({ book }) {
  const [showEdit, setShowEdit] = useState(false);
  const { deleteBook } = useContext(BooksContext);

  const handleDelete = () => {
    deleteBook(book.id);
  };

  const handleSubmit = () => {
    setShowEdit(false);
  };

  return (
     <div className="book-show">
      <img alt="books" src={`https://picsum.photos/seed/${book.id}/300/200`} />
      {showEdit ? <BookEdit book={book} onSubmit={handleSubmit} /> : book.title }
      <div className="actions">
        <button className="edit" onClick={() => setShowEdit(!showEdit)}>Edit</button>
        <button className="delete" onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
}

export default BookShow;
