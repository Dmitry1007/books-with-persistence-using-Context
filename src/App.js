import React, { useState } from "react";
import BookCreate from "./components/BookCreate";

function App() {
  const [books, setBooks] = useState([]);

  function createBook(book) {
    setBooks([...books, book]);
  }
  console.log("books", books);
  return (
    <div className="App">
      App
      <BookCreate createBook={createBook} />
    </div>
  );
}

export default App;
