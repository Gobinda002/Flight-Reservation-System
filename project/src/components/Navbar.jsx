import React from 'react';
import logo from '../assets/logo.png'

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/10 backdrop-blur-md text-black font-mono text-sm px-6 py-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <span>{logo}</span>
          <span>Fly High</span>
        </div>

        {/* Links */}
        <ul className="hidden md:flex space-x-6">
          <li className="text-blue-500">Home</li>
          <li>About</li>
          <li>Offers</li>
          <li>Tickets</li>
          <li>Customer Supports</li>
        </ul>

        {/* Auth */}
        <div className="hidden md:block">Login/Signup</div>
      </div>
    </nav>
  );
};

export default Navbar;
