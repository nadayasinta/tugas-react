import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { numberDataSlice } from './numberDataSlice';

const store = configureStore({
    reducer: {
        namaReducer: numberDataSlice.reducer,
    },
});
export { store };
