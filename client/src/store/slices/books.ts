import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import booksAPI from "../../apis/books.js";
import  BookService from '../../domains/books/index.js';
import { BookDTO } from '../../domains/books/core/dtos/book.dto.js';


const initialState = {
   items: <BookDTO[]>[]
}

const reducers = {
    SET_BOOKS: (state, action) => {
        state.items = action.payload
    },
}

export const GET_ALL_BOOKS = createAsyncThunk('books/GET_ALL_BOOKS', async () => {
    return await BookService.getAll();
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
  },
})

export const { SET_BOOKS } = books.actions

export default books.reducer