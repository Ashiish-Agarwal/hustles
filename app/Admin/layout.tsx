import Loading from '@/components/loading'
import { ReactNode, Suspense } from 'react'

const layout = ({children}:{children:ReactNode}) => {
  return (
    <Suspense fallback={<Loading/>}>
      
  

    
    <div className='h-full w-full '>
        
        {children}
        
        </div>
    </Suspense>
    
  )
}

export default layout