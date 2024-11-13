import React from 'react';
import ProductCard from './ProductCard';

const ProductSection = ({ category, products }) => {
  const filteredProducts = products.filter(product => product.category === category);

  return (
    <section className="mb-6">
      <h2 className="text-2xl font-semibold mb-4">{category}s</h2>
      <div className="overflow-x-auto flex space-x-4">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};


export default ProductSection;
