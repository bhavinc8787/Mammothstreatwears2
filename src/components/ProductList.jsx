import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import productsData from '../data/products.json';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(productsData);
  }, []);

  return (
    <div className="p-4 min-h-screen flex items-center justify-center bg-gray-100">
      {products.length > 0 && (
        <ProductCard
          key={products[0].id}
          product={products[0]}
          isFullScreen={true}
        />
      )}
    </div>
  );
};

export default ProductList;
