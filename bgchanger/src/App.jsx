import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <>
      <div className="w-full h-screen flex items-end justify-center" style={{ backgroundColor: color }}>
        <div className="bg-white fixed bottom-12 shadow-xl rounded-3xl px-4 py-3 flex gap-4 flex-wrap justify-center items-center">
          <button onClick={() => setColor("red")} className="px-6 py-2 text-white font-semibold shadow-md rounded-2xl bg-red-500">Red</button>
          <button onClick={() => setColor("blue")} className="px-6 py-2 text-white font-semibold shadow-md rounded-2xl bg-blue-500">Blue</button>
          <button onClick={() => setColor("orange")} className="px-6 py-2 text-white font-semibold shadow-md rounded-2xl bg-orange-500">Orange</button>
          <button onClick={() => setColor("yellow")} className="px-6 py-2 text-white font-semibold shadow-md rounded-2xl bg-yellow-500">Yellow</button>
        </div>
      </div>

    </>
  )
}

export default App
