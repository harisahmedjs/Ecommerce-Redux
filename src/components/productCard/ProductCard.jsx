import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ title, price, description, image, id }) => {
  const navigate = useNavigate();

  const showProductDetails = (id) => {
    navigate(`/products/${id}`);
  };

  return (
    <div
      onClick={() => showProductDetails(id)}
      className="max-w-sm rounded overflow-hidden shadow-lg cursor-pointer transition-transform transform hover:scale-105"
    >
      <figure>
        <img className="w-full h-48 object-cover" src={image} alt="product-image" />
      </figure>
      <div className="px-6 py-4">
        <h2 className="text-xl font-semibold mb-2">{title.slice(0, 20)}</h2>
        <p className="text-gray-700 text-base mb-2">{description.slice(0, 50)}...</p>
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-bold text-blue-500">{price}$</h2>
          <button
            onClick={(e) => {
              e.stopPropagation(); // Prevent click propagation to the parent div
              showProductDetails(id);
            }}
            className="bg-blue-500 text-white py-1 px-4 rounded focus:outline-none"
          >
            Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
