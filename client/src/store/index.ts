import { configureStore } from '@reduxjs/toolkit';
import book from './slices/book.js';
import bookGallery from './slices/bookGallery.js';
import bookSearch from './slices/bookSearch.js';

export default configureStore({
    reducer: {
        book: book,
        bookGallery: bookGallery,
        bookSearch: bookSearch,
    },
});
