import { useState } from 'react'
import HeroSection from './components/HeroSection'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
       <HeroSection />
      </div>
    </>
  )
}

export default App
