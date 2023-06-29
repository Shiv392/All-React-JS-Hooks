import React, { useMemo, useState } from 'react'

function Counter_without_useMemo() {
    const [count,setCount]=useState(0);
    const [item,setItem]=useState(10);

   //function that will return multiply of count
   function multiCount(){
    console.log('this is multicount',count);
    return count*5;
   }

    const clickCount=()=>{
        setCount(prevcount=> prevcount+1);
    }
    const clickItem=()=>
    setItem(previtem=> previtem*10);
  return (
    <div className='container mt-5'>
      <h3 className='text text-primary'>useMemo</h3>
      
        <h3 className='text text-danger'>Without useMemo Hook</h3>
      <h3 className='text text-dark'>Count:{count}</h3>
      <h3 className='text text-success'>function Count: {multiCount()}</h3>
      <h3 className='text text-danger'>Item:{item}</h3>
      <button onClick={clickCount} className='btn btn-primary'>without use memo</button>
      <button className='btn btn-secondary' onClick={clickItem}>Click item</button>
     
    </div>
  )
}

export default Counter_without_useMemo
