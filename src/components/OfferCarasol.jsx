import React from 'react';
import offerImage1 from '../assets/offer_1.jpg'; // Importing the image from local assets

function OfferCarasol() {
  return (
    <div className="carousel rounded-box skeleton">
      <div className="carousel-item">
        <img
          src={offerImage1} // Using the imp
          className="h-72 w-72 object-cover sm:h-80 sm:w-80 md:h-96 md:w-96 lg:h-[28rem] lg:w-[28rem]"
        />orted image
          alt="Offer"
      </div>
      <div className="carousel-item">
        <img
          src="https://images.pexels.com/photos/6310924/pexels-photo-6310924.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Offer"
          className="h-72 w-72 object-cover sm:h-80 sm:w-80 md:h-96 md:w-96 lg:h-[28rem] lg:w-[28rem]"
        />
      </div>
      <div className="carousel-item">
        <img
          src="https://images.pexels.com/photos/6246727/pexels-photo-6246727.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Offer"
          className="h-72 w-72 object-cover sm:h-80 sm:w-80 md:h-96 md:w-96 lg:h-[28rem] lg:w-[28rem]"
        />
      </div>
      <div className="carousel-item">
        <img
          src="https://images.pexels.com/photos/6969017/pexels-photo-6969017.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt="Offer"
          className="h-72 w-72 object-cover sm:h-80 sm:w-80 md:h-96 md:w-96 lg:h-[28rem] lg:w-[28rem]"
        />
      </div>
      <div className="carousel-item">
        <img
          src="https://images.pexels.com/photos/2461010/pexels-photo-2461010.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt="Offer"
          className="h-72 w-72 object-cover sm:h-80 sm:w-80 md:h-96 md:w-96 lg:h-[28rem] lg:w-[28rem]"
        />
      </div>
      <div className="carousel-item">
        <img
          src="https://images.pexels.com/photos/6309287/pexels-photo-6309287.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt="Offer"
          className="h-72 w-72 object-cover sm:h-80 sm:w-80 md:h-96 md:w-96 lg:h-[28rem] lg:w-[28rem]"
        />
      </div>
      <div className="carousel-item">
        <img
          src="https://images.pexels.com/photos/4605354/pexels-photo-4605354.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt="Offer"
          className="h-72 w-72 object-cover sm:h-80 sm:w-80 md:h-96 md:w-96 lg:h-[28rem] lg:w-[28rem]"
        />
      </div>
    </div>
  );
}

export default OfferCarasol;
