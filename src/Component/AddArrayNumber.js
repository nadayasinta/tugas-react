import React, { useState, useRef } from 'react';

function AddArrayNumber(props) {
    const [numberData, setNumberData] = useState([]);

    const kurangiArray = (event) => {
        const newNumberData = numberData.slice(0, numberData.length - 1);
        setNumberData(newNumberData);
    };

    const tambahArray = (event) => {
        const newNumberData = [...numberData, numberData.length + 1];
        setNumberData(newNumberData);
    };

    return (
        <div className='container-fluid min-vh-100 bg-light'>
            <div className='row justify-content-center'>
                <h1>Add Array</h1>
                <div className='col-8 p-5 shadow bg-white text-center'>
                    <button
                        data-testid='buttonKurangi'
                        className='btn btn-primary'
                        onClick={() => kurangiArray()}
                    >
                        -
                    </button>
                    <button
                        data-testid='buttonTambah'
                        className='btn btn-primary'
                        onClick={() => tambahArray()}
                    >
                        +
                    </button>
                    <br />
                    <span className='h1 px-3' data-testid='arrayNumber'>
                        [
                        {numberData.map((item, index) => (
                            <span key={index}>{item},</span>
                        ))}
                        ]
                    </span>
                </div>
            </div>
        </div>
    );
}

export default AddArrayNumber;
