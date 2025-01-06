import { db } from '@/db/db'
import { Card ,CardTitle ,CardContent, CardDescription} from '@/components/ui/card'
import MaxwidthWrapper from '@/components/Max-width-Wrapper'






import Loading from '@/components/loading'


import { buttonVariants } from '@/components/ui/button'


import { notFound } from 'next/navigation'
import React, { Suspense } from 'react'


interface PageProps {
  params: Promise<{id: string}>
  }
  //changes




  const  Dynamic:React.FC<PageProps> =  async ({params}:PageProps)=>  {


  const {id}= await params
  

 
  const data =  await db.adminPannnel.findFirst({
    where:{id:parseInt(id)}

    
  })
  if (!data) {
    return notFound();
  }
 
 
 
  
  


  return (
    <>
    <Suspense fallback={<Loading/>}></Suspense>
    

    <div className='flex justify-center items-center'>

    <MaxwidthWrapper className='p-2 flex flex-col relative'>
     
      

     <Card className='p-2 content-center h-full w-full  '>

      <div className='w-full h-full flex justify-center items-center p-2  '>

      <div className='backdrop-filter backdrop-blur-lg w-fit p-3h-full  bg-white/5 rounded-lg select-none  border-b border-zinc-100/10 '>

<img className='h-[35rem]  w-full  object-contain rounded-lg  select-none ' src={data?.Image} alt={`loading of ${data?.Tital}...`} />      
      </div>
      </div>
      <div className='flex flex-col p-5 '>
        <div className='flex items-center justify-center'>



      <CardTitle className='text-5xl leading-8  flex gap-2 capitalize text-pretty text-white shadow-inner pb-5 pl-3 text-center   '>{`${data?.Tital}`}</CardTitle>
      
        </div>
        <div className='flex items-center justify-center'>

      <CardDescription className='flex text-pretty font-thin leading-snug pt-10  text-sm w-[70%] select-none '>
        
         {`${data?.Description}`}
       



        

        </CardDescription>
        </div>
      </div>
      <div className='pt-10 pb-24 select-none flex justify-center items-center'>


      <a  className={buttonVariants({className:'w-[30%] h-10 btn-grad     font-bold text-3xl text-white cursor-grabbing '})} href= {data?.Link as string}>Here The Link</a>
      </div>

     </Card>
     


    </MaxwidthWrapper>

    </div>
    
    </>
    
  )
}  





export default Dynamic

