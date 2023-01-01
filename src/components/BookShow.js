import { useState } from "react";
import BookEdit from "./BookEdit";

function BookShow({ book, onDelete }) {
  const [showEdit, setShowEdit] = useState(false);

  const handleDelete = () => {
    onDelete(book.id);
  };

  return (
     <div className="book-show">
      {showEdit ? <BookEdit book={book} /> : book.title }
      <div className="actions">
        <button onClick={() => setShowEdit(!showEdit)}>Edit</button>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
}

export default BookShow;
