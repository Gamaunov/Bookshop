import { createSlice } from '@reduxjs/toolkit';
import { topBooks } from './topBooks';

const initialState = {
  topBook: topBooks,
};

export const topBookSlice = createSlice({
  name: 'topBook',
  initialState,
  reducers: {
    setTopBook: (state, action) => {
      state.topBook = action.payload;
    },
  },
});

export const { setTopBook } = topBookSlice.actions;

export default topBookSlice.reducer;
