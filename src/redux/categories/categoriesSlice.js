import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categoriesList: [],
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    check: (state) => state.categoriesList === [] ? "Under Construction" : null,
  }
});

export const { check } = categoriesSlice.actions;

export default categoriesSlice.reducer;