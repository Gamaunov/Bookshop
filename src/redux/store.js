import { configureStore } from '@reduxjs/toolkit';
import bookSlice from './bookSlice/bookSlice';
import categorySlice from './categorySlice/categorySlice';

export default configureStore({
  reducer: {
    bookApi: bookSlice,
    category: categorySlice,
  },
});
