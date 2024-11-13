import React from 'react';
import Banner2 from './Banner2';
import Footer from './Footer';
import CategoryGrid from './CategoryGrid';
import OfferCarasol from './OfferCarasol'
import Collection from './Collection';
import Shirts from './Shirts';
const Home = () => {
  return (
    <div className=" ">
      <Banner2 />
      <h1 className="text-l lg:text-xl font-bold mb-6 text-center">
        <span className="rounded-lg px-4 py-2 inline-block mt-8">
          "Step Into Mammoth Streetwear – Where Style Meets Trendsetting Fashion"
        </span>
      </h1>
      <OfferCarasol/>
      <h1 className="text-l lg:text-xl font-bold mb-6 text-center">
        <span className="rounded-lg px-4 py-2 inline-block mt-8">
        "Discover Mammoth's Exclusive Collection"
        </span>
      </h1>
      <Collection/>
            {/* <CategoryGrid /> */}
       {/* Use Shirts Component */}
       <Shirts />      
    </div>
  );
};

export default Home;
