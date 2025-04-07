import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter , setCounter]= useState(15)

  // let counter =15

  const AddValue =() =>{

    
    setCounter(counter+1)
   

  }
  const removeValue =()=>{

    if(counter>0){
      setCounter(counter-1)
    }
    
  }

  return (
    <>
    <h1>Chai With Vishal</h1>
    <h2>Counter Value: {counter}</h2>
    <button 
    onClick={AddValue}
    >Add value</button>
    <br />
    <button
    onClick={removeValue}
    >Remove value</button>
    </>
  )
}

export default App
