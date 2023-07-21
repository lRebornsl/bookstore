import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const baseUrl = "https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/kiIywoxSHKVwOu879Zoi/books/";

const initialState = {
  bookList: {},
};

export const getBooks = createAsyncThunk("books/getBooks", () => {
  return axios.get(baseUrl)
    .then(response => response.data)
})

export const postBooks = createAsyncThunk("books/postBooks", ({id, title, author, category}) => {
  return axios.post(baseUrl, {
    "item_id": id,
    "title": title,
    "author": author,
    "category": category,
  })
    .then(response => response.data)
})

export const deleteBooks = createAsyncThunk("books/deleteBooks", ({id}) => {
  return axios.delete(baseUrl + id)
    .then(response => response.data)
});

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: {
    [getBooks.fulfilled]: (state, action) => {
      state.bookList = action.payload;
    },
    [postBooks.fulfilled]: (state) => {
      return state;
    },
    [deleteBooks.fulfilled]: (state, action) => {
      const deletedItemId = action.meta.arg.id;
      const updatedList = {};

      Object.keys(state.bookList).forEach((itemId) => {
        if (itemId !== deletedItemId) {
          updatedList[itemId] = state.bookList[itemId];
        }
      });

      state.bookList = updatedList;
    }
  }
})

export default booksSlice.reducer;