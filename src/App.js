import React, { useState } from "react";
import BookCreate from "./components/BookCreate";

function App() {
  const [books, setBooks] = useState([]);

  const createBook = (book) => {
    setBooks([...books, book]);
  };
  
  return (
    <div>
      <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;
