import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  let[counter, setCounter] = useState(15)

  const addValue = () => {
    setCounter(prevCounter => prevCounter+1)
    setCounter(prevCounter => prevCounter+1)
    
  }

  const removeValue = () => {
    setCounter(counter -1)
    
  }

  return (
    <>
      <div>
        <h1>counter : {counter} </h1>
        <button onClick={addValue}>add value</button>
        <br />
        <button onClick={removeValue}>remove value</button>

      </div>
    </>
  )
}

export default App
