import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface SearchState {
	searchValue: string;
}

const initialState: SearchState = {
	searchValue: 'subject:Architecture',
};

export const searchValueSlice = createSlice({
	name: 'search',
	initialState,
	reducers: {
		setSearchValue: (state, action: PayloadAction<string>) => {
			state.searchValue = action.payload;
		},
	},
});

export const { setSearchValue } = searchValueSlice.actions;

export default searchValueSlice.reducer;
