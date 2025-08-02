import { useState } from 'react'
import './App.css'

function App() {

let [counter,setCounter] = useState(5)

  
  const addValue = () =>{

    if(counter < 10){
       setCounter(counter +1)
    }else{
       console.log("counter exceed 20")
    }
  }

  const removeValue = () =>{
    if(counter > -2){
      setCounter (counter - 1)
    }else{
     console.log("counter exceed -2")
    }
  }

  return (
    <>
    <h1>counter value : {counter}</h1>

    <button 
    onClick={addValue}>Add Value</button>
    <br />

    <button
    onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
