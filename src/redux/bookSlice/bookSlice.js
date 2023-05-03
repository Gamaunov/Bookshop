import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  books: [],
  status: 'loading',
};
const API_KEY = process.env.REACT_APP_KEY;

export const getBooks = createAsyncThunk('book/getBooks', async (params) => {
  const { subject, startIndex } = params;
  const { data } = await axios.get(
    `https://www.googleapis.com/books/v1/volumes?q=${subject}
      &key=${API_KEY}&printType=books&startIndex=${startIndex}&maxResults=6&langRestrict=en`,
  );
  return data;
});

export const bookSlice = createSlice({
  name: 'book',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getBooks.pending, (state) => {
        state.status = 'loading';
        state.books = [];
      })
      .addCase(getBooks.fulfilled, (state, action) => {
        state.books = action.payload;
        state.status = 'success';
      })
      .addCase(getBooks.rejected, (state, action) => {
        state.books = action.payload;
        state.status = 'success';
      });
  },
});

export default bookSlice.reducer;
