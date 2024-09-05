import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import booksAPI from "../apis/books";
import Book from "./Book";


export default function BookList() {
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function getBooks() {
      const response = await fetch(booksAPI.GET_ALL_BOOKS);

      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        console.error(message);
        return;
      }
      const books = await response.json();
      setBooks(books);
    }
    getBooks();
    return;
  }, [books.length]);

  async function deleteBook(id) {
    const url = booksAPI.DELETE_BOOK.replace("{id}", id)
    await fetch(url, {
      method: "DELETE",
    });
    const newBook = books.filter((el) => el.id !== id);
    setBooks(newBook);
  }

  function goToBook(id) {
    navigate(`/view/${id}`);
    
  }
  function bookList() {
    return books.map((book, index) => {
      return (
        <Book
          book={book}
          deleteBook={() => deleteBook(book.id)}
          goToBook={() => goToBook(book.id)}
          key={index}
        />
      );
    });
  }

  return (
    <>
      <section className="flex justify-center">
          <div className="w-[80%] flex flex-wrap justify-center md:justify-start">
            {bookList()}
          </div>
      </section>
    </>
  );
}