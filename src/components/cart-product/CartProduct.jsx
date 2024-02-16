import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeCartItem } from '../../config/redux/reducers/cartSlice';

const CartProduct = () => {
    const selector = useSelector((state) => state.cartItems.cartItems);
    const dispatch = useDispatch();

    const dltCartItem = (index) => {
        console.log(index);
        dispatch(removeCartItem({ index: index }));
    };

    return (
        <div className="p-4 bg-white shadow-md rounded-md">
            <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

            {selector.length > 0 ? (
                selector.map((item, index) => (
                    <div key={item.id} className="flex items-center mb-6 border-b border-gray-300 pb-4">
                        <figure className="mr-4">
                            <img src={item.image} alt="product-image" className="w-24 h-24 object-cover rounded-md" />
                        </figure>

                        <div className="flex flex-col">
                            <h2 className="text-xl font-semibold mb-2">{item.title.slice(0, 25)}...</h2>
                            <p className="text-gray-600 mb-2">${item.price}</p>
                            <p className="text-gray-600">{item.description.slice(0, 80)}...</p>
                            <div className="mt-4">
                                <button
                                    onClick={() => dltCartItem(index)}
                                    className="bg-red-500 text-white px-4 py-2 rounded-md focus:outline-none hover:bg-red-600"
                                >
                                    Remove
                                </button>
                            </div>
                        </div>
                    </div>
                ))
            ) : (
                <h1 className="text-lg">Your cart is empty</h1>
            )}
        </div>
    );
};

export default CartProduct;
