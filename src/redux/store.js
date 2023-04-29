import { configureStore } from '@reduxjs/toolkit';
import bookSlice from './bookSlice/bookSlice';
import categorySlice from './categorySlice/categorySlice';
import topBookSlice from './topBookSlice/topBookSlice';
import startIndexSlice from './startIndex/startIndexSlice';
import searchValueSlice from './searchValueSlice/searchValueSlice';

export default configureStore({
  reducer: {
    bookApi: bookSlice,
    category: categorySlice,
    topBook: topBookSlice,
    startIndex: startIndexSlice,
    search: searchValueSlice,
  },
});
