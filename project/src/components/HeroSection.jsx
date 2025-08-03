import React from 'react'
import Plane from '../assets/plane.png'
import Logo from '../assets/logo.png'
import Navbar from './navbar';


const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-400 via-orange-300 to-sky-400 relative overflow-hidden">
      <Navbar />

      <div className="pt-24 flex flex-col items-center text-center px-4">
        <h1 className="text-5xl md:text-6xl font-bold font-mono">FLY IN STYLE</h1>
        <h2 className="text-5xl md:text-6xl font-bold font-mono mb-6">ARRIVE IN COMFORT</h2>

        <p className="max-w-lg text-sm font-semibold font-mono mb-4">
          Discover Exclusive Deals On Premium And First-Class Flights For Your Ultimate Travel Experience.
        </p>

        <button className="bg-blue-500 text-white px-6 py-2 rounded-full font-semibold font-mono hover:bg-blue-600 transition">
          Start Your Journey
        </button>

        <p className="mt-6 text-xs font-mono text-white">Scroll</p>

        <img src={Plane} alt="Airplane" className="w-72 md:w-96 mt-8" />
      </div>
    </div>
  );
};

export default LandingPage;
