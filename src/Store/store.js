import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { numberDataSlice } from './numberDataSlice';
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
    namaReducer: numberDataSlice.reducer,
});
const persistConfig = {
    key: 'root',
    storage,
};
const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({ reducer: persistedReducer });
const persistor = persistStore(store);

export { store, persistor };
