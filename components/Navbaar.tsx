
 
 import React from 'react'
 import {RegisterLink,LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
 import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server"
import { buttonVariants } from './ui/button';
import Link from 'next/link';
import { IoExitOutline } from "react-icons/io5";
import { FaHome } from "react-icons/fa";




 const Navbaar = async() => {

  const {getUser} =  getKindeServerSession();
  const setUser =  await getUser() 
  const admin= setUser?.email === process.env.useradmin
 

  

   return (
    <div className=' sticky z-50 top-0 inset-x-0 h-20 '>

     <div className='w-full h-14 sticky backdrop-blur-xl flex   justify-between items-center pt-3 border-b  align-middle border-white/30 top-0 '>


       <div className=' select-none h-fit  '>

        <Link href='/' className='font-semibold flex    '>Corse <span className='text-blue-500'>Man</span></Link>
       </div>

        <div className='flex  gap-5   relative w-[15%] justify-end    '>


      <div> <Link href='/' className={buttonVariants({ className:'text-white font-semibold duration-700' ,variant:'ghost',size:'lg' })}> Courses</Link>
        </div>
      <div className=' flex w-full'>{setUser ? (
        <div className='flex gap-2  '>

        
        {admin  ? <div>
          <Link href='/Admin' className={buttonVariants({ variant:"link" ,className:'duration-700'})}>
          Admin
          </Link>
         

        </div>: null }
        <div className='px-4 '>

        <LogoutLink className={buttonVariants({size:'sm' ,className:'bg-red-500 hover:bg-red-700  '})}>  <IoExitOutline className='text-white'/>  </LogoutLink>
        </div>

        <div>
        </div>


      </div>
    ):(<div>

<div className='flex '>

<RegisterLink className={buttonVariants({})}> Register <FaHome className='text-white'/>  </RegisterLink>
        

      </div>

    </div>)} </div></div>
     </div>
          </div>
   )
 }
 
 export default Navbaar