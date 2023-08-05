import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface StartIndexState {
	index: number;
}

const initialState: StartIndexState = {
	index: 0,
};

export const startIndexSlice = createSlice({
	name: 'startIndex',
	initialState,
	reducers: {
		setIndex: (state, action: PayloadAction<number>) => {
			state.index = action.payload;
		},
	},
});

export const { setIndex } = startIndexSlice.actions;

export default startIndexSlice.reducer;
