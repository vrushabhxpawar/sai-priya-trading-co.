import React from 'react'
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import { Link } from 'react-router-dom';

function PageNotFound() {
  return (
    <div>
      <Navbar />
       <div className="flex flex-col items-center justify-center h-fit bg-gray-50 px-4 py-30">

      {/* Text */}
      <h1 className="text-6xl font-extrabold text-gray-800">404</h1>
      <p className="text-xl text-gray-600 mt-2">Oops! Page not found.</p>
      <p className="text-gray-500">The page you are looking for doesn’t exist or has been moved.</p>

      {/* Button */}
      <Link
        to="/"
        className="mt-6 px-6 py-3 bg-blue-600 text-white text-lg rounded-xl shadow-md hover:bg-blue-700 transition-all"
      >
        Go Home
      </Link>
    </div>
      <Footer />
    </div>
  )
}

export default PageNotFound
