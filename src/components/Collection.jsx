import React from 'react';

const Collection = () => {
  const images = [
    'https://images.pexels.com/photos/4210863/pexels-photo-4210863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', // Example image URLs with a taller aspect ratio
    'https://images.pexels.com/photos/9415574/pexels-photo-9415574.jpeg',
    'https://images.pexels.com/photos/9415543/pexels-photo-9415543.jpeg',
    'https://images.pexels.com/photos/7679656/pexels-photo-7679656.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-0 p-0">
      {images.map((imgUrl, index) => (
        <div key={index} className="relative flex justify-center">
          <img
            src={imgUrl}
            alt={`Image ${index + 1}`}
            className="w-full h-[360px] object-cover"
          />
          {/* Get It Button */}
          <button
            className="absolute bottom-2 left-2 bg-orange-500 text-white font-bold px-4 py-1 rounded-full text-sm hover:bg-orange-700 transition duration-300 ease-in-out transform hover:scale-110 shadow-lg"
          >
            Get It
          </button>
        </div>
      ))}
    </div>
  );
};

export default Collection;
