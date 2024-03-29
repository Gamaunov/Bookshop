import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { StaticImageData } from 'next/image';
import { calcTotalPrice } from '@/shared/utils/calcTotalPrice';

export interface CartItemType {
	id: any;
	title: string;
	thisPrice: number;
	count: number;
	img: string | StaticImageData;
	currencyCodeType: string;
	author: string;
}

interface CartState {
	totalPrice: number;
	items: CartItemType[];
}

const initialState: CartState = {
	totalPrice: 0,
	items: [],
};

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addItem(state, action: PayloadAction<CartItemType>) {
			const findItem = state.items.find((obj) => obj.id === action.payload.id);

			if (findItem) {
				findItem.count++;
			} else {
				state.items.push({
					...action.payload,
					count: 1,
				});
			}
			state.totalPrice = state.items.reduce((sum, obj) => {
				return obj.thisPrice * obj.count + sum;
			}, 0);
		},
		minusItem(state, action: PayloadAction<number>) {
			const findItem = state.items.find((obj) => obj.id === action.payload);
			if (findItem) {
				findItem.count--;
				state.totalPrice = calcTotalPrice(state.items);
			}
		},
		removeItem(state, action: PayloadAction<number>) {
			state.items = state.items.filter((obj) => obj.id !== action.payload);
			state.totalPrice = calcTotalPrice(state.items);
		},
		clearItems(state) {
			state.items = [];
			state.totalPrice = 0;
		},
	},
});

export const { addItem, removeItem, minusItem, clearItems } = cartSlice.actions;

export default cartSlice.reducer;
