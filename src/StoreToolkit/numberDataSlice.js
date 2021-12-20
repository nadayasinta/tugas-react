import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const numberDataSlice = createSlice({
    name: 'numberData',
    initialState: {
        num: 0,
        title: '',
        token: '',
        role: '',
    },
    reducers: {
        increment: (state) => {
            state.num += 1;
        },
        decrement: (state) => {
            state.num -= 1;
        },
        change: (state, action) => {
            console.log(action);
            state.num = action.payload;
        },
        changeTitle: (state) => {
            state.title = 'Hello';
        },
        changeToken: (state, action) => {
            // action.payload ={
            //     token:'aaaa',
            //     role:'admin'
            // }
            state.token = action.payload.token;
            state.role = action.payload.role;
        },
    },
});

export const { increment, decrement, change } = numberDataSlice.actions;
