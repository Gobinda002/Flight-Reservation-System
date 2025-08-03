import React from 'react'
import Plane from '../assets/plane.png'
import Logo from '../assets/logo.png'

function HeroSection() {
  return (
    <section className="h-screen bg-gradient-to-b from-yellow-400 to-blue-700 text-center text-black relative overflow-hidden">


        

        {/* Home Section */}

        <h1 className="text-4xl md:text-7xl mt-16 font-black">FLY IN STYLE <br />ARRIVE IN COMFORT</h1>
        
        <div className="absolute right-50 top-[55%] w-[300px] text-right">
          <p className="text-lg  mb-3">
            Discover Exclusive Deals On Premium And First-Class Flights For Your Ultimate Travel Experience.
          </p>
          <button className="bg-blue-600 text-white px-5 py-2 rounded-lg font-bold hover:bg-blue-700 transition">
            Start Your Journey
          </button>
        </div>

        <img src={Plane} alt="plane" className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2" />
        <p className='absolute bottom-10 w-full text-sm'>Scroll </p>
    </section>
  )
}

export default HeroSection
