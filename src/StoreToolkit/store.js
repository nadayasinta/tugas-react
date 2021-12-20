import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { numberDataSlice } from './numberDataSlice';
import { productDataSlice } from './productDataSlice';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// config tanpa persist
// const store = configureStore({
//     reducer: {
//         numberData: numberDataSlice.reducer,
//         productData: productDataSlice.reducer,
//     },
// });
// export { store };

// config dengan persist
const reducers = combineReducers({
    numberData: numberDataSlice.reducer,
    productData: productDataSlice.reducer,
});
const persistConfig = {
    key: 'app',
    storage,
    whitelist: ['numberData'],
};
const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({ reducer: persistedReducer });
const persistor = persistStore(store);

export { store, persistor };
