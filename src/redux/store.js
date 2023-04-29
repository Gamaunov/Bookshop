import { configureStore } from '@reduxjs/toolkit';
import bookSlice from './bookSlice/bookSlice';
import categorySlice from './categorySlice/categorySlice';
import topBookSlice from './topBookSlice/topBookSlice';

export default configureStore({
  reducer: {
    bookApi: bookSlice,
    category: categorySlice,
    topBook: topBookSlice,
  },
});
