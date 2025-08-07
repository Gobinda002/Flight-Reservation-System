import React from "react";
import logo from "../assets/logo.png";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleHomeClick = () => {
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/");
    }
  };

  const handleLoginClick = () => {
    navigate("/login");  // Navigate to login page
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/10 backdrop-blur-md text-black font-mono text-sm px-6 py-4 cursor-pointer">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Fly High logo" className="h-6 w-auto" />
          <span>Fly High</span>
        </div>

        {/* Links */}
        <ul className="hidden md:flex space-x-6">
          <li onClick={handleHomeClick} className="text-blue-500 cursor-pointer">
            Home
          </li>
          <li>About</li>
          <li>Offers</li>
          <li>Tickets</li>
          <li>Customer Supports</li>
        </ul>

        {/* Auth */}
        <div
          onClick={handleLoginClick}
          className="hidden md:block cursor-pointer text-teal-600 hover:text-teal-800"
        >
          Login/Signup
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
