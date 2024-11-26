import React from 'react';
import img from '../assets/offer_1.jpg';

function Signup() {
  return (
    <div className="hero bg-base-200 min-h-screen flex justify-center items-center">
      <div className="card w-full max-w-[1100px] bg-base-100 shadow-2xl flex flex-col lg:flex-row my-12"> {/* Increased card width and added margin */}
        {/* Left side image */}
        <div className="w-full lg:w-1/2">
          <img
            src={img}
            alt="Streetwear"
            className="object-cover w-full h-full"
          />
        </div>

        {/* Right side sign-up form */}
        <div className="w-full lg:w-1/2 p-6 lg:p-8">
          {/* Header section */}
          <h1 className="text-4xl font-bold text-black mb-4">Sign Up</h1>
          <p className="text-lg text-gray-700 mb-6">
            Join our community and start your fashion journey with Mammoth Streetwear.
          </p>

          {/* Sign-Up form */}
          <form>
            {/* Name input */}
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Your Name"
                className="input input-bordered border-black"
                required
              />
            </div>

            {/* Email input */}
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="example@example.com"
                className="input input-bordered border-black"
                required
              />
            </div>

            {/* Phone number input */}
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text">Phone</span>
              </label>
              <input
                type="text"
                placeholder="Phone Number"
                className="input input-bordered border-black"
                required
              />
            </div>

            {/* Password input */}
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered border-black"
                required
              />
            </div>

            {/* Confirm Password input */}
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                type="password"
                placeholder="Confirm Password"
                className="input input-bordered border-black"
                required
              />
            </div>

            {/* Sign-Up button */}
            <div className="form-control mt-6">
              <button className="btn btn-black w-full">Sign Up</button>
            </div>

            {/* Divider with "or" */}
            <div className="divider mt-6">or</div>

            {/* Google and Facebook sign-up buttons */}
            <div className="flex flex-col lg:flex-row lg:space-x-6 lg:justify-center space-y-4 mb-6">
              {/* Wrapper to center the buttons */}
              <div className="flex space-x-6 w-full justify-center">
                <button className="btn btn-outline border-black w-full lg:w-auto h-[40px] flex items-center justify-center">
                  Sign Up with Google
                </button>
                <button className="btn btn-outline border-black w-full lg:w-auto h-[40px] flex items-center justify-center">
                  Sign Up with Facebook
                </button>
              </div>
            </div>

            {/* Terms and conditions footer */}
            <p className="text-sm text-gray-600 text-center">
              By creating an account, you agree with{' '}
              <a href="#" className="text-black font-semibold">Mammoth Streetwear®’s Terms and Conditions</a> and{' '}
              <a href="#" className="text-black font-semibold">Privacy Policy</a>.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
