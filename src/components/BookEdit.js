import { useState } from "react";

function BookEdit({ book, onUpdate }) {
  const [title, setTitle] = useState(book.title);

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onUpdate(book.id, title);
  };

  return (
    <div className="book-edit">
      <h3>Edit Book</h3>
      <form onSubmit={handleSubmit} >
        <label>Title</label>
        <input className="input" value={title} onChange={handleChange} />
        <button className="button">Update</button>
      </form>
    </div>
  );
}

export default BookEdit;
