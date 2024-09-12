import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import booksAPI from "../../apis/books.js";


const initialState = {
   items:[]
}

const reducers = {
    SET_BOOKS: (state, action) => {
        state.items = action.payload
    },
}

export const GET_ALL_BOOKS = createAsyncThunk('books/GET_ALL_BOOKS', async () => {
    const response = await fetch(booksAPI.GET_ALL_BOOKS);
    console.log('herer');
    

    if (!response.ok) {
      const message = `An error occurred: ${response.statusText}`;
      return message
    }

    return await response.json();
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
        console.log(action, 'data');
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