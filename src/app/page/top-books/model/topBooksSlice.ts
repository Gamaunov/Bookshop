import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import {
	TopBooksType,
	topBooks,
} from '@/app/page/top-books/model/data/topBooks';

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
