import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaGoogle, FaTwitter } from "react-icons/fa";

const Login = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 to-blue-500">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
        {/* Title */}
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">Login</h1>

        {/* Login Form */}
        <form>
          {/* Username Input */}
          <div className="mb-4">
            <label className="block text-gray-600 text-sm mb-2">Username</label>
            <input
              type="text"
              placeholder="Type your username"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>

          {/* Password Input */}
          <div className="mb-4">
            <label className="block text-gray-600 text-sm mb-2">Password</label>
            <input
              type="password"
              placeholder="Type your password"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>

          {/* Forgot Password */}
          <div className="flex justify-between items-center mb-6">
            <span></span>
            <Link
              onClick={openModal}
              className="text-sm text-purple-500 hover:underline font-semibold"
            >
              Forgot password?
            </Link>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-bold rounded-lg hover:opacity-90 transition"
          >
            LOGIN
          </button>
        </form>

        {/* Social Login */}
        <div className="text-center mt-6">
          <p className="text-sm text-gray-500">Or Sign up Using</p>
          <div className="flex justify-center space-x-4 mt-4">
            <button className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">
              <FaFacebookF />
            </button>
            <button className="p-3 bg-red-500 text-white rounded-full hover:bg-red-600 transition">
              <FaGoogle />
            </button>
            <button className="p-3 bg-blue-400 text-white rounded-full hover:bg-blue-500 transition">
              <FaTwitter />
            </button>
          </div>
        </div>

        {/* Sign Up Link */}
        <div className="text-center mt-8">
          <p className="text-gray-500">
            Or Sign up Using
            <Link
              to="/register"
              className="text-purple-500 font-semibold hover:underline ml-1"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>

      {/* Modal for Forgot Password */}
      {modalOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center p-4">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full sm:w-2/3 md:w-1/2 lg:w-1/3">
            <h3 className="text-lg font-bold mb-4">Forgot Password</h3>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
            <div className="flex justify-end space-x-2">
              <button
                onClick={closeModal}
                className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition duration-300"
              >
                Cancel
              </button>
              <button className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 transition duration-300">
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;