import axios from "axios";
import React, { useEffect, useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/books").then((res) => {
      setBooks(res.data);
    });
  }, []);

  const createBook = async (title) => {
    await axios.post("http://localhost:3001/books", { title }).then((res) => {
      setBooks([...books, res.data]);
    });
  };
  
  const deleteBook = (id) => {
    axios.delete(`http://localhost:3001/books/${id}`).then((res) => {
      setBooks(books.filter((book) => book.id !== id));
    });
  };

  const editBook = (id, title) => {
    axios.put(`http://localhost:3001/books/${id}`, { title }).then((res) => {
      setBooks(books.map((book) => {
        if (book.id === id) {
          return {...book, ...res.data};
        } else {
          return book;
        }
      }));
    });
  };

  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookList books={books} onDelete={deleteBook} onEdit={editBook} />
      <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;
