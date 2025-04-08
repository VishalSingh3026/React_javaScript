import { useState } from 'react'
import { useCallback,useEffect,useRef } from 'react'


function App() {
  const [length,setLength]=useState(8)
  const [numbAllowed,setnumbAllowed]=useState(false)
  const [charAllowed,setcharAllowed]=useState(false)

  const [Password,setpassword]=useState("")

  const passwordRef=useRef(null)

  const passwordGenerator = useCallback(()=>{
    let pass=""
    let str ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numbAllowed){
      str+="0123456789"
    }
    if (charAllowed) str+="!@#$%^&*_+[]{}~`"
    for(let i=1;i<=length;i++){
      let char =Math.floor(Math.random() * str.length) 
      pass += str.charAt(char)
    }
    setpassword(pass)

  },[length,numbAllowed,charAllowed,setpassword])

  const copyPasswordToClipboard = useCallback(()=>{
    window.navigator.clipboard.writeText(Password)
  },[Password])

  useEffect(() => {
    passwordGenerator()
  },[length,numbAllowed,charAllowed,passwordGenerator])



  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py=3 my-10 text-center text-orange-500 bg-gray-700'>
    <h1 className='text-white text-center'>Password generator</h1>

      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input 
         type="text" 
         value={Password}
         className='outline-none w-full py-1 px-3 text-black bg-white'
         placeholder='password'
         readOnly
         ref={passwordRef}
      
        />
       <button 
       onClick={copyPasswordToClipboard}
       className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0
       '>copy</button>

      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input 
          type="range"
          min={6}
          max={100}
          value={length}
          className='cursor-pointer'
          onChange={(e) =>{setLength(e.target.value)}}
           />
           <label>Length:{length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input
          type='checkbox'
          defaultChecked={numbAllowed}
          id='numberInput'
          onChange={() => {
            setnumbAllowed((prev)=>!prev);
          }}
          />
           <label htmlFor="numberInput">Number</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input
          type='checkbox'
          defaultChecked={charAllowed}
          id='characterInput'
          onChange={() => {
            setcharAllowed((prev)=>!prev);
          }}
          />
          <label htmlFor="characterInput">Characters</label>
        </div>
      </div>


    </div>

    </>
  )
}

export default App
