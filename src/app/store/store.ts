import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
	FLUSH,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
	REHYDRATE,
	persistReducer,
	persistStore,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import cartSlice from '@/pages/CartPage/model/cartSlice';
import topBookSlice from '@/pages/TopBooks/model/topBooksSlice';
import bookSlice from '@/widgets/Books/model/bookSlice';
import categorySlice from '@/widgets/Books/model/categorySlice';
import searchValueSlice from '@/widgets/Books/model/searchValueSlice';
import startIndexSlice from '@/widgets/Books/model/startIndexSlice';

const rootReducer = combineReducers({
	categorySlice,
	startIndexSlice,
	searchValueSlice,
	cartSlice,
	bookSlice,
	topBookSlice,
});

const persistConfig = {
	key: 'root',
	storage,
	blacklist: [
		'categorySlice',
		'startIndexSlice',
		'searchValueSlice',
		'bookSlice',
		'topBookSlice',
	],
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

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
