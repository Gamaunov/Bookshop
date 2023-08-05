import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { Status } from '@/shared/enums/status';

interface BookState {
	books: [];
	status: Status;
}

const initialState: BookState = {
	books: [],
	status: Status.LOADING,
};

const API_KEY = process.env.NEXT_PUBLIC_APP_KEY;
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
export const getBooks = createAsyncThunk(
	'book/getBooks',
	async (params: { subject: string; startIndex: number }) => {
		const { subject, startIndex } = params;
		const { data } = await axios.get(
			`${API_BASE_URL}?q=${subject}&key=${API_KEY}&printType=books&startIndex=${startIndex}&maxResults=6&langRestrict=en`
		);
		return data;
	}
);

export const bookSlice = createSlice({
	name: 'book',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(getBooks.pending, (state) => {
				state.status = Status.LOADING;
			})
			.addCase(getBooks.fulfilled, (state, action: PayloadAction<[]>) => {
				state.books = action.payload;
				state.status = Status.SUCCESS;
			})
			.addCase(getBooks.rejected, (state, action: PayloadAction<any>) => {
				state.books = action.payload;
				state.status = Status.FAILED;
			});
	},
});

export default bookSlice.reducer;
