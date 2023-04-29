import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  searchValue: 'subject:Architecture',
};

export const searchValueSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchValue: (state, action) => {
      state.searchValue = action.payload;
    },
  },
});

export const { setSearchValue } = searchValueSlice.actions;

export default searchValueSlice.reducer;
