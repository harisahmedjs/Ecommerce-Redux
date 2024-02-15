import React from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../config/redux/reducers/cartSlice';
import Swal from 'sweetalert2';

const SingleProductDetails = ({ image, title, description, price, id }) => {
  const selector = useSelector((state) => state.cartItems.cartItems);
  const dispatch = useDispatch();

  const productAddToCart = () => {
    axios
      .get(`https://api.escuelajs.co/api/v1/products/${id}`)
      .then((res) => {
        if (selector.length === 0) {
          dispatch(addToCart({
            title: res.data.title,
            price: res.data.price,
            description: res.data.description,
            image: res.data.images,
            id: res.data.id
          }));
        } else {
          let productAlreadyExist = false;
          selector.forEach((item) => {
            if (item.id === res.data.id) {
              productAlreadyExist = true;
            }
          });

          if (productAlreadyExist) {
            alert('This product is already in your cart.');
          } else {
            dispatch(addToCart({
              title: res.data.title,
              price: res.data.price,
              description: res.data.description,
              image: res.data.images,
              id: res.data.id
            }));
            alert('Product added to cart.');
          }
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="relative h-64 w-full">
        <img className="absolute h-full w-full object-cover" src={image} alt={title} />
      </div>
      <div className="relative p-4">
        <h2 className="text-2xl font-semibold text-gray-800">{title}</h2>
        <h4 className="text-xl font-bold text-gray-600">${price}</h4>
        <p className="text-gray-600">{description}</p>
        <div className="mt-4">
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 focus:outline-none"
            onClick={productAddToCart}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProductDetails;
