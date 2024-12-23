import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaGoogle} from "react-icons/fa";
import {useGoogleLogin} from "@react-oauth/google"
import {googleAuth} from "../api.js"
import logo from '../assets/google.jpg'

const Login = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate()

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const googleResponse = async(authResult)=>{
    try {
      if(authResult['code']){
        const result = await googleAuth(authResult['code'])
        const {name,email,image} = result.data.user
        const token = result.data.token
        const obj = {name,email,image,token}
        localStorage.setItem('user',JSON.stringify(obj))
        navigate('/dashboard')

      }
    } catch (error) {
        console.error('Error while requesting google code : ',error)
    }
  }

  const googleLogin = useGoogleLogin({
    onSuccess:googleResponse,
    onError:googleResponse,
    flow:'auth-code'
  })

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 to-blue-500">
      <div className="flex w-full max-w-6xl bg-white rounded-lg shadow-lg overflow-hidden">
        
        {/* Image */}
        <div className="flex items-center justify-center bg-orange-200">
        <img src={logo} alt="iet_logo" className="object-cover w-full h-full" />
        </div>

        {/* Form */}
        <div className="bg-white ml-5 p-12 rounded  w-full max-w-md">
          {/* Title */}
          <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">Login</h1>
          {/* Login Form */}
          <form>
            {/* Username Input */}
            <div className="mb-4">
              <label className="block font-semibold text-gray-600 text-sm mb-2">Username</label>
              <input
                type="text"
                placeholder="Type your username"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
            </div>

            {/* Password Input */}
            <div className="mb-4">
              <label className="block font-semibold text-gray-600 text-sm mb-2">Password</label>
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
              <button onClick={googleLogin} className="p-3 bg-red-500 text-white rounded-full hover:bg-red-600 transition">
                <FaGoogle />
              </button>
            </div>
          </div>

          {/* Sign Up Link */}
          {/* <div className="text-center mt-8">
            <p className="text-gray-500">
              Or Sign up Using
              <Link
                to="/register"
                className="text-purple-500 font-semibold hover:underline ml-1"
              >
                Sign up
              </Link>
            </p>
          </div> */}
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