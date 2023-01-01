import { useState } from "react";
import BookEdit from "./BookEdit";

function BookShow({ book, onDelete, onEdit }) {
  const [showEdit, setShowEdit] = useState(false);

  const handleDelete = () => {
    onDelete(book.id);
  };

  const handleSubmit = (id, newTitle) => {
    setShowEdit(false);
    onEdit(id, newTitle);
  };

  return (
     <div className="book-show">
      {showEdit ? <BookEdit book={book} onSubmit={handleSubmit} /> : book.title }
      <div className="actions">
        <button className="edit" onClick={() => setShowEdit(!showEdit)}>Edit</button>
        <button className="delete" onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
}

export default BookShow;
