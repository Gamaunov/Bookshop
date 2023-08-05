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
import bookSlice from '@/widgets/Books/model/bookSlice';
// Define your reducers here
import categorySlice from '@/widgets/Books/model/categorySlice';
import searchValueSlice from '@/widgets/Books/model/searchValueSlice';
import startIndexSlice from '@/widgets/Books/model/startIndexSlice';

// Combine your reducers into the root reducer
const rootReducer = combineReducers({
	categorySlice,
	startIndexSlice,
	searchValueSlice,
	cartSlice,
	bookSlice,
	// Add other reducers if needed
});

// Define the persist configuration options
const persistConfig = {
	key: 'root',
	storage,
	blacklist: [
		'categorySlice',
		'startIndexSlice',
		'searchValueSlice',
		'bookSlice',
	],
};

// Create the persisted reducer with the given configuration
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create the Redux store with persisted reducer and custom middleware
const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
});

// Create and export the persistor
export const persistor = persistStore(store);

// Export the store as default
export default store;

// Export RootState and AppDispatch types
export type RootState = ReturnType<typeof rootReducer>;
// export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
