import React from "react";

export default function Navbar() {
  return (
    <header className="flex items-center justify-between max-w-7xl mx-auto py-4 px-6 bg-transparent">
      <div className="flex items-center space-x-4">
        <div className="text-white font-semibold text-xl">Fly High</div>
        <nav className="hidden md:flex gap-6 text-sm font-medium text-black/80">
          <a href="#" className="hover:underline text-white">Home</a>
          <a href="#" className="hover:underline text-white">About</a>
          <a href="#" className="hover:underline text-white">Offers</a>
          <a href="#" className="hover:underline text-white">Tickets</a>
          <a href="#" className="hover:underline text-white">Customer Supports</a>
        </nav>
      </div>
      <div className="flex items-center gap-4">
        <button className="text-sm px-4 py-2 border border-white rounded-md text-white hover:bg-white/10">
          Login/Signup
        </button>
      </div>
    </header>
  );
}
