import React, { useState } from 'react'
function UseState() {
    const [count,setCount]=useState(0)
    const clickCounter=(e)=>{
        e.preventDefault();
        setCount(prevCount=> prevCount+1);
    }
    const reduceCounter=(e)=>{
        e.preventDefault();
        setCount(prevCount=> prevCount-1);
    }
    const reset=e=>{
        e.preventDefault();
        setCount(0);
    }
  return (
    <div className='container mt-5'>
        <h3 className='text text-primary'>UseState</h3>
      <h1 className='text text-danger'>This is counter : {count}</h1>
      <button className='btn btn-dark btn-lg m-3' onClick={clickCounter}>+</button>
      <button className='btn btn-danger btn-lg m-3' onClick={reduceCounter}>-</button>
      <button className='btn btn-primary btn-lg m-3' onClick={reset}>Reset</button>
    </div>
  )
}

export default UseState
