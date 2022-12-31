import { useState } from "react";

function BookCreate({ onCreate }) {
  const [title, setTitle] = useState("");
  
const handleSubmit = (event) => {
    event.preventDefault();
    onCreate({ title });
    setTitle("");
}

  const handleChange = (event) => {
    setTitle(event.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Title</label>
      <input value={title} onChange={handleChange}/>
      <button>Create</button>
    </form>
  );
}

export default BookCreate;
