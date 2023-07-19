import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bookList: [
    {
      "item_id": "item0",
      "title": "The Great Gatsby",
      "author": "John Smith",
      "category": "Fiction"
    },
    {
      "item_id": "item1",
      "title": "Anna Karenina",
      "author": "Leo Tolstoy",
      "category": "Fiction"
    },
    {
      "item_id": "item2",
      "title": "The Selfish Gene",
      "author": "Richard Dawkins",
      "category": "Nonfiction"
    }
  ],
};

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    add: (state, action) => {
      const {title, author} = action.payload;
      const newId = "item" + (state.bookList.length);
      const newBook = {
        item_id: newId,
        title: title,
        author: author,
        category: 'Undefined',
      }
      return{
        ...state,
        bookList: [...state.bookList, newBook]
      }
    },
    remove: (state, action) => {
      const id = "item" + action.payload;
      const updatedList = state.bookList.filter((book) => {
        return book.item_id !== id;
      });
      const returnList = updatedList.map((book, index) => {
        return {
          ...book,
          item_id: "item" + index
        };
      });
      return {
        ...state,
        bookList: returnList,
      };
    }
  }
})

export const { add, remove } = booksSlice.actions;

export default booksSlice.reducer;