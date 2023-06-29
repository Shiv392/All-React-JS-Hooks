import React from 'react'
import ChildContext from './ChildContext';

export const NameContext= React.createContext();
export const addressContext=React.createContext();

function Parent_Context_hook() {
  return (
    <div className='container mt-5'>
   <h3 className='text text-primary'>useContext hooks</h3>
      <NameContext.Provider value={'shiv soni'}>
        <addressContext.Provider value={'raipur'}>
            <ChildContext />
        </addressContext.Provider>
      </NameContext.Provider>
    </div>
 
    
 )
}

export default Parent_Context_hook
