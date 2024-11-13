import React, { useState, useEffect, useRef } from 'react';

const images = [
  'https://images.pexels.com/photos/1130624/pexels-photo-1130624.jpeg?auto=compress&cs=tinysrgb&w=600',
  'https://images.pexels.com/photos/735551/pexels-photo-735551.jpeg?auto=compress&cs=tinysrgb&w=600',
  "https://images.pexels.com/photos/175696/pexels-photo-175696.jpeg?auto=compress&cs=tinysrgb&w=600"
];

function Banner() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 6000);

    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <div className="relative overflow-hidden w-full h-screen">
      <div
        className="flex transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Slide ${index + 1}`}
            className="w-full flex-shrink-0 object-cover h-screen"
          />
        ))}
      </div>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-pink-600' : 'bg-gray-400'}`}
          />
        ))}
      </div>
    </div>
  );
}

export default Banner;
