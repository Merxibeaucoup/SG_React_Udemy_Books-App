import { useState } from "react";
import BookCreate from "./components/BookCreate";

function App() {
  //array of books
  const [books, setBooks] = useState([]);

  //create book event
  const handleCreateBook = (title) => {
    console.log("need to add book with : ", title);
  };

  return (
    <div className="app">
      <BookCreate onCreate={handleCreateBook} />
    </div>
  );
}

export default App;
