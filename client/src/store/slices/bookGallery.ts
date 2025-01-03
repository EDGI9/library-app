import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import BookService from '../../domains/books/index.js';
import { BookDTO } from '../../domains/books/core/dtos/book.dto.js';
import StorePaths from '../../domains/books/core/constants/book-store-paths.constants.js';
import { BookFiltersDTO } from '../../domains/books/core/dtos/book-filters.dto.js';
import { ErrorHandler } from '../../api/error-handler.js';
import EventHandlerTypes from '../../config/event-handler-types.js';

const initialState = {
    items: <BookDTO[]>[],
    filteredItems: <BookDTO[]>[],
};

const reducers = {
    SET_BOOKS: (state, action) => {
        state.items = action.payload;
    },
    SET_FILTERED_BOOKS: (state, action) => {
        state.filteredItems = action.payload;
    },
    CLEAR_FILTERED_BOOKS: (state) => {
        state.filteredItems = [];
    },
};

export const GET_ALL_BOOKS = createAsyncThunk(
    StorePaths.GET_ALL_BOOKS,
    async () => {
        return await BookService.getAll();
    },
);

export const GET_FILTERED_BOOKS = createAsyncThunk(
    StorePaths.GET_FILTERED_BOOKS,
    async (filters: BookFiltersDTO) => {
        return await BookService.getByFilters(filters);
    },
);

const bookGallery = createSlice({
    name: 'bookGallery',
    initialState,
    reducers,
    extraReducers: (builder) => {
        builder
            .addCase(GET_ALL_BOOKS.pending, (state) => {
                console.log('calling');
            })
            .addCase(GET_ALL_BOOKS.fulfilled, (state, action) => {
                state.items = action.payload;
            })
            .addCase(GET_ALL_BOOKS.rejected, (state, action) => {
                ErrorHandler(
                    EventHandlerTypes.ERROR,
                    'Error gettting all Books',
                );
            });
        builder
            .addCase(GET_FILTERED_BOOKS.pending, (state) => {
                console.log('calling');
            })
            .addCase(GET_FILTERED_BOOKS.fulfilled, (state, action) => {
                state.filteredItems = action.payload;
            })
            .addCase(GET_FILTERED_BOOKS.rejected, (state, action) => {
                ErrorHandler(
                    EventHandlerTypes.ERROR,
                    'Error gettting filtered Books',
                );
            });
    },
});

export const { SET_BOOKS, SET_FILTERED_BOOKS, CLEAR_FILTERED_BOOKS } =
    bookGallery.actions;

export default bookGallery.reducer;
