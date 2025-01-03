import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import BookService from '../../domains/books/index.js';
import { BookDTO } from '../../domains/books/core/dtos/book.dto.js';
import StorePaths from '../../domains/books/core/constants/book-store-paths.constants';
import { BookFiltersDTO } from '../../domains/books/core/dtos/book-filters.dto.js';
import { ErrorHandler } from '../../api/error-handler.js';
import EventHandlerTypes from '../../config/event-handler-types.js';

const initialState = {
    items: <BookDTO[]>[],
};

const reducers = {
    SET_BOOKS: (state, action) => {
        state.items = action.payload;
    },
    CLEAR_SEARCHED_BOOKS: (state) => {
        state.items = [];
    },
};

export const GET_SEARCHED_BOOKS = createAsyncThunk(
    StorePaths.GET_SEARCHED_BOOKS,
    async (filters: BookFiltersDTO) => {
        return await BookService.getByFilters(filters);
    },
);

const bookSearch = createSlice({
    name: 'bookSearch',
    initialState,
    reducers,
    extraReducers: (builder) => {
        builder
            .addCase(GET_SEARCHED_BOOKS.pending, (state) => {
                console.log('calling');
            })
            .addCase(GET_SEARCHED_BOOKS.fulfilled, (state, action) => {
                state.items = action.payload;
            })
            .addCase(GET_SEARCHED_BOOKS.rejected, (state, action) => {
                ErrorHandler(EventHandlerTypes.ERROR, 'Error searching Books');
            });
    },
});

export const { SET_BOOKS, CLEAR_SEARCHED_BOOKS } = bookSearch.actions;

export default bookSearch.reducer;
