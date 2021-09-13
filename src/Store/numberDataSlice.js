import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getDataToServer = createAsyncThunk(
    'users/getDataToServer',
    async (data, thunkAPI) => {
        console.log(data);
        return await fetch('https://almock.alterra.dev/almock/demoa', {
            method: 'GET',
        })
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }
                throw Error;
            })
            .then((result) => {
                return result;
            })
            .catch((error) => {
                throw error;
            });
    }
);

export const numberDataSlice = createSlice({
    name: 'namaReducer',
    initialState: {
        numberData: [1, 2],
        addTwo: false,
        name: '',
        requestStatus: '',
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
        builder
            .addCase(getDataToServer.pending, (state, action) => {
                state.requestStatus = 'Loading';
            })
            .addCase(getDataToServer.fulfilled, (state, action) => {
                state.requestStatus = action.payload.Message;
            })
            .addCase(getDataToServer.rejected, (state, action) => {
                state.requestStatus = 'Failed';
            });
    },
});

export const { tambahArray, kurangiArray, ubahName } = numberDataSlice.actions;
