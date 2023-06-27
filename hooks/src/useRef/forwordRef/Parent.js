import React, { useRef } from 'react'
import Child from './Child'

function Parent() {
    const inputRef=useRef(null);
    const inputClick=()=>{
     inputRef.current.focus();
     inputRef.current.value="this is text from parent component"
    }
  return (
    <div className='container mt-5'>
      <h3 className='text text-primary'>Forword Ref</h3>
      <h3 className='text text-dark'>Parent Component</h3>
      {/* //sharing inputref to child componet by ref props */}
      <Child  ref={inputRef} />
      <button onClick={inputClick} className='btn btn-primary'>Parent Button</button>
    </div>
  )
}

export default Parent
