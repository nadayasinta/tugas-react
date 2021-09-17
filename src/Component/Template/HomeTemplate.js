import React, { useState } from 'react';
import ProductItem from '../ProductItem';
function Home(props) {
    const [product, setProducts] = useState([
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
            id: 3,
            name: 'Samsung Galaxy S7',
            price: 599.99,
            quantity: 1,
            image: 'https://dl.airtable.com/.attachments/91ee456448cef47deec553a2ea3fa8ad/b08bec68/phone-2_ohtt5s.png',
        },
    ]);
    const [countProduct, setCountProducts] = useState(0);
    const [totalProduct, setToalProducts] = useState(0);

    return (
        <div className='container-fluid min-vh-100 bg-light'>
            <div className='row justify-content-center bg-info shadow-sm  '>
                <div className='col-12 p-4 text-right h5 text-white'>
                    Your Cart ({countProduct})
                </div>
            </div>
            <div className='row justify-content-center'>
                <div className='col-12 p-4 text-center h2'>CHECKOUT</div>
                <div className='col-7'>
                    {product.map((item) => (
                        <ProductItem key={item.id} productData={item} />
                    ))}
                </div>
            </div>
            <div className='row justify-content-center my-4'>
                <div className='col-7 p-4 border-top border-dark text-right h5'>
                    Total : ${totalProduct}
                </div>

                <div className='col-7 pb-5 text-center'>
                    <button className='btn btn-outline-danger'>
                        CLEAR CART
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Home;
