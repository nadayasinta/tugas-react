import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getDataToServer = createAsyncThunk(
    'users/getDataToServer',
    async (userId, thunkAPI) => {
        fetch('https://testendpoint.free.beeceptor.com', {
            method: 'GET',
        })
            .then((response) => {
                return response.json();
            })
            .then((result) => {
                console.log(result);
                return result;
            });
    }
);

export const numberDataSlice = createSlice({
    name: 'namaReducer',
    initialState: {
        numberData: [1, 2],
        addTwo: false,
        name: '',
    },
    reducers: {
        tambahArray: (state) => {
            if (state.addTwo) {
                state.numberData = [
                    ...state.numberData,
                    state.numberData.length + 1,
                    state.numberData.length + 2,
                ];
            } else {
                state.numberData = [
                    ...state.numberData,
                    state.numberData.length + 1,
                ];
            }
        },
        kurangiArray: (state) => {
            state.numberData = state.numberData.slice(
                0,
                state.numberData.length - 1
            );
        },
        ubahName: (state, action) => {
            console.log(action);
            state.name = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getDataToServer.fulfilled, (state, action) => {
            // lakukan perubahan state disini
        });
    },
});

export const { tambahArray, kurangiArray, ubahName } = numberDataSlice.actions;
