import React, { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

function App() {
  const [books, setBooks] = useState([]);

  const createBook = (title) => {
    setBooks([
      ...books,
      {
        id: Math.round(Math.random() * 10000),
        title,
      },
    ]);
  };
  
  const deleteBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  console.log("Books: ", books)
  return (
    <div className="app">
      <BookList books={books} onDelete={deleteBook} />
      <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;
