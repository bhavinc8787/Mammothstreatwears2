import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { GiMammoth } from "react-icons/gi";
import { CiSearch } from "react-icons/ci";

const Navbar = () => {
  const cartItems = useSelector((state) => state.cart);
  const { pathname } = useLocation();
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  const isHomePage = pathname === '/';
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      {/* Top Section */}
      <div className="sticky top-0 z-10 bg-gradient-to-r from-black to-black h-12 flex justify-between items-center px-5 space-x-3">
  {/* Left side: Empty to keep space for the center */}
  <div></div>

  {/* Centered: Free Delivery message and Shop Now button */}
  <div className="flex items-center space-x-4">
    {/* Free Delivery message */}
    <div className="text-white text-xs sm:text-sm md:text-base lg:text-lg">
      Free Delivery on Min Order ₹500
    </div>

    {/* Shop Now button */}
    <Link to="/shop" className="bg-white text-black hover:bg-orange-200 px-3 py-1 text-xs sm:text-sm md:text-sm lg:text-base rounded">
      Shop Now
    </Link>
  </div>

  {/* Right side: Login and Sign Up links */}
  <div className="space-x-3 flex">
    <Link to="/login" className="bg-white text-black hover:bg-orange-200 px-2 py-1 text-xs h-7 rounded">Login</Link>
    <Link to="/signup" className="bg-white text-black hover:bg-orange-200 px-2 py-1 text-xs h-7 rounded">Sign Up</Link>
  </div>
</div>


      {/* Main Navbar */}
      <div className="navbar bg-white px-5 flex justify-between items-center shadow-md">
          <div className="flex items-center space-x-4">
            {/* Logo */}
            <a href="/" className="btn btn-ghost">
              <img  
                src="src/assets/Bhavin-01.png"
                alt="Mammoth Logo"
                className="h-12 w-auto" // Adjust height and width as needed
              />
            </a>
          </div>
       
        {/* Conditional Rendering for Search or Navigation Links */}
        <div className="flex-1 flex justify-center items-center">
          {isSearchOpen ? (
            <div className="flex items-center w-full max-w-md">
              <input
                type="text"
                placeholder="Search..."
                className="flex-grow px-4 py-2 rounded-l-full outline-none border"
              />
              <button
                className="bg-orange-500 text-white px-4 py-2 rounded-r-full"
                onClick={() => setIsSearchOpen(false)}
              >
                Search
              </button>
            </div>
          ) : (
            <div className="hidden md:flex space-x-8">
              <Link to="/" className={`text-lg ${isHomePage ? 'text-orange-600' : 'text-gray-800'} hover:text-orange-600`}>Home</Link>
              <Link to="/collection" className="text-lg text-gray-800 hover:text-orange-600">Collection</Link>
              <Link to="/customize" className="text-lg text-gray-800 hover:text-orange-600">Customize</Link>
              <Link to="/about" className="text-lg text-gray-800 hover:text-orange-600">About Us</Link>
              <Link to="/contact-us" className="text-lg text-gray-800 hover:text-orange-600">Contact Us</Link>
            </div>
          )}
        </div>

        {/* Cart Icon, Search Icon, and Mobile Menu */}
        <div className="flex items-center space-x-2">
          {/* Cart Icon */}
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
              <div className="indicator">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                {totalItems > 0 && <span className="badge badge-sm indicator-item">{totalItems}</span>}
              </div>
            </div>
            <div tabIndex={0} className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-40 sm:w-52 shadow">
              <div className="card-body p-2">
                <span className="text-sm sm:text-lg font-bold">{totalItems} Items</span>
                <span className="text-xs sm:text-info">Subtotal: ₹{subtotal}</span>
                <div className="card-actions">
                  <Link to="/cart" className="btn btn-primary btn-block text-xs sm:text-base">View cart</Link>
                </div>
              </div>
            </div>
          </div>

          {/* Search Icon */}
          <button onClick={() => setIsSearchOpen(!isSearchOpen)} className="text-gray-700">
            <CiSearch size={24} />
          </button>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="btn btn-ghost btn-circle">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
              </svg>
            </button>
            {isMenuOpen && (
              <ul className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-40 sm:w-52 p-2 shadow">
                <li><Link to="/" className={`text-black hover:text-gray-800 ${isHomePage ? 'text-orange-600' : ''}`}>Home</Link></li>
                <li><Link className="text-black hover:text-gray-800" to="/collection">Collection</Link></li>
                <li><Link className="text-black hover:text-gray-800" to="/customize">Customize</Link></li>
                <li><Link className="text-black hover:text-gray-800" to="/about">About Us</Link></li>
                <li><Link className="text-black hover:text-gray-800" to="/contact-us">Contact Us</Link></li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
