import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/actions';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % product.images.length);
    }, 6000);

    return () => clearInterval(intervalId); 
  }, [product.images.length]);

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  const handleBuyNow = () => {
    dispatch(addToCart(product));
    navigate('/payment');
  };


  const discount = product.originalPrice - product.price;


  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const emptyStars = 5 - fullStars;
    return (
      <div className="flex items-center space-x-1">
        {[...Array(fullStars)].map((_, index) => (
          <svg key={index} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 17.27L18.18 21 16.54 14.83 22 10.27 15.81 9.63 12 4 8.19 9.63 2 10.27 7.46 14.83 5.82 21z"/>
          </svg>
        ))}
        {[...Array(emptyStars)].map((_, index) => (
          <svg key={index} className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 17.27L18.18 21 16.54 14.83 22 10.27 15.81 9.63 12 4 8.19 9.63 2 10.27 7.46 14.83 5.82 21z"/>
          </svg>
        ))}
      </div>
    );
  };

  return (
    <div className="bg-white text-gray-900 max-w-screen-lg mx-auto my-10 p-4 rounded-md shadow-md flex flex-col md:flex-row">
      <div className="relative md:w-1/2 flex-shrink-0">
        <div className="relative overflow-hidden rounded-md h-64 md:h-80">
          <img
            src={product.images[currentImageIndex]}
            alt={product.name}
            className="w-full h-full object-cover"
            style={{ maxWidth: '100%', maxHeight: '100%' }}
          />
          <div className="absolute inset-0 flex justify-between items-center px-4">
            <button
              className="bg-gray-800 text-white p-2 rounded-full"
              onClick={() => setCurrentImageIndex(prevIndex => (prevIndex - 1 + product.images.length) % product.images.length)}
            >
              &lt;
            </button>
            <button
              className="bg-gray-800 text-white p-2 rounded-full"
              onClick={() => setCurrentImageIndex(prevIndex => (prevIndex + 1) % product.images.length)}
            >
              &gt;
            </button>
          </div>
        </div>
      </div>

      <div className="w-full md:w-1/2 flex flex-col justify-between p-4">
      
       
        <p className="text-gray-600 mb-2 font-bold">Company: {product.company}</p>

    
        <div className="flex items-baseline mb-4">
          <p className="text-gray-500 text-sm line-through mr-4">Original Price: ₹{product.originalPrice}</p>
          <p className="text-gray-600 text-xl font-bold">Price Now: ₹{product.price}</p>
        </div>
        
  
        {discount > 0 && (
          <p className="text-white bg-red-500 py-1 px-2 rounded mb-4 inline-block">
            Save: ₹{discount}
          </p>
        )}

        {/* Rating */}
        <div className="mb-4">
          {renderStars(product.rating)}
        </div>

        
        <div className="mb-4">
          <p className="font-bold mb-2">Combo Includes With:</p>
          <div className="flex flex-wrap space-x-2">
            <div className="bg-blue-100 p-2 rounded-md flex items-center mb-2">
              <span>{product.supportDetails}</span>
            </div>
            <div className="bg-green-100 p-2 rounded-md flex items-center mb-2">
              <span>{product.warrantyDetails}</span>
            </div>
            <div className="bg-yellow-100 p-2 rounded-md flex items-center mb-2">
              <span>{product.shippingDetails}</span>
            </div>
          </div>
        </div>

        
        <div className="flex flex-col md:flex-row md:space-x-4">
          <button
            onClick={handleAddToCart}
            className="bg-blue-500 text-white py-2 px-4 rounded mb-2 md:mb-0 hover:bg-blue-600 transition-colors"
          >
            Add to Cart
          </button>
          <button
            onClick={handleBuyNow}
            className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition-colors"
          >
            Book Service Now !
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
