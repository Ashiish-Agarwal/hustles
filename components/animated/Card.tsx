import {Card} from "@/components/ui/card"
import { cn } from "@/lib/utils"



import MaxwidthWrapper from "../Max-width-Wrapper"
import { db } from "@/db/db"
import Link from "next/link"
  
  const cardcompnonet = async () => {




const HomePageData = await db.adminPannnel.findMany()

const DynamicRoute = await HomePageData.map((elem)=>(
  
<div key={elem.id} className=" h-full w-full    ">


  <Link className="w-full h-full flex gap-5     " key={elem.id} href={`/courses/${elem.id}`}>
<Card className={cn('w-[20rem] h-[15rem] overflow-hidden hover:bg-zinc-400/5 p-2 ')}>


    
  

<div  >

<img className="w-full h-[95%] rounded-lg object-fill hover:scale-105  duration-500 " src={elem.Image} alt="Loading" />
</div>
 
 <div className="w-full h-[5%] flex flec-col gap-2    ">

 <h1 className="text-2xl  text-white font-bold uppercase text-pretty w-full">{elem.Tital}</h1>
 </div>
 

</Card>
  </Link>
</div>

))






    return (
      <div>



        <MaxwidthWrapper >

<div className="  w-full h-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4   ">{DynamicRoute}</div>




        </MaxwidthWrapper>


      </div>
    )
  }
  
  export default cardcompnonet



