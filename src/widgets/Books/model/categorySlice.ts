import { categories } from './data/categories';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface Category {
	category: string;
	search: string;
}

interface CategoryState {
	category: Category[];
}

const initialState: CategoryState = {
	category: categories,
};

export const categorySlice = createSlice({
	name: 'category',
	initialState,
	reducers: {
		setCategory: (state, action: PayloadAction<Category[]>) => {
			state.category = action.payload;
		},
	},
});

export const { setCategory } = categorySlice.actions;

export default categorySlice.reducer;
