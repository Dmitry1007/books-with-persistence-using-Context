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
    <form className="book-edit" onSubmit={handleSubmit}>
      <label>Edit Title</label>
      <input className="input" value={title} onChange={handleChange} />
      <button className="button is-primary">Update</button>
    </form>
  );
}

export default BookEdit;
