import React, { useCallback, useMemo, useState } from 'react'

function Counter_useCallBack() {
  const [count,setCount]=useState(0);
  const [item,setItem]=useState(10);
 const  multicount=useMemo(()=>{
  console.log('this is function');
  return count*5;
 },[count])
  return (
    <div className='container mt-5'>
      <h3 className='text text-primary'>useCallBack</h3>
     <h3 className='text text-danger'>Count: {count}</h3>
     <h3 className='text text-secondary'>multiCount: {multicount}</h3>
     <h3 className='text text-success'>Item: {item}</h3>
     <button className='btn btn-primary' onClick={()=> setCount(count+1)}>Click Counter</button>
     <button className='btn btn-dark' onClick={()=> setItem(item+1)}>Click Item</button>

    </div>
  )
}

export default Counter_useCallBack
