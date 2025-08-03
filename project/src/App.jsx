import { useState } from 'react'
import Navbar from './components/navbar'
import HeroSection from './components/HeroSection'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="font-sans">
      <HeroSection />
    </div>
      
  )
}

export default App
