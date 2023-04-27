import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  searchValue: 'subject:Architecture',
};
const API_KEY = process.env.REACT_APP_KEY;

export const fetchBooks = createAsyncThunk(
  'book/fetchBookStatus',
  async (params) => {
    const { search } = params;
    const { data } =
      await axios.get(`https://www.googleapis.com/books/v1/volumes?q="subject:${search}"
    &key=${API_KEY}&printType=books&startIndex=0&maxResults=6&langRestrict=en`);
    return data;
  },
);

const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    setSearchValue(state, action) {
      state.categoryId = action.payload;
    },
  },
  extraReducers: {
    [fetchBooks.pending]: (state) => {
      state.status = 'loading';
      state.items = [];
    },
    [fetchBooks.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.items = 'success';
    },
    [fetchBooks.rejected]: (state) => {
      state.status = 'error';
      state.items = [];
    },
  },
});

export const { setSearchValue } = bookSlice.actions;

export default bookSlice.reducer;
