import { createSlice } from '@reduxjs/toolkit';

export const productSlice = createSlice({
    name: 'products',
    initialState: {
        product: [
            {
                id: 1,
                name: 'Samsung Galaxy S8',
                price: 399.99,
                quantity: 1,
                image: 'https://dl.airtable.com/.attachments/64b266ad865098befbda3c3577a773c9/24497852/yedjpkwxljtb75t3tezl.png',
            },
            {
                id: 2,
                name: 'Google Pixel',
                price: 499.99,
                quantity: 1,
                image: 'https://dl.airtable.com/.attachments/91c88ae8c1580e2b762ecb3f73ed1eed/a633139a/phone-1_gvesln.png',
            },
            {
                id: 3,
                name: 'Xiaomi Redmi Note 2',
                price: 699.99,
                quantity: 1,
                image: 'https://dl.airtable.com/.attachments/bae9208dc34f35128749ecda5b999e84/337c285d/phone-3_h2s6fo.png',
            },
            {
                id: 4,
                name: 'Samsung Galaxy S7',
                price: 599.99,
                quantity: 1,
                image: 'https://dl.airtable.com/.attachments/91ee456448cef47deec553a2ea3fa8ad/b08bec68/phone-2_ohtt5s.png',
            },
        ],
        countProduct: 0,
        totalProduct: 0,
    },
    reducers: {
        handleRemoveProduct: (state, action) => {
            const newData = state.product.filter(
                (item) => item.id !== action.payload
            );
            state.product = newData;
        },
        handleChangeProduct: (state, action) => {
            console.log(action);
            if (action.payload.newCount === 0) {
                const newData = state.product.filter(
                    (item) => item.id !== action.payload.id
                );
                state.product = newData;
            } else {
                const newData = state.product.map((item) => {
                    if (item.id === action.payload.id) {
                        return { ...item, quantity: action.payload.newCount };
                    } else {
                        return { ...item };
                    }
                });
                state.product = newData;
            }
        },
        handleRemoveAllProduct: (state) => {
            state.product = [];
        },
        handleChangeCountProduct: (state, action) => {
            state.countProduct = action.payload;
        },
        handleChangeTotalProduct: (state, action) => {
            state.totalProduct = action.payload;
        },
    },
});

export const {
    handleRemoveProduct,
    handleChangeProduct,
    handleRemoveAllProduct,
    handleChangeCountProduct,
    handleChangeTotalProduct,
} = productSlice.actions;
