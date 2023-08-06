import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { TopBooksType, topBooks } from '@/pages/TopBooks/model/data/topBooks';

interface TopBookState {
	topBook: TopBooksType[];
}

const initialState: TopBookState = {
	topBook: topBooks,
};

export const topBookSlice = createSlice({
	name: 'topBook',
	initialState,
	reducers: {
		setTopBook: (state, action: PayloadAction<TopBooksType[]>) => {
			state.topBook = action.payload;
		},
	},
});

export const { setTopBook } = topBookSlice.actions;

export default topBookSlice.reducer;
