import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, change } from '../StoreToolkit/numberDataSlice';
import axios from 'axios';
function Home() {
    const counter = useSelector((state) => state.numberData?.num);
    const produk = useSelector((state) => state.productData?.produk);
    const dispatch = useDispatch();
    const [msg, setMsg] = useState('');

    useEffect(() => {
        // FETCH POST
        fetch('https://6141c998357db50017b3dd1b.mockapi.io/kampus_merdeka', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer token...',
            },
            body: JSON.stringify({
                name: 'Rick Turner',
                jurusan: 'Mobility',
                perguruanTinggi: 'Orn LLC',
            }),
        })
            .then((response) => {
                return response.json();
            })
            .then((result) => {
                setMsg(result.message);
            })
            .catch((error) => {
                throw error;
            });

        // FETCH GET
        var url = new URL(
            'https://6141c998357db50017b3dd1b.mockapi.io/kampus_merdeka'
        );

        var params = [
            ['lat', '35.696233'],
            ['long', '139.570431'],
        ];

        url.search = new URLSearchParams(params).toString();
        fetch(url)
            .then((response) => {
                console.log('fetch1', response);
                return response.json();
            })
            .then((result) => {
                setMsg(result.message);
                console.log('fetch2', result);
            })
            .catch((error) => {
                throw error;
            });

        // AXIOS GET
        const id = 1;
        axios
            .get(
                `https://6141c998357db50017b3dd1b.mockapi.io/kampus_merdeka/${id}`,
                {
                    params: {
                        lat: '35.696233',
                        long: '139.570431',
                    },
                }
            )
            .then(function (response) {
                // handle success
                setMsg(response.data.message);
                console.log('axios', response);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });

        // AXIOS POST
        axios
            .post(
                'https://6141c998357db50017b3dd1b.mockapi.io/kampus_merdeka',
                {
                    name: 'Rick Turner2',
                    jurusan: 'Mobility',
                    perguruanTinggi: 'Orn LLC',
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: 'Bearer token...',
                    },
                }
            )
            .then(function (response) {
                // handle success
                setMsg(response.data.message);
                console.log('axios', response);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
    }, []);

    return (
        <div className='App'>
            <div>{counter}</div>
            <div>
                <button onClick={() => dispatch(increment())}>
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
        </div>
    );
}

export default Home;
