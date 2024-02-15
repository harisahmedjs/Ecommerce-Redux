import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = (props) => {
  const navigate = useNavigate();

  const navigateToCart = () => {
    navigate('/cart');
  };

  return (
    <>
      <div className="bg-blue-500 p-4">
        <Link to={'/'} className="text-white text-xl font-semibold">Store</Link>
      </div>

      <div className="flex items-center justify-end p-4">
        <div tabIndex={0} role="button" className="relative focus:outline-none">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <span className="absolute top-0 right-0 bg-red-500 text-white p-1 rounded-full">{props.items}</span>
          </div>
        </div>

        <div tabIndex={0} className="ml-4">
          <div>
            <span className="text-white">{props.items} Items</span>
            <span className="text-white ml-2">{props.subtotal}</span>
            <div>
              <button onClick={navigateToCart} className="bg-white text-blue-500 py-1 px-4 rounded focus:outline-none">View Cart</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
