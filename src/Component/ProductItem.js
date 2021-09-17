import React from 'react';

function ProductItem({
    productData,
    handleRemoveProduct,
    handleChangeProduct,
}) {
    return (
        <div className='container-fluid py-4'>
            <div className='row'>
                <div className='col-auto'>
                    <img
                        src={productData.image}
                        alt={productData.name}
                        width='75'
                    />
                </div>
                <div className='col'>
                    <div>{productData.name}</div>
                    <div>$ {productData.price}</div>
                    <button
                        className='btn p-0 text-info'
                        onClick={() => handleRemoveProduct(productData.id)}
                    >
                        remove
                    </button>
                </div>
                <div className='col text-right'>
                    <button
                        className='btn p-0 text-info'
                        onClick={() =>
                            handleChangeProduct(
                                productData.id,
                                productData.quantity + 1
                            )
                        }
                    >
                        ▲
                    </button>
                    <div>{productData.quantity}</div>
                    <button
                        className='btn p-0 text-info'
                        onClick={() =>
                            handleChangeProduct(
                                productData.id,
                                productData.quantity - 1
                            )
                        }
                    >
                        ▼
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ProductItem;
