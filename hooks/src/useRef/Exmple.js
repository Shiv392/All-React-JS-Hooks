import React, { useEffect, useRef } from 'react'

function Exmple() {
    //declaring ref
    const inputRef= useRef(null);
    const inputRef2=useRef(null);
 
     useEffect(()=>{
        inputRef2.current.focus();
     })

     //in useRef everything is about inputRef.current...

    const focusInput=()=>{
        console.log(inputRef.current); //this will give complete input element
        inputRef.current.focus(); //this line will focus in input field
        alert(inputRef.current.value) //current.value will return value of this fieds
    }
  return (
    <div className='container mt-5'>
        <h3 className='text text-primary'>useRef</h3>
        <div className='mt-3'>
            <p className='text text-danger'>input gets focus when react app re-render</p>
        <input type='text ' ref={inputRef2} className='form-control' />
        </div>
      <div className=''>
        <p className='text text-dark'>this input get focus when we click on this button</p>
      <input type='text' className='form-control col-12' ref={inputRef} />
      <button onClick={focusInput} className='btn btn-primary'>Focus Input</button>
      </div>
    </div>
  )
}

export default Exmple
