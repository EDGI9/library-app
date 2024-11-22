import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { BookDTO } from '../../domains/books/core/dtos/book.dto';
import BookService from '../../domains/books/index';
import StorePaths from "../../domains/books/core/constants/book-store-paths.constants";

const initialState = {
   data:<BookDTO | {}>{}
}

const reducers = {
    SET_BOOK: (state, action) => {
        state.data = action.payload
    },
 }

 
export const GET_BOOK = createAsyncThunk(StorePaths.GET_BOOK, async (id:string): Promise<BookDTO | {}> => {
  return await BookService.getById(id);
});
  
export const CREATE_BOOK = createAsyncThunk(StorePaths.CREATE_BOOK, async (dto: BookDTO): Promise<void> => {
  return await BookService.create(dto);
});

//@ts-ignore
export const UPDATE_BOOK = createAsyncThunk(StorePaths.UPDATE_BOOK, async ({id, dto}): Promise<void> => {
  await BookService.update(id, dto);
});

export const DELETE_BOOK = createAsyncThunk(StorePaths.DELETE_BOOK, async (id:string): Promise<void> => {
  await BookService.remove(id);
});

const book = createSlice({
  name: 'book',
  initialState,
  reducers,
  extraReducers: (builder) => {
    builder
      .addCase(GET_BOOK.pending, () => {
        console.log('calling');
      })
      .addCase(GET_BOOK.fulfilled, (state, action) => {
        state.data = action.payload;  
      })
      .addCase(GET_BOOK.rejected, (state,action) => {
        console.log('Error getting Book');
        console.log(state, action);
      });

    builder
      .addCase(CREATE_BOOK.pending, () => {
        console.log('calling');
      })
      .addCase(CREATE_BOOK.fulfilled, (state, action) => {
        console.log('Book created');  
      })
      .addCase(CREATE_BOOK.rejected, (state, action) => {
        console.log('Error getting Book');
        console.log(state, action);
      });

    builder
      .addCase(UPDATE_BOOK.pending, () => {
        console.log('calling');
      })
      .addCase(UPDATE_BOOK.fulfilled, () => {
        console.log('Book updated');
      })
      .addCase(UPDATE_BOOK.rejected, (state, action) => {
        console.log('Error updating Book');
        console.log(state, action);
      });

    builder
      .addCase(DELETE_BOOK.pending, () => {
        console.log('calling');
      })
      .addCase(DELETE_BOOK.fulfilled, () => {
        console.log('Book deleted');
      })
      .addCase(DELETE_BOOK.rejected, (state, action) => {
        console.log('Error deleting Book');
        console.log(state,action);
      });
  },
})

export const { SET_BOOK } = book.actions

export default book.reducer