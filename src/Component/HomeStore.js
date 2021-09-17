import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    handleRemoveProduct,
    handleChangeProduct,
    handleRemoveAllProduct,
    handleChangeCountProduct,
    handleChangeTotalProduct,
} from '../Store/productSlice';
import ProductItem from './ProductItem';

function Home(props) {
    const product = useSelector((state) => state.products.product);
    const countProduct = useSelector((state) => state.products.countProduct);
    const totalProduct = useSelector((state) => state.products.totalProduct);
    const dispatch = useDispatch();

    useEffect(() => {
        const { count, total } = product.reduce(
            (acc, item) => {
                acc.count += item.quantity;
                acc.total += item.quantity * item.price;
                return acc;
            },
            { count: 0, total: 0 }
        );
        dispatch(handleChangeCountProduct(count));
        dispatch(handleChangeTotalProduct(total));
    }, [product, dispatch]);

    return (
        <div className='container-fluid min-vh-100 bg-light'>
            <div className='row justify-content-center bg-info shadow-sm  '>
                <div className='col-12 p-4 text-right h5 text-white'>
                    Your Cart ({countProduct})
                </div>
            </div>
            <div className='row justify-content-center'>
                <div className='col-12 p-4 text-center h2'>CHECKOUT</div>
                {!product.length ? (
                    <div className='col-7 text-center h5 text-secondary'>
                        Your cart is empty
                    </div>
                ) : (
                    <>
                        <div className='col-7'>
                            {product.map((item) => (
                                <ProductItem
                                    key={item.id}
                                    productData={item}
                                    handleRemoveProduct={(id) =>
                                        dispatch(handleRemoveProduct(id))
                                    }
                                    handleChangeProduct={(id, newCount) =>
                                        dispatch(
                                            handleChangeProduct({
                                                id,
                                                newCount,
                                            })
                                        )
                                    }
                                />
                            ))}
                        </div>
                        <div className='col-7 my-4 p-4 border-top border-dark text-right h5'>
                            Total : ${totalProduct.toFixed(2)}
                        </div>

                        <div className='col-7 pb-5 text-center'>
                            <button
                                className='btn btn-outline-danger'
                                onClick={() =>
                                    dispatch(handleRemoveAllProduct())
                                }
                            >
                                CLEAR CART
                            </button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

export default Home;
