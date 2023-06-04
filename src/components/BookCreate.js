import React, { useState } from "react";

//receives prop onCreate
const BookCreate = ({ onCreate }) => {
  //to get title of the book
  const [title, setTitle] = useState("");

  //handles text change
  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  // handles default submission
  const handleSubmit = (event) => {
    event.preventDefault();
    //pass title to onCreate prop then clear after submit
    onCreate(title);
    setTitle("");
  };

  return (
    <div className="book-create">
      <form onSubmit={handleSubmit}>
        <h3>Add a book</h3>
        <label>Title</label>
        <input
          className="book-create__input"
          onChange={handleChange}
          value={title}
        />
        <button className="book-create__button">Create!!</button>
      </form>
    </div>
  );
};

export default BookCreate;
