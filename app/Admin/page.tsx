

import MaxwidthWrapper from "@/components/Max-width-Wrapper";
import { buttonVariants } from "@/components/ui/button";
import { db} from "@/db/db";
import { redirect } from "next/navigation";

const Admin = async () => {


  async function FormData (formData:FormData){
    "use server"
    const Image = formData.get('image') as string;

    const Tital = formData.get('tital') as string;
    const About = formData.get('about')   as string;
    const Description = formData.get('description') as string;
    const Link = formData.get('link') as string;

    const AdminData = await db.adminPannnel.create({
      data:{Image,Tital,About,Description,Link}
    })
    
      
      console.log(` here the datas ${AdminData} `)
      redirect('/dashboard')
    }
    
    
    




  return (
    <form action={FormData}>
      <MaxwidthWrapper className="flex justify-center items-center h-full relative pb-[16rem] w-full">
        <div className=" flex flex-col gap-5 items-center align-middle pt-5 ">
          <div><h1 className="text-red-500">Warning for  add data <span className="text-white bg-red-600 rounded-sm p-2 ">
            carefully
            </span>
             </h1></div>


{/**images */}
         <div className="flex gap-4  ">


            <label
              className="text-3xl font-semibold text-white"
              htmlFor="input"
              >
              {" "}
              Image:{" "}
            </label>
            <input
              className="border border-zinc-100/20  h-10 w-[30vw] text-black rounded-md "
              type="text"
              name="image"
              />
              </div>

              {/**tital */}
         <div className="flex gap-4  ">


            <label
              className="text-3xl font-semibold text-white"
              htmlFor="input"
              >
              {" "}
              Tital:{" "}
            </label>
            <input
              className="border border-zinc-100/20  h-10 w-[30vw] text-black rounded-md "
              type="text"
              name="tital"
              />
              </div>






            {/**about */}
            <div className="flex gap-4">


            <label
              className="text-3xl font-semibold text-white"
              htmlFor="input"
              >
              {" "}
              about:{" "}
            </label>
            <input
              className="border border-zinc-100/20  h-10 w-[30vw] text-black rounded-md "
              type="text"
              name="about"
              />
              </div>


              {/**descriptions */}

              <div className="flex gap-4">

            <label
              className="text-3xl font-semibold text-white"
              htmlFor="input"
              >
              {" "}
              moreInfo:{" "}
            </label>
            <input
              className="border border-zinc-100/20  h-10 w-[30vw] text-black rounded-md "
              type="text"
              name="description"
              />
              </div>
          

{/**Link */}
<div className="flex gap-4">

         
            <label
              className="text-3xl font-semibold text-white"
              htmlFor="input"
              >
              {" "}
              Link:{" "}
            </label>
            <input
              className="border border-zinc-100/20  h-10 w-[30vw] text-black rounded-md "
              type="text"
              name="link"
              />
              </div>


              
             




          <div>

              <button className={buttonVariants({ size:'lg', className:'text-2xl font-bold text-white'})} type="submit" > submit</button>
          </div>
              </div>

          




       
      </MaxwidthWrapper>
    </form>
  );
};

export default Admin;
