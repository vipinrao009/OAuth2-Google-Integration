import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaGoogle, FaTwitter } from "react-icons/fa";

const Signup = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-400 to-blue-400">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
        {/* Title */}
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">Sign Up</h1>

        {/* Signup Form */}
        <form>
          {/* Full Name Input */}
          <div className="mb-4">
            <label className="block text-gray-600 text-sm mb-2">Full Name</label>
            <input
              type="text"
              placeholder="Type your full name"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          {/* Email Input */}
          <div className="mb-4">
            <label className="block text-gray-600 text-sm mb-2">Email</label>
            <input
              type="email"
              placeholder="Type your email"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          {/* Password Input */}
          <div className="mb-4">
            <label className="block text-gray-600 text-sm mb-2">Password</label>
            <input
              type="password"
              placeholder="Create a password"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          {/* Confirm Password Input */}
          <div className="mb-6">
            <label className="block text-gray-600 text-sm mb-2">Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm your password"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          {/* Sign Up Button */}
          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-green-400 to-blue-400 text-white font-bold rounded-lg hover:opacity-90 transition"
          >
            SIGN UP
          </button>
        </form>

        {/* Social Signup */}
        <div className="text-center mt-6">
          <p className="text-sm text-gray-500">Or Sign Up Using</p>
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

        {/* Login Link */}
        <div className="text-center mt-8">
          <p className="text-gray-500">
            Already have an account?
            <Link
              to="/login"
              className="text-green-500 font-semibold hover:underline ml-1"
            >
              Log In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;