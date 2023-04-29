import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  index: 0,
};

export const startIndexSlice = createSlice({
  name: 'startIndex',
  initialState,
  reducers: {
    setIndex: (state, action) => {
      state.index = action.payload;
    },
  },

});

export const { setIndex } = startIndexSlice.actions;

export default startIndexSlice.reducer;
