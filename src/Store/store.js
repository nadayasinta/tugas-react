import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { productSlice } from './productSlice';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// config tanpa persist
// const store = configureStore({
//     reducer: {
//         namaReducer: numberDataSlice.reducer,
//     },
// });
// export { store };

// config tanpa persist
const reducers = combineReducers({
    products: productSlice.reducer,
});
const persistConfig = {
    key: 'root',
    storage,
};
const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({ reducer: persistedReducer });
const persistor = persistStore(store);

export { store, persistor };
