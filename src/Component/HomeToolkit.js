import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    increment,
    decrement,
    change,
    fetchData,
} from '../StoreToolkit/numberDataSlice';
function Home() {
    const counter = useSelector((state) => state.numberData?.num);
    const loading = useSelector((state) => state.numberData?.loading);
    const res = useSelector((state) => state.numberData?.res);
    const produk = useSelector((state) => state.productData?.produk);
    const dispatch = useDispatch();

    return (
        <div className='App'>
            <div>{counter}</div>
            <div>
                <button onClick={() => dispatch(increment('test'))}>
                    INCREMENT BY 1
                </button>
            </div>
            <div>
                <button onClick={() => dispatch(decrement())}>
                    DECREMENT BY 1
                </button>
            </div>
            <button onClick={() => dispatch(change(Math.random()))}>
                CHANGE
            </button>
            {produk}
            <br />
            <button onClick={() => dispatch(fetchData(1))}>GET DATA</button>
            {loading ? <div>Loading...</div> : null}
            {res}
        </div>
    );
}

export default Home;
