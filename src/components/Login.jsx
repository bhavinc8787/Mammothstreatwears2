import React, { useState } from 'react';
import img from '../assets/offer_1.jpg';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {
  const [loginInfo, setLoginInfo] = useState({
    email: '',
    password: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginInfo((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleError = (message) => {
    toast.error(message, {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined
    });
  };

  const handleSuccess = (message) => {
    toast.success(message, {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const { email, password } = loginInfo;
    if (!email || !password) {
      return handleError('Email and password are required');
    }

    try {
      const url = `http://localhost:3042/auth/login`;
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(loginInfo)
      });
      const result = await response.json();
      const { success, message, jwtToken, name, error } = result;

      if (success) {
        handleSuccess(message);
        localStorage.setItem('token', jwtToken);
        localStorage.setItem('loggedInUser', name);
        setTimeout(() => {
          navigate('/');
        }, 1000);
      } else if (error) {
        const details = error?.details[0]?.message || 'Login failed';
        handleError(details);
      } else {
        handleError(message);
      }
    } catch (err) {
      handleError('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="hero bg-base-200 min-h-screen flex justify-center items-center">
      <div className="card w-full max-w-[1100px] bg-base-100 shadow-2xl flex flex-col lg:flex-row my-12">
        {/* Left side image */}
        <div className="w-full lg:w-1/2">
          <img src={img} alt="Streetwear" className="object-cover w-full h-full" />
        </div>

        {/* Right side login form */}
        <div className="w-full lg:w-1/2 p-6 lg:p-8">
          <h1 className="text-4xl font-bold text-black mb-4">Login</h1>
          <p className="text-lg text-gray-700 mb-6">
            Discover where fashion and trendsetting collide with our latest collection of stylish streetwear.
          </p>

          <form onSubmit={handleLogin}>
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text">Email or Phone</span>
              </label>
              <input
                name="email"
                onChange={handleChange}
                type="text"
                placeholder="Enter your email..."
                className="input input-bordered border-black"
                required
                value={loginInfo.email}
              />
            </div>

            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                name="password"
                onChange={handleChange}
                type="password"
                placeholder="Enter your password..."
                className="input input-bordered border-black"
                required
                value={loginInfo.password}
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover text-gray-600">
                  Forgot password?
                </a>
              </label>
            </div>

            <div className="form-control mt-6">
              <button className="btn btn-black w-full">Login</button>
            </div>

            <p className="text-sm text-gray-600 text-center mt-4">
              No account Yet?{' '}
              <Link to="/signup" className="text-black font-semibold">
                Sign Up Now!
              </Link>
            </p>

            <div className="divider mt-6">or</div>

            <div className="flex flex-col lg:flex-row lg:space-x-6 lg:justify-center space-y-4 lg:space-y-0 mb-6">
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 w-full justify-center">
                <button className="btn btn-outline border-black w-full sm:w-auto px-6 py-2 text-base flex items-center justify-center">
                  Sign Up with Google
                </button>
                <button className="btn btn-outline border-black w-full sm:w-auto px-6 py-2 text-base flex items-center justify-center">
                  Sign Up with Facebook
                </button>
              </div>
            </div>

            <p className="text-sm text-gray-600 text-center">
              By creating an account or logging in, you agree with{' '}
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

export default Login;
