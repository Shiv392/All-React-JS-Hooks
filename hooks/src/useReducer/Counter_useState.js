import React, { useReducer, useState } from 'react'

function Counter_useState() {
    const [count,setCount]=useState(0)

    //useReducer:
    //intilize state
    const initState={count2 : 0};

    const reducer=(state,action)=>{
      switch(action.type){
        case 'increase':
          return {count2:state.count2+1}
          case 'decrease':
            return {count2: state.count2-1}
            default : 
            return null
      }

    }
    //declaring useReducer
    const [state,dispatch]=useReducer(reducer,initState);
    const increment=()=>{
      dispatch({type:'increase'});
    }
    const decrement=()=>{
      dispatch({type:'decrease'})
    }
  return (
   <>
    <div className='container mt-5'>
      <h3 className='text text-primary'>UseState</h3>
      <h3 className='text text-secondary'>useState count: {count}</h3>
      <button className='btn btn-primary' onClick={()=> setCount(prev=> prev+1)}>Increment</button>
      <button className='btn btn-danger' onClick={()=> setCount(prev=> prev-1)}>Decrement</button>
      <button className='btn btn-light' onClick={()=>setCount(0)}>Reset</button>
    </div>
    <div className='container mt-5'>
      <h3 className='text text-primary'>useReducer</h3>
      <p className='text text-danger'>Click counter using useReducer</p>
    <h3 className='text text-dark'>Count: {state.count2}</h3>
    <button className='btn btn-success' onClick={increment}>Increment</button>
    <button className='btn btn-dark' onClick={decrement}>Decrement</button>
    </div>

   </>
  )
}

export default Counter_useState
