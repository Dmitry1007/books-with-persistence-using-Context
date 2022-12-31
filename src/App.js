import React, { useState } from "react";
import BookCreate from "./components/BookCreate";

function App() {
  const [books, setBooks] = useState([]);

  const createBook = (book) => {
    setBooks([...books, book]);
  }
  console.log(books.length, "books", books);
  return (
    <div className="App">
      App
      <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;
