import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from './ProductCard';
import productsData from '../data/products.json';

const CategoryPage = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(productsData.filter(product => product.category === category));
  }, [category]);

  return (
    <div className="p-8">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-center">
        <span className="bg-slate-300 rounded-lg px-4 py-2 inline-block">
          {category}s
        </span>
      </h1>
      
      <div className="mt-10">
  {products.map(product => (
    <ProductCard key={product.id} product={product} />
  ))}
</div>

    </div>
  );
};

export default CategoryPage;
