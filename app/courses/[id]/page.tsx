import { db } from '@/db/db'
import { Card ,CardTitle ,CardContent, CardDescription} from '@/components/ui/card'
import MaxwidthWrapper from '@/components/Max-width-Wrapper'



import { buttonVariants } from '@/components/ui/button'


import { notFound } from 'next/navigation'
import React from 'react'

interface PageProps {
  params: Promise<{id: string}>
  }
  //changes




const  Dynamic:React.FC<PageProps> = async ({params}:PageProps)=>  {


  const {id}= await params
  

 
  const data =  await db.adminPannnel.findFirst({
    where:{id:parseInt(id)}

    
  })
  if (!data) {
    return notFound();
  }
 
 
 
  
  


  return (
    <>
    <div>

    <MaxwidthWrapper className='p-2 flex flex-col relative'>
     
      

     <Card className='p-2 content-center h-full w-full  '>

      <div className='w-full h-full flex justify-center items-center p-2  '>

      <div className='backdrop-filter backdrop-blur-lg w-fit p-3h-full  bg-white/5 rounded-lg select-none  border-b border-zinc-100/10 '>

<img className='h-[35rem]  w-full  object-contain rounded-lg  select-none ' src={data?.Image} alt={`loading of ${data?.Tital}...`} />      
      </div>
      </div>
      <div className='flex flex-col p-5 '>


      <CardTitle className='text-5xl font-semibold flex gap-2  text-pretty text-blue-500 shadow-inner pb-5 pl-3    '>{`Tital:${data?.Tital}`}</CardTitle>
      <CardContent className='pt-24 flex flex-col ' >
        <div className='bg-blue-800 w-fit font-semibold p-2 text-2xl rounded-md select-none '>key Points</div>
        <ul>

          <li className='text-pretty text-2xl select-none pb-10 '>{ `key points of the course${data?.About}`}</li>
        </ul>
        
      </CardContent>
        <span className='bg-blue-800 rounded-sm w-fit text-2xl p-2 select-none   '>Decriptions</span>
      <CardDescription className='flex text-pretty text-2xl select-none'>
        
        {`${data?.Description}`}</CardDescription>
      </div>
      <div className='pt-10 pb-24 select-none flex justify-center items-center'>


      <a  className={buttonVariants({className:'w-[45%] h-10   font-bold text-3xl text-white cursor-grabbing '})} href= {data?.Link as string}>Here The Link</a>
      </div>

     </Card>
     


    </MaxwidthWrapper>

    </div>
    </>
    
  )
}  





export default Dynamic