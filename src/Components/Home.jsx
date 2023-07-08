import React from "react";
import {homeapi} from '../data/data'
import SocialLinks from './utils/SocialLinks'
const Home = () => {
  const {sociallinks} = homeapi; 
  
  return (
    <>
      <div className="relative w-auto h-[96vh] bg-gradient-to-br from-purple-600 to-purple-100 ">
        <div className=" grid items-center justify-items-center h-full w-full ">
          <div className="grid items-center justify-items-center mt-36 ">
            <h1 className="font-bold text-7xl lg:text-6xl md:text-5xl sm:text-4xl xsm:text-2xl">
              Hey, I'm
            </h1>
            <h1 className="font-bold text-7xl lg:text-6xl md:text-5xl sm:text-4xl xsm:text-2xl">
              Devesh Swarnkar
            </h1>
          </div>
          <div className=" mx-48 md:mx-20 xsm:mx-6">
            <p className=" font-semibold xsm:text-sm text-center ">
            Extremely motivated to constantly develop my skills and grow professionally. I want to join an organization, where
I can apply my knowledge and skills for continuous improvement.
            </p>
          </div>
          <div className=" mb-8">
            <button className="button-theme text-2xl font-semibold bg-purple-600 shadow shadow-slate-800 text-slate-100 active:scale-110">
              <h1 className=" px-4 py-1 ">Projects</h1>
            </button>
          </div>
          
        </div>
      
        <div className="sm:hidden grid items-center absolute top-[44vh] lg:top-[37vh] left-0 gap-3 ml-1">
             {
sociallinks.map((val, i)=>{
  return <SocialLinks icon={val.icon} key={i} />
})
             }
          
          </div>
       
      </div>
    </>
  );
};

export default Home;
