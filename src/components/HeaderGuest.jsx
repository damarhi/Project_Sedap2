import React from "react";
import { Link } from "react-router-dom";

export default function HeaderGuest() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow">
      <div
        id="header-container"
        className="container mx-auto flex justify-between items-center py-4 px-6"
      >
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/" className="text-xl font-bold text-blue-600">
            JobHub
          </Link>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-6 text-sm font-medium">
          <Link
            to="/"
            className="text-gray-700 hover:text-blue-600 transition duration-150"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-gray-700 hover:text-blue-600 transition duration-150"
          >
            About
          </Link>
          <Link
            to="/top-produk"
            className="text-gray-700 hover:text-blue-600 transition duration-150"
          >
            Top Produk
          </Link>
        </nav>

        {/* Sign In / Apply */}
        <div className="flex items-center space-x-4">
          <Link
            to="/apply"
            className="text-sm border-b border-gray-400 hover:text-blue-600"
          >
            Apply Now
          </Link>
          <Link
            to="/signin"
            className="bg-blue-600 text-white text-sm px-4 py-2 rounded shadow hover:bg-blue-700"
          >
            Sign in
          </Link>
        </div>
      </div>
    </header>
  );
}
