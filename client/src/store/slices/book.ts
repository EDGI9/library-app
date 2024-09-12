import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   data:{}
}

const reducers = {
    SET_BOOK: (state, action) => {
        state.data = action.payload
    },
 }

const book = createSlice({
  name: 'book',
  initialState,
  reducers
})

export const { SET_BOOK } = book.actions

export default book.reducer