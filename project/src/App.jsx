import { useState } from 'react'
import Navbar from './components/navbar'
import HeroSection from './components/HeroSection'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-yellow-500 via-blue-500 to-blue-700">
      <Navbar />
      <main className="pt-6 px-4 md:px-12">
        <HeroSection />
        <div className="mt-10">
          {/* <FlightResults /> */}
        </div>
      </main>
    </div>
    </>
  )
}

export default App
