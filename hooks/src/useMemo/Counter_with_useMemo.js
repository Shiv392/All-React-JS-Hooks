import React, { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

function Counter_with_useMemo() {
    const [count2,setCount2]=useState(0);
    const [item,setItem]=useState(10);
    const clickCount=()=>{
        setCount2(prevcount=> prevcount+1)
    }
    const clickItem=()=>{
        setItem(prevCount=> prevCount*10);
    }
    //using useMemo
    const multiCount=useMemo(()=>{
        console.log('using useMemo',count2);
        return count2*5;
    },[count2])
  return (
    <div className='container mt-3'>
      <h3 className='text text-dark'>using useMemo</h3>
      <h3 className='text text-danger'>Count: {count2}</h3>
      <h3 className='text text-primary'>multiCount: {multiCount}</h3>
      <h3 className='text text-success'>Item: {item}</h3>
      <button onClick={clickCount} className='btn btn-secondary'>Click Count with useMemo</button>
      <button className='btn btn-dark' onClick={clickItem}>Click Item</button>
    </div>
  )
}

export default Counter_with_useMemo
