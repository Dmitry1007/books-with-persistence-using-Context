import { useState } from "react";
import BookEdit from "./BookEdit";

function BookShow({ book, onDelete, onEdit }) {
  const [showEdit, setShowEdit] = useState(false);

  const handleDelete = () => {
    onDelete(book.id);
  };

  const handleEdit = (id, title) => {
    onEdit(id, title);
    setShowEdit(false);
  };

  return (
     <div className="book-show">
      {showEdit ? <BookEdit book={book} onEdit={handleEdit} /> : book.title }
      <div className="actions">
        <button className="edit" onClick={() => setShowEdit(!showEdit)}>Edit</button>
        <button className="delete" onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
}

export default BookShow;
