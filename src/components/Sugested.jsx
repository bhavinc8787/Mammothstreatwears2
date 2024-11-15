import React from 'react';
import productsData from './products.json'; // Importing the products data from the JSON file

const Sugested = ({ category }) => {
  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold text-gray-700 mb-4">
        Suggested Products
      </h2>
      {/* Suggestions Container */}
      <div
        className="flex overflow-x-auto space-x-4 pb-4 scrollbar-hide"
        style={{ scrollBehavior: 'smooth' }}
      >
        {/* Filter the products by category and display them */}
        {productsData[category].map((product) => (
          <div
            key={product.id}
            className="flex-none w-72 bg-white border border-gray-200 rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:scale-105"
            style={{ height: '440px' }}
          >
            {/* Product Image */}
            <div className="h-[80%] overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Product Info */}
            <div className="h-[20%] p-2 flex flex-col justify-between">
              {/* Product Name */}
              <h3 className="text-center text-md font-semibold text-gray-700 truncate mb-1">
                {product.name}
              </h3>

              {/* Price and Button Row */}
              <div className="flex items-center justify-between px-1">
                {/* Price */}
                <div className="flex items-center space-x-1">
                  <span className="text-gray-500 line-through text-sm">
                    ₹{product.originalPrice}
                  </span>
                  <span className="text-orange-500 font-bold">
                    ₹{product.offerPrice}
                  </span>
                </div>

                {/* Add to Cart Button */}
                <button className="w-24 bg-white border border-orange-500 text-orange-500 text-xs py-1 rounded-lg hover:bg-orange-500 hover:text-white transition duration-300">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sugested;
