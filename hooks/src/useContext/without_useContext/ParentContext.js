import React from 'react'
import CompC from './CompC'
//create context
 export const userContext= React.createContext();
 export const channelContext=React.createContext();

function ParentContext() {
  return (
    <div className='container mt-5'>
       <h3 className='text text-primary'>Using Context API</h3>
     {/* send userContext  */}
     <userContext.Provider value={'context from parent comp'}>
     <channelContext.Provider value={'fit with shiv youtube'}>
     <CompC />
     </channelContext.Provider>
     </userContext.Provider>
    </div>
  )
}

export default ParentContext
