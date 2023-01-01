import { useState } from "react";
import BookEdit from "./BookEdit";

function BookShow({ book, onDelete, onUpdate }) {
  const [showEdit, setShowEdit] = useState(false);

  const handleDelete = () => {
    onDelete(book.id);
  };

  const handleUpdate = (id, title) => {
    onUpdate(id, title);
    setShowEdit(false);
  };

  return (
     <div className="book-show">
      {showEdit ? <BookEdit book={book} onUpdate={handleUpdate} /> : book.title }
      <div className="actions">
        <button onClick={() => setShowEdit(!showEdit)}>Edit</button>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
}

export default BookShow;
