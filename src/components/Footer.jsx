import React from 'react';
import logo from '../assets/Bhavin-01.png'
const Footer = () => {
  return (
    <footer>
      {/* Main Footer Section */}
      <div className="footer bg-base-200 text-base-content p-10">
        {/* Company Info Section */}
        <div>
          {/* <h6 className="footer-title">Mammoth Streetwear</h6> */}
          <img src={logo} alt="Company Logo" className="h-16 w-auto mb-4" />
          <p className="text-sm">Email: info@mammothstreetwear.com</p>
          <p className="text-sm">Contact: +91 9876543210</p>
          <p className="text-sm">Address: 123 Street Name, City, State, ZIP</p>
        </div>

        {/* Information Section */}
        <nav>
          <h6 className="footer-title">Information</h6>
          <a className="link link-hover">About Us</a>
          <a className="link link-hover">Our Blog</a>
          <a className="link link-hover">Start a Return</a>
          <a className="link link-hover">Contact Us</a>
          <a className="link link-hover">Shopping</a>
        </nav>

        {/* Services Section */}
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Printing Services</a>
          <a className="link link-hover">Digital Scanning</a>
          <a className="link link-hover">Design Services</a>
          <a className="link link-hover">Copying Services</a>
          <a className="link link-hover">Print on Demand</a>
        </nav>

        {/* Useful Links Section */}
        <nav>
          <h6 className="footer-title">Useful Links</h6>
          <a className="link link-hover">My Account</a>
          <a className="link link-hover">Print Provider</a>
          <a className="link link-hover">Become a Partner</a>
          <a className="link link-hover">Custom Products</a>
          <a className="link link-hover">Make Your Own Shirt</a>
        </nav>

        {/* Newsletter Section */}
        <form>
          <h6 className="footer-title">Newsletter</h6>
          <fieldset className="form-control w-80">
            <label className="label">
              <span className="label-text">Enter your email address</span>
            </label>
            <div className="join">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered join-item"
              />
              <button className="btn btn-primary join-item">Subscribe</button>
            </div>
          </fieldset>
        </form>
      </div>

      {/* Bottom Footer Section */}
      <div className="bg-black text-base-content py-4">
        <div className="flex flex-wrap justify-between items-center">
          {/* Copyright */}
          <p className="text-sm text-gray-600">
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
            <a href="#" className="link">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="fill-current">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
              </svg>
            </a>
            <a href="#" className="link">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="fill-current">
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
              </svg>
            </a>
            <a href="#" className="link">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="fill-current">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
