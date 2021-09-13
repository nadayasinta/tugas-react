import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { tambahArray, kurangiArray, ubahName } from '../Store/numberDataSlice';

function Home(props) {
    const numberData = useSelector((state) => state.namaReducer.numberData);
    const name = useSelector((state) => state.namaReducer.name);

    const dispatch = useDispatch();

    return (
        <div className='container-fluid min-vh-100 bg-light'>
            <div className='row justify-content-center'>
                <div className='col-8 p-5 shadow bg-white text-center'>
                    <button
                        className='btn btn-primary'
                        onClick={() => dispatch(kurangiArray())}
                    >
                        -
                    </button>
                    <button
                        className='btn btn-primary'
                        onClick={() => dispatch(tambahArray())}
                    >
                        +
                    </button>
                    <br />
                    <span class='h1 px-3'>
                        [
                        {numberData.map((item, index) => (
                            <span key={index}>{item},</span>
                        ))}
                        ]
                    </span>
                    <br />
                    Name:{name}
                    <br />
                    <button
                        className='btn btn-primary'
                        onClick={() => dispatch(ubahName('NAMA'))}
                    >
                        Change Name{' '}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Home;
