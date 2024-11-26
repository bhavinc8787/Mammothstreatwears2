import React from 'react';
import img from '../assets/offer_1.jpg'
function Login() {
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

        {/* Right side login form */}
        <div className="w-full lg:w-1/2 p-6 lg:p-8">
          {/* Header section */}
          <h1 className="text-4xl font-bold text-black mb-4">Login</h1>
          <p className="text-lg text-gray-700 mb-6">
            Discover where fashion and trendsetting collide with our latest collection of stylish streetwear.
          </p>

          {/* Login form */}
          <form>
            {/* Email or Phone input */}
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text">Email or Phone</span>
              </label>
              <input
                type="text"
                placeholder="email or phone"
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
              <label className="label">
                <a href="#" className="label-text-alt link link-hover text-gray-600">
                  Forgot password?
                </a>
              </label>
            </div>

            {/* Login button */}
            <div className="form-control mt-6">
              <button className="btn btn-black w-full">Login</button>
            </div>

            {/* Divider with "or" */}
            <div className="divider mt-6">or</div>

            {/* Google and Facebook login buttons */}
            <div className="flex flex-col lg:flex-row lg:space-x-6 lg:justify-center space-y-4 mb-6">
              {/* Wrapper to center the buttons */}
              <div className="flex space-x-6 w-full justify-center">
                <button className="btn btn-outline border-black w-full lg:w-auto h-[40px] flex items-center justify-center">
                  Login with Google
                </button>
                <button className="btn btn-outline border-black w-full lg:w-auto h-[40px] flex items-center justify-center">
                  Login with Facebook
                </button>
              </div>
            </div>

            {/* Terms and conditions footer */}
            <p className="text-sm text-gray-600 text-center">
              By creating an account or logging in, you agree with{' '}
              <a href="#" className="text-black font-semibold">Mammoth Streetwear®’s Terms and Conditions</a> and{' '}
              <a href="#" className="text-black font-semibold">Privacy Policy</a>.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
