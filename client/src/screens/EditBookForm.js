// EditBookForm.js
import React, { useState } from 'react';

const EditBookForm = ({ book, onCancel, onSave }) => {
  const [updatedBook, setUpdatedBook] = useState({
    title: book.title,
    author: book.author,
    genre: book.genre,
    year: book.year,
    copies: book.copies,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedBook((prevBook) => ({
      ...prevBook,
      [name]: value,
    }));
  };

  const handleSave = () => {
    onSave(updatedBook);
  };

  return (
    <div>
      <h3>Edit Book</h3>
      <form>
        <label>Title:</label>
        <input type="text" name="title" value={updatedBook.title} onChange={handleChange} />
        <label>Author:</label>
        <input type="text" name="author" value={updatedBook.author} onChange={handleChange} />

        <label>Genre:</label>
        <input type="text" name="genre" value={updatedBook.genre} onChange={handleChange} />

        <label>Year:</label>
        <input type="text" name="year" value={updatedBook.year} onChange={handleChange} />

        <label>Copies:</label>
        <input type="text" name="copies" value={updatedBook.copies} onChange={handleChange} />

        <button type="button" onClick={handleSave}>
          Save
        </button>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default EditBookForm;
