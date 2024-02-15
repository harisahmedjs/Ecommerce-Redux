import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import ProductCard from '../../components/productCard/ProductCard';

const Home = () => {
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    axios
      .get('https://api.escuelajs.co/api/v1/products')
      .then((res) => {
        setAllProducts(res.data);
      })
      .catch((rej) => {
        console.log(rej);
      });
  }, []);

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {allProducts.length > 0 &&
          allProducts.map((item, index) => (
            <ProductCard
              key={item.id}
              image={item.images}
              title={item.title}
              price={item.price}
              description={item.description}
              id={item.id}
            />
          ))}
      </div>
    </div>
  );
};

export default Home;
