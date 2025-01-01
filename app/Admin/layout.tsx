import React from 'react'
import { ReactNode } from 'react'

const layout = ({children}:{children:ReactNode}) => {
  return (
    <div className='h-full w-full '>
        
        {children}
        
        </div>
  )
}

export default layout