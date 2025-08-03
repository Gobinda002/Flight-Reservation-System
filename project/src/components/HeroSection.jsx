import React from 'react'
import Plane from '../assets/plane.png'
import Logo from '../assets/logo.png'

function HeroSection() {
  return (
    <section className="h-screen bg-gradient-to-b from-yellow-400 to-blue-700 text-center text-black relative overflow-hidden">

      {/* NavBar Section */}

        <nav className='flex justify-between p-4 text-sm'>
            <div className='flex item-centerfont-bold'>
              <img src={Logo} alt="Logo" className="w-10 h-10" />
              <h1 className='text-xl font-bold'>Fly High</h1>
            </div>
            <div className='space-x-4 text-xl'>
                <a href="">Home</a>
                <a href="">About</a>
                <a href="">Offers</a>
                <a href="">Tickets</a>
                <a href="">Customer Support</a>
            </div>
            <div className='text-xl'>Login/Signup</div>
        </nav>

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
