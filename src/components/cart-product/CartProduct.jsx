import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeCartItem } from '../../config/redux/reducers/cartSlice';

const CartProduct = () => {
    // UseSelector
    const selector = useSelector((state) => state.cartItems.cartItems);
    


    // UseDispatch
    const dispatch = useDispatch();

    // Delete Items From Cart
    const dltCartItem = (index) => {
        console.log(index);
        dispatch(removeCartItem({ index: index }));
    };

    return (
        <>
            <div >
                <h1>
                    {' '}
                    {' '}
                </h1>

                {selector.length > 0 ? (
                    selector.map((item, index) => (
                        
                        
                        <div key={item.id} >
                            <figure>
                                <img src={item.image}  alt="product-image" />
                                

                            </figure>

                            <div>
                                <h2 >{item.title.slice(0, 20)}...</h2>
                                <h2 >{item.price}$</h2>
                                <p>{item.description.slice(0, 50)}...</p>
                                <div >
                                    <button onClick={() => dltCartItem(index)} >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <h1 > no item </h1>
                )}
            </div>
        </>
    );
};

export default CartProduct;
