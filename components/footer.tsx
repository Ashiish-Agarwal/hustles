import { FaPeoplePulling } from "react-icons/fa6";
import MaxwidthWrapper from "./Max-width-Wrapper";
import { FaHandsHelping } from "react-icons/fa";
import { IoMdContacts } from "react-icons/io";


const footer = () => {
  return (
    <footer className="border-t border-zinc-500/30">
      {" "}
      <div className="w-full h-10 ">
        <MaxwidthWrapper className="hidden sm:flex     ">

            


            {/** first register yourSelf */}

          <div className="flex h-full w-full gap-5 border-r   pt-2 text-pretty ">
            <span>
              <FaPeoplePulling className="text-white" />
            </span>
            <p className=" ">

            register your self first  
            </p>
          </div>

            {/** contribute section */}
          <div className="flex h-full w-full gap-5 items-start pt-2 ">
            <span>
              < IoMdContacts className="text-white border border-zinc-100   rounded-full"  />
            </span>
            <p className=" ">
              if you wants some courses also check the contact page{" "}
            </p>
          </div>
          <div className="flex h-full w-full gap-5 items-start pt-2 ">
            <span>
              <FaHandsHelping className="text-white" />
            </span>
            <p className=" ">
              hey if you want to contribute some courses msg on this group our
              team contact you very fast{" "}
            </p>
          </div>
            
        </MaxwidthWrapper>
      </div>
    </footer>
  );
};

export default footer;
