import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import  BookService from '../../domains/books/index.js';
import { BookDTO } from '../../domains/books/core/dtos/book.dto.js';
import StorePaths from "../../domains/books/core/constants/book-store-paths.constants";
import { BookFiltersDTO } from '../../domains/books/core/dtos/book-filters.dto.js';



const initialState = {
   items: <BookDTO[]>[],
   filteredItems: <BookDTO[]>[]
}

const reducers = {
    SET_BOOKS: (state, action) => {
        state.items = action.payload
    },
    SET_FILTERED_BOOKS: (state, action) => {
        state.filteredItems = action.payload
    },
}

export const GET_ALL_BOOKS = createAsyncThunk(StorePaths.GET_ALL_BOOKS, async () => {
    return await BookService.getAll();
});

export const GET_FILTERED_BOOKS = createAsyncThunk(StorePaths.GET_FILTERED_BOOKS, async (filters: BookFiltersDTO) => {
    return await BookService.getByFilters(filters);
});

const books = createSlice({
  name: 'books',
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
        console.log('Error');
        console.log(state);
      });
    builder
      .addCase(GET_FILTERED_BOOKS.pending, (state) => {
        console.log('calling');
      })
      .addCase(GET_FILTERED_BOOKS.fulfilled, (state, action) => {
        state.filteredItems = action.payload;  
      })
      .addCase(GET_FILTERED_BOOKS.rejected, (state, action) => {
        console.log('Error');
        console.log(state);
      });
  },
})

export const { SET_BOOKS, SET_FILTERED_BOOKS } = books.actions

export default books.reducer