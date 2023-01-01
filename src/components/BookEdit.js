import { useState } from "react";

function BookEdit({ book }) {
  const [title, setTitle] = useState(book.title);

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  return (
    <div className="book-edit">
      <h3>Edit Book</h3>
      <form>
        <label>Title</label>
        <input onChange={handleChange} className="input" value={title} />
        <button className="button">Update</button>
      </form>
    </div>
  );
}

export default BookEdit;
