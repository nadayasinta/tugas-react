import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchData = createAsyncThunk(
    'numberData/fetchData',
    async (data, thunkAPI) => {
        console.log(data, thunkAPI);
        return fetch(
            `https://6141c998357db50017b3dd1b.mockapi.io/kampus_merdeka/${data}`,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: 'Bearer token...',
                },
            }
        )
            .then((response) => {
                return response.json();
            })
            .then((result) => {
                console.log(result.name);
                return result.fullName;
            })
            .catch((error) => {
                return 'gagal';
            });
    }
);

export const numberDataSlice = createSlice({
    name: 'numberData',
    initialState: {
        num: 0,
        title: '',
        token: '',
        role: '',
        res: '',
        loading: false,
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
    extraReducers: (builder) => {
        builder.addCase(fetchData.fulfilled, (state, action) => {
            console.log(action);
            state.res = action.payload;
            state.loading = false;
        });
        builder.addCase(fetchData.pending, (state, action) => {
            console.log(action);
            state.loading = true;
        });
        builder.addCase(fetchData.rejected, (state, action) => {
            console.log(action);
            state.loading = false;
        });
    },
});

export const { increment, decrement, change } = numberDataSlice.actions;
