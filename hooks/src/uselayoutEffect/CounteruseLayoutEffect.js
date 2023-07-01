import React, {   useLayoutEffect, useState } from 'react'

function CounteruseLayoutEffect() {
    const [count,setCount]=useState(0);
    useLayoutEffect(()=>{
        console.log('uselayouteffect',count);
    },[count])
  return (
    <div className='container mt-5'>
      <h3 className='text text-primary'>useLayOutEffect</h3>
      <h3 className='text text-danger'>Counter: <h3 className='text text-secondary'>{count}</h3></h3>
      <button className='btn btn-dark' onClick={()=> setCount(count+1)} >Counter</button>
    </div>
  )
}

export default CounteruseLayoutEffect
