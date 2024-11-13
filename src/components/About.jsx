import React from 'react';
import { Link } from 'react-router-dom';

const About = () => (
  <div className="p-4 sm:p-8">
    <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-center">
      <span className="bg-slate-300 rounded-lg px-4 py-2 inline-block">
        About Us
      </span>
    </h1>

    <div className="bg-base-200 py-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6 flex flex-col lg:flex-row items-center lg:items-start">
        <img
          src="https://images.pexels.com/photos/443383/pexels-photo-443383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          className="max-w-xs lg:max-w-sm rounded-lg shadow-2xl mb-6 lg:mb-0 mt-10"
          alt="Company"
        />
        <div className="text-center lg:text-left lg:ml-8">
          <h1 className="text-xl sm:text-2xl font-bold">Our Company</h1>
          <p className="mb-4 mt-2 sm:mt-8">
            Welcome to Electronics Store, your trusted partner in delivering top-notch electronic solutions and services. Since 1992, we've been committed to offering not just the latest gadgets but also comprehensive support and expertise to ensure your technology needs are fully met.
          </p>
          <p className="mb-4">
            Our journey started with a vision: to empower our customers with cutting-edge technology and exceptional service. From humble beginnings, we've evolved into a leading provider of electronic services, thanks to our expert team and the unwavering trust of our valued clients.
          </p>

          <Link className="btn btn-primary" to="/contact-us">
            Contact Us
          </Link>
        </div>
      </div>
    </div>

    <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-center mt-12">
      <span className="bg-slate-300 rounded-lg px-4 py-2 inline-block">
        Meet Our Team
      </span>
    </h1>

    <section>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
        <div className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center max-w-xs mx-auto">
          <img
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
            alt="John Doe"
            className="w-20 h-20 rounded-full mb-4"
          />
          <h3 className="text-lg font-semibold mb-2">John Doe</h3>
          <p className="text-gray-600">Founder & CEO</p>
          <p className="mt-2 text-center text-sm">
            John is the visionary behind our company. With over 15 years of experience in the electronics industry, he leads our team with passion and dedication.
          </p>
        </div>

        <div className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center max-w-xs mx-auto">
          <img
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
            alt="Jane Smith"
            className="w-20 h-20 rounded-full mb-4"
          />
          <h3 className="text-lg font-semibold mb-2">Jane Smith</h3>
          <p className="text-gray-600">Chief Technology Officer</p>
          <p className="mt-2 text-center text-sm">
            Jane is our tech guru, responsible for overseeing the development and implementation of our technology strategies. Her expertise ensures we stay ahead of the curve.
          </p>
        </div>

        <div className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center max-w-xs mx-auto">
          <img
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
            alt="Emily Johnson"
            className="w-20 h-20 rounded-full mb-4"
          />
          <h3 className="text-lg font-semibold mb-2">Emily Johnson</h3>
          <p className="text-gray-600">Head of Customer Service</p>
          <p className="mt-2 text-center text-sm">
            Emily and her team are dedicated to providing top-notch support to our customers. She ensures that every customer interaction is handled with care and professionalism.
          </p>
        </div>
      </div>
    </section>
  </div>
);

export default About;
