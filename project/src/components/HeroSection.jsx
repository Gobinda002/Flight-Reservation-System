import React from "react";
import Plane from "../assets/plane.png";
import Navbar from "./navbar";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-400 via-orange-300 to-sky-400 relative overflow-hidden">
      <Navbar />

      <div className="pt-30 flex flex-col items-center text-center px-4 relative">
        <h1 className="text-6xl md:text-7xl font-bold font-mono">
          FLY IN STYLE
        </h1>
        <h2 className="text-6xl md:text-7xl font-bold font-mono mb-6">
          ARRIVE IN COMFORT
        </h2>

        {/* Discover text and button positioned to the right */}
        <div className="w-full flex justify-end pr-10 mt-32">
          <div className="text-right max-w-xs">
            <p className="text-sm font-semibold font-mono mb-4">
              Discover Exclusive Deals On Premium And First-Class Flights For
              Your Ultimate Travel Experience.
            </p>
            <button className="bg-blue-500 text-white px-6 py-2 rounded-full font-semibold font-mono hover:bg-blue-600 transition">
              Start Your Journey
            </button>
          </div>
        </div>

        <img
          src={Plane}
          alt="Airplane"
          className="absolute top-[80%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[60rem] z-10"
        />
        
      </div>
    </div>
  );
};

export default LandingPage;
