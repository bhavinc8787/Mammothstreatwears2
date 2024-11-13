import React, { useState, useEffect, useRef } from 'react';

const videos = [
  { url: 'https://videos.pexels.com/video-files/4407724/4407724-hd_1920_1080_30fps.mp4' },
  { url: 'https://videos.pexels.com/video-files/28985119/12537126_1920_1080_24fps.mp4' },
  { url: 'https://videos.pexels.com/video-files/19091266/19091266-hd_1920_1080_30fps.mp4' }
];

function Banner() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  }, []);

  const startAutoSlide = () => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % videos.length);
    }, 10000);
  };

  const stopAutoSlide = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  const goToSlide = (index) => {
    stopAutoSlide();
    setCurrentIndex(index);
    startAutoSlide(); // Restart the auto-slide after navigating manually
  };

  return (
    <div className="relative overflow-hidden w-full h-screen">
      <div
        className="flex transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {videos.map((video, index) => (
          <video
            key={index}
            src={video.url}
            className="flex-shrink-0 object-cover w-full h-[80vh] sm:h-screen md:h-[90vh] lg:h-screen xl:h-screen"
            autoPlay
            loop
            muted
          />
        ))}
      </div>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 ">
        {videos.map((_, index) => (
          <div
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              currentIndex === index ? 'bg-orange-500' : 'bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default Banner;
