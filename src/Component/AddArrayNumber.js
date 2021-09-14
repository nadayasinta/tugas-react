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
                <div className='col-8 p-5 shadow bg-white text-center'>
                    <button
                        className='btn btn-primary'
                        onClick={() => kurangiArray}
                    >
                        -
                    </button>
                    <button
                        className='btn btn-primary'
                        onClick={() => tambahArray}
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
                </div>
            </div>
        </div>
    );
}

export default AddArrayNumber;
