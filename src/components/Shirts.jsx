import React from 'react';
import productsData from './products.json'; // Importing the products data from the JSON file

const ProductGrid = () => {
  // Categories to display
  const categories = ['Round Neck', 'V-Neck', 'Polo', 'Graphic'];

  return (
    <div className="p-4">
      <h1 className="text-l lg:text-xl font-bold mb-6 text-center">
        <span className="rounded-lg px-4 py-2 inline-block mt-8">
        "Oversized T-Shirts"
        </span>
      </h1>
      {/* Outer Container */}
      <div className="space-y-6">
        {/* Loop through categories */}
        {categories.map((category, rowIndex) => (
          <div key={rowIndex}>
            <h2 className="text-xl font-semibold text-gray-700 mb-4">{category}</h2>
            <div
              className="flex overflow-x-auto space-x-4 pb-4 scrollbar-hide"
              style={{ scrollBehavior: 'smooth' }} // Smooth scroll behavior
            >
              {/* Filter the products by category and display them */}
              {productsData[category].map((product) => (
                <div
                  key={product.id}
                  className="flex-none w-72 bg-white border border-gray-200 rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:scale-105"
                  style={{ height: '440px' }} // Adjusted card height
                >
                  {/* Product Image */}
                  <div className="h-[80%] overflow-hidden"> {/* 85% height for image */}
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
                        <span className="text-black font-bold">
                          ₹{product.offerPrice}
                        </span>
                      </div>

                      {/* Add to Cart Button */}
                      <button className="w-24 bg-white border border-black text-black text-xs py-1 rounded-lg hover:bg-black hover:text-white transition duration-300">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
