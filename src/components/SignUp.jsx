import React, { useState } from 'react';
import img from '../assets/offer_1.jpg';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import CSS for react-toastify

function Signup() {
  const [signupInfo, setSignupInfo] = useState({
    name: '',
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignupInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSuccess = (message) => {
    toast.success(message, {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: 'colored',
    });
  };

  const handleError = (message) => {
    toast.error(message, {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: 'colored',
    });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    const { name, email, password } = signupInfo;

    if (!name || !email || !password) {
      return handleError('Name, email, and password are required');
    }

    try {
      const url = `http://localhost:3042/auth/signup`;
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(signupInfo),
      });
      const result = await response.json();

      const { success, message, error } = result;

      if (success) {
        handleSuccess(message || 'Signup successful!');
        setTimeout(() => {
          navigate('/login');
        }, 1000);
      } else if (error) {
        const details = error?.details?.[0]?.message || 'Signup failed';
        handleError(details);
      } else {
        handleError(message || 'An unknown error occurred');
      }
    } catch (err) {
      handleError(err.message || 'An error occurred while signing up');
    }
  };

  return (
    <div className="hero bg-base-200 min-h-screen flex justify-center items-center">
      <div className="card w-full max-w-[1100px] bg-base-100 shadow-2xl flex flex-col lg:flex-row my-12">
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
          <h1 className="text-4xl font-bold text-black mb-4">Sign Up</h1>
          <p className="text-lg text-gray-700 mb-6">
            Join our community and start your fashion journey with Mammoth Streetwear.
          </p>

          <form onSubmit={handleSignup}>
            {/* Name input */}
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                name="name"
                onChange={handleChange}
                type="text"
                placeholder="Enter Your Name"
                className="input input-bordered border-black"
                autoFocus
                required
                value={signupInfo.name}
              />
            </div>

            {/* Email input */}
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                name="email"
                onChange={handleChange}
                type="email"
                placeholder="example@example.com"
                className="input input-bordered border-black"
                required
                value={signupInfo.email}
              />
            </div>

            {/* Password input */}
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                name="password"
                onChange={handleChange}
                type="password"
                placeholder="Password"
                className="input input-bordered border-black"
                required
                value={signupInfo.password}
              />
            </div>

            {/* Sign-Up button */}
            <div className="form-control mt-6">
              <button className="btn btn-black w-full">Sign Up</button>
            </div>

            {/* "Already have an account? Login" */}
            <p className="text-sm text-gray-600 text-center mt-4">
              Already have an account?{' '}
              <Link to="/login" className="text-black font-semibold">
                Login
              </Link>
            </p>

            {/* Divider with "or" */}
            <div className="divider mt-6">or</div>

            <div className="flex flex-col lg:flex-row lg:space-x-6 lg:justify-center space-y-4 lg:space-y-0 mb-6">
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 w-full justify-center">
                <button className="btn btn-outline border-black w-full sm:w-auto px-6 py-2 sm:py-1.5 lg:py-2 text-base sm:text-sm lg:text-base flex items-center justify-center">
                  Sign Up with Google
                </button>
                <button className="btn btn-outline border-black w-full sm:w-auto px-6 py-2 sm:py-1.5 lg:py-2 text-base sm:text-sm lg:text-base flex items-center justify-center">
                  Sign Up with Facebook
                </button>
              </div>
            </div>

            <p className="text-sm text-gray-600 text-center">
              By creating an account, you agree with{' '}
              <a href="#" className="text-black font-semibold">
                Mammoth Streetwear®’s Terms and Conditions
              </a>{' '}
              and{' '}
              <a href="#" className="text-black font-semibold">
                Privacy Policy
              </a>
              .
            </p>
          </form>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
}

export default Signup;
