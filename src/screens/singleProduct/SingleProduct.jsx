import React, { useEffect, useState } from 'react';
import SingleProductDetails from '../../components/singleProductDetails/SingleProductDetails';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const SingleProduct = () => {
  const [singleProduct, setSingleProduct] = useState(null);
  const [error, setError] = useState(null);

  // useParams
  const params = useParams();

  useEffect(() => {
    axios
      .get(`https://api.escuelajs.co/api/v1/products/${params.id}`)
      .then((res) => {
        setSingleProduct(res.data);
      })
      .catch((err) => {
        console.error(err);
        setError('Error fetching the product. Please try again later.');
      });
  }, [params.id]);

  return (
    <>
      <div>
        {error ? (
          <p>{error}</p>
        ) : singleProduct ? (
          <SingleProductDetails
            title={singleProduct.title}
            image={singleProduct.images}
            price={singleProduct.price}
            description={singleProduct.description}
            id={singleProduct.id}
          />
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>
  );
};

export default SingleProduct;
