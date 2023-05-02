import { configureStore, combineReducers } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import bookSlice from './bookSlice/bookSlice';
import categorySlice from './categorySlice/categorySlice';
import topBookSlice from './topBookSlice/topBookSlice';
import startIndexSlice from './startIndex/startIndexSlice';
import searchValueSlice from './searchValueSlice/searchValueSlice';
import cartSlice from './cartSlice/cartSlice';

const rootReducer = combineReducers({
  bookApi: bookSlice,
  category: categorySlice,
  topBook: topBookSlice,
  startIndex: startIndexSlice,
  search: searchValueSlice,
  cart: cartSlice,
});

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['bookApi', 'category', 'topBook', 'startIndex', 'search'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
export default store;
