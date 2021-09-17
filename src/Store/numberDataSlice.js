import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getDataToServer = createAsyncThunk(
    'users/getDataToServer',
    async (data, thunkAPI) => {
        console.log(data, thunkAPI);
        return await fetch(
            'https://6141c998357db50017b3dd1b.mockapi.io/kampus_merdeka',
            { method: 'GET' }
        )
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
                state.requestStatus = action.payload.message;
            })
            .addCase(getDataToServer.rejected, (state, action) => {
                state.requestStatus = 'Failed';
            });
    },
});

export const { tambahArray, kurangiArray, ubahName } = numberDataSlice.actions;
