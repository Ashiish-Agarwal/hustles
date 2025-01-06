
'use client'

 
 import React from 'react'

import { buttonVariants } from './ui/button';
import Link from 'next/link';
import { SignUpButton,UserButton,useUser} from "@clerk/nextjs"



 const Navbaar = () => {

  const {user} = useUser()  
 
  
  const setuser = user
  const admin = user?.emailAddresses=== process.env.admin
  

  


 

 




 

  

   return (
    <div className=' sticky z-50 top-0 inset-x-0 h-20 '>

     <div className='w-full h-14 sticky backdrop-blur-xl flex   justify-between items-center pt-3 border-b  align-middle border-white/30 top-0 '>


       <div className=' select-none h-fit  '>

        <Link href='/' className='font-semibold flex    '>Corse <span className='text-blue-500'>Man</span></Link>
       </div>

       {
        // side nave
       }

        <div className='flex  gap-5   relative w-[15%] justify-end    '>


      <div> <Link href='/' className={buttonVariants({ className:'text-white font-semibold duration-700' ,variant:'ghost',size:'lg' })}> Courses</Link></div>


<div className='flex h-full w-full '>


{setuser? (
  
  <>
  <div className='flex gap-4 pr-2  '>

  <div className='flex gap-4 '>


  
  </div>
  <div >






  {admin? (<div >
    
  
    <Link className={buttonVariants({variant:'link'})} href='/Admin'> Admin</Link>
  </div>):null}
  </div>
  <div className=''>
<UserButton component={buttonVariants({
  size:'lg'
})} />

  </div>
  </div>
  </>


  

 
  
   ):(
    <div className='flex h-full w-full '>

    <div className='pr-8 flex  '>

   
    
    
       <div className={buttonVariants({ size:'lg'})}>

        <SignUpButton ><span className='font-bold text-white ' >signUp</span></SignUpButton>
       </div>
     </div>
    </div>
     )}
</div>
      
      
        
       




        
        </div></div>
     </div>
          
   )
 }
 
 export default Navbaar