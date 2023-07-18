import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bookList: [],
};

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    add: (state, action) => {
      const {title, author} = action.payload;
      const newBook = {
        category: 'Undefined',
        title: title,
        author: author,
      }
      return{
        ...state,
        bookList: [...state.bookList, newBook]
      }
    },
    remove: (state, action) => {
      const updatedList = state.bookList.filter((book, index) => {
        index !== action.payload
      });
      return {
        ...state,
        bookList: updatedList,
      };
    }
  }
})

export const { add, remove } = booksSlice.actions;

export default booksSlice.reducer;