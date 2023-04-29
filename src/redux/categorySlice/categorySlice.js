import { createSlice } from '@reduxjs/toolkit';
import { categories } from './categories';


const initialState = {
  category: categories,
};

export const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.category = action.payload;
    },
  },

});

export const { setCategory } = categorySlice.actions;

export default categorySlice.reducer;
