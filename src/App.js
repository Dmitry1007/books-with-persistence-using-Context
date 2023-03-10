import { useEffect } from "react";
import BooksContext from "./hooks/use-books-context";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

function App() {
  const { stableFetchBooks } = BooksContext();

  useEffect(() => {
    stableFetchBooks();
  }, [stableFetchBooks]);

  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookList />
      <BookCreate />
    </div>
  );
}

export default App;
