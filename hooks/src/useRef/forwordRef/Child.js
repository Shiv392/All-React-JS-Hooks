import React from 'react'
//getting forword ref from parent.js
import { forwardRef } from 'react'

function Child(props,inputRefFromParen) {
  return (
    <div className='container mt-3'>
      <input className='form-control' type='text' ref={inputRefFromParen} />
    </div>
  )
}

export default forwardRef(Child)
