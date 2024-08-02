import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteBook } from "../features/books/bookSlice";
import { Link } from "react-router-dom";

const ShowBooks = () => {
  const books = useSelector((state) => state.books);

  const dispatch = useDispatch();

  return (
    <section>
      <h2>Show Books</h2>
      {books &&
        books.map((book) => {
          const {id, title, author} = book;
          return (
            <article key={book.title}>
              <h2>{title}</h2>
              <p>{author}</p>
              <button
                onClick={() => dispatch(deleteBook({ title: book.title }))}
              >
                Delete Book
              </button>
              <Link to="/edit-book" state={{id, title, author}} >
                <button>Edit Book</button>
              </Link>
            </article>
          );
        })}
    </section>
  );
};

export default ShowBooks;
