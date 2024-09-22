import { configureStore } from '@reduxjs/toolkit'
import book from './slices/book.js';
import books from './slices/books.js';



export default configureStore({
  reducer: {
    book: book,
    books: books,
  }
})