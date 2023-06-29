import React, { useContext } from 'react'
import { NameContext,addressContext } from './Parent_Context_hook'
function ChildContext() {
    const name= useContext(NameContext);
    const address=useContext(addressContext);
  return (
    <div>
      <h3 className='text text-danger'>this is child</h3>
      <h3 className='text text-success'>Name: {name} & Address: {address}</h3>
    </div>
  )
}

export default ChildContext
