import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BookList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const response = await axios.get('/api/books');
      setBooks(response.data);
    };

    fetchBooks();
  }, []);

  return (
    <div>
      <h1>Book Recommendations</h1>
      <ul>
        {books.map(book => (
          <li key={book._id}>
            <h2>{book.title}</h2>
            <p>{book.author}</p>
            <p>Rating: {book.rating}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
