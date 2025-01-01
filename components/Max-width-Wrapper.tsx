import { cn } from '@/lib/utils'
import { Children, ReactNode } from 'react'

interface Maxwidthprops{
    children:ReactNode,
    className?:string
}

const MaxwidthWrapper = ({children,className}:Maxwidthprops) => {
  return (
    <div className={cn('mx-auto max-w-screen-xl container w-full h-full ' ,className)}>{children}</div>
  )
}

export default MaxwidthWrapper