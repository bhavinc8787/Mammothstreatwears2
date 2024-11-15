import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaInstagram, FaFacebook, FaWhatsapp } from 'react-icons/fa';
import Shirts from './Shirts';

const Product = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState("M");
  const [selectedColor, setSelectedColor] = useState("Black");
  const [activeTab, setActiveTab] = useState("description");

  // Mock product data for testing
  const product = {
    name: "Sample T-Shirt",
    images: [
      "https://images.pexels.com/photos/1656684/pexels-photo-1656684.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/1566412/pexels-photo-1566412.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/1129019/pexels-photo-1129019.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/18398385/pexels-photo-18398385/free-photo-of-models-wearing-beige-and-black-t-shirts-seyot.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ],
    category: "OverSized T-shirt",
    originalPrice: 2000,
    price: 1500,
    rating: 4,
    supportDetails: "24/7 Support",
    warrantyDetails: "1 Year Warranty",
    shippingDetails: "Free Shipping",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "Blue", "Red", "Green"],
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    additionalInfo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.",
    reviews: [
      { reviewer: "John Doe", comment: "Great product!", rating: 5 },
      { reviewer: "Jane Smith", comment: "Very comfortable.", rating: 4 }
    ]
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % product.images.length);
    }, 6000);
    return () => clearInterval(intervalId);
  }, [product.images.length]);

  const handleAddToCart = () => {
    setCartItems([...cartItems, product]);
  };

  const handleBuyNow = () => {
    setCartItems([...cartItems, product]);
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
            <path d="M12 17.27L18.18 21 16.54 14.83 22 10.27 15.81 9.63 12 4 8.19 9.63 2 10.27 7.46 14.83 5.82 21z" />
          </svg>
        ))}
        {[...Array(emptyStars)].map((_, index) => (
          <svg key={index} className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 17.27L18.18 21 16.54 14.83 22 10.27 15.81 9.63 12 4 8.19 9.63 2 10.27 7.46 14.83 5.82 21z" />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <>
      <div className="bg-white text-gray-900 max-w-screen-lg mx-auto my-10 p-4 rounded-md shadow-md flex flex-col md:flex-row">
        <div className="relative md:w-1/2 flex-shrink-0">
          <div className="relative overflow-hidden rounded-md w-64 h-96 mx-auto">
            <img
              src={product.images[currentImageIndex]}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex mt-2 space-x-2 justify-center">
            {product.images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Thumbnail ${index + 1}`}
                className={`w-16 h-16 object-cover cursor-pointer rounded-md ${currentImageIndex === index ? 'border-2 border-blue-500' : ''}`}
                onClick={() => setCurrentImageIndex(index)}
              />
            ))}
          </div>
        </div>

        <div className="w-full md:w-1/2 flex flex-col justify-between p-4">
          <p className="text-gray-600 mb-2 font-bold">category: {product.category}</p>

          <div className="flex items-baseline mb-4">
            <p className="text-gray-500 text-sm line-through mr-4">Original Price: ₹{product.originalPrice}</p>
            <p className="text-gray-600 text-xl font-bold">Price Now: ₹{product.price}</p>
          </div>

          {discount > 0 && (
            <p className="text-white bg-red-500 py-1 px-2 rounded mb-4 inline-block">
              Save: ₹{discount}
            </p>
          )}

          <div className="mb-4">{renderStars(product.rating)}</div>

          <div className="mb-4">
            <p className="font-bold mb-2">Size:</p>
            <div className="flex space-x-2">
              {product.sizes.map(size => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`p-2 rounded-md ${selectedSize === size ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-4">
            <p className="font-bold mb-2">Color:</p>
            <div className="flex space-x-2">
              {product.colors.map(color => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`p-2 rounded-full ${selectedColor === color ? 'ring-2 ring-blue-500' : ''}`}
                  style={{ backgroundColor: color.toLowerCase() }}
                />
              ))}
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:space-x-4 mb-4">
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
              Buy Now!
            </button>
          </div>

          {/* Share To Section */}
          <div className="flex items-center space-x-4 mb-4">
            <span className="text-gray-600 font-bold">Share To:</span>
            <FaInstagram className="w-6 h-6 text-pink-600 cursor-pointer hover:scale-110 transition-transform" />
            <FaFacebook className="w-6 h-6 text-blue-600 cursor-pointer hover:scale-110 transition-transform" />
            <FaWhatsapp className="w-6 h-6 text-green-500 cursor-pointer hover:scale-110 transition-transform" />
          </div>

          {/* Tabs for Description, Additional Information, and Reviews */}
          <div className="mt-4">
            <div className="flex space-x-4 mb-2">
              {["description", "additionalInfo", "reviews"].map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`py-2 px-4 ${activeTab === tab ? 'border-b-2 border-blue-500' : 'text-gray-500'}`}
                >
                  {tab === "description" && "Description"}
                  {tab === "additionalInfo" && "Additional Info"}
                  {tab === "reviews" && "Reviews"}
                </button>
              ))}
            </div>
            <div>
              {activeTab === "description" && <p>{product.description}</p>}
              {activeTab === "additionalInfo" && <p>{product.additionalInfo}</p>}
              {activeTab === "reviews" && (
                <ul>
                  {product.reviews.map((review, index) => (
                    <li key={index} className="mb-2">
                      <p className="font-bold">{review.reviewer}</p>
                      <p>{review.comment}</p>
                      {renderStars(review.rating)}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
      <Shirts />
    </>
  );
};

export default Product;
