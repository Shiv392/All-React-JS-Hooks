import React from 'react'
import CompE from './CompE'
import { userContext,channelContext } from './ParentContext'

function CompF() {
  return (
    <>
    <h3 className='text text-dark'>Component F
    {
        <userContext.Consumer>
        {
          user=>{
             return (
                <channelContext.Consumer>
                    {
                        channel => {
    return <h3 className='text text-dark'>userContext:{user} channelContext: {channel}</h3>
                            
                        }
                    }
                    </channelContext.Consumer>
                )
         }
        }
     </userContext.Consumer>
    }
    </h3>
    
    </>
  )
}

export default CompF
