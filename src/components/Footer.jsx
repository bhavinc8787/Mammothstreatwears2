import React from 'react';
import logo from '../assets/Bhavin-01.png';
import { FaTwitter, FaYoutube, FaFacebookF, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
      {/* Main Footer Section */}
      <div className="footer bg-white text-black p-10">
        {/* Company Info Section */}
        <div>
          <img src={logo} alt="Company Logo" className="h-16 w-auto mb-4" />
          <p className="text-sm">Email: mammothplus21@gmail.com</p>
          <p className="text-sm">Contact: +91 72767 65568</p>
          <p className="text-sm">Address: Office No-102,Kalpana Tarang Apt,Opp,Ranka<br/> Jewellers,Karve Road,Erandwane,Pune-411004
</p>
        </div>

        {/* Information Section */}
        <nav>
          <h6 className="footer-title font-bold text-lg mb-2">Information</h6>
          <a className="link link-hover text-gray-700 hover:text-black">About Us</a>
          <a className="link link-hover text-gray-700 hover:text-black">Our Blog</a>
          <a className="link link-hover text-gray-700 hover:text-black">Start a Return</a>
          <a className="link link-hover text-gray-700 hover:text-black">Contact Us</a>
          <a className="link link-hover text-gray-700 hover:text-black">Shopping</a>
        </nav>

        {/* Services Section */}
        <nav>
          <h6 className="footer-title font-bold text-lg mb-2">Services</h6>
          <a className="link link-hover text-gray-700 hover:text-black">Printing Services</a>
          <a className="link link-hover text-gray-700 hover:text-black">Digital Scanning</a>
          <a className="link link-hover text-gray-700 hover:text-black">Design Services</a>
          <a className="link link-hover text-gray-700 hover:text-black">Copying Services</a>
          <a className="link link-hover text-gray-700 hover:text-black">Print on Demand</a>
        </nav>

        {/* Useful Links Section */}
        <nav>
          <h6 className="footer-title font-bold text-lg mb-2">Useful Links</h6>
          <a className="link link-hover text-gray-700 hover:text-black">My Account</a>
          <a className="link link-hover text-gray-700 hover:text-black">Print Provider</a>
          <a className="link link-hover text-gray-700 hover:text-black">Become a Partner</a>
          <a className="link link-hover text-gray-700 hover:text-black">Custom Products</a>
          <a className="link link-hover text-gray-700 hover:text-black">Make Your Own Shirt</a>
        </nav>

        {/* Newsletter Section */}
        <form>
          <h6 className="footer-title font-bold text-lg mb-2">Newsletter</h6>
          <fieldset className="form-control w-80">
            <label className="label">
              <span className="label-text text-gray-700">Enter your email address</span>
            </label>
            <div className="join">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered join-item"
              />
              <button className="btn bg-black btn-primary join-item">Subscribe</button>
            </div>
          </fieldset>
        </form>
      </div>

      {/* Bottom Footer Section */}
      <div className="bg-black text-white py-4">
        <div className="flex flex-wrap justify-between items-center">
          {/* Copyright */}
          <p className="text-sm">
            © {new Date().getFullYear()} Mammoth Streetwear Ltd. All rights reserved.
          </p>

          {/* Partner Logos */}
          <div className="flex space-x-4">
            <img src="/partner1.png" alt="Partner 1" className="h-8" />
            <img src="/partner2.png" alt="Partner 2" className="h-8" />
            <img src="/partner3.png" alt="Partner 3" className="h-8" />
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-4">
            {/* Twitter Icon */}
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="link text-gray-400 hover:text-blue-500"
            >
              <FaTwitter className="w-6 h-6" />
            </a>

            {/* YouTube Icon */}
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="link text-gray-400 hover:text-red-600"
            >
              <FaYoutube className="w-6 h-6" />
            </a>

            {/* Facebook Icon */}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="link text-gray-400 hover:text-blue-700"
            >
              <FaFacebookF className="w-6 h-6" />
            </a>

            {/* Instagram Icon */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="link text-gray-400 hover:text-pink-500"
            >
              <FaInstagram className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
