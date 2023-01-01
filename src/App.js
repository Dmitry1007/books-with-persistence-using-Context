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

  const updateBook = (id, title) => {
    setBooks(books.map((book) => {
      if (book.id === id) {
        return { ...book, title };
      }
      return book;
    }));
  };

  console.log("books", books)
  return (
    <div className="app">
      <BookList books={books} onDelete={deleteBook} onUpdate={updateBook} />
      <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;
