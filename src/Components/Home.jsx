import React from "react";
import {homeapi} from '../data/data'
import SocialLinks from './utils/SocialLinks'
import {Link} from 'react-scroll'
const Home = () => {
  const {sociallinks} = homeapi; 
  
  return (
    <>
      <div id="home" className="relative w-auto h-[96vh] bg-gradient-to-br from-gray-200 to-gray-100 ">
        <div className=" grid items-center justify-items-center h-full w-full ">
          <div className="grid items-center justify-items-center gap-16 md:gap-10">

         
          <div className="grid items-center justify-items-center mt-36 md:mt-24 ">
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
            <Link to="projects" smooth={true} offset={-80} spy={true} duration={1000}>
            <button className="button-theme text-2xl font-semibold bg-purple-600 shadow shadow-slate-800 text-slate-100 active:scale-110">
              <h1 className=" px-4 py-1 ">My Projects</h1>
            </button></Link>
          </div>
          
        </div>

        </div>
        <div className="sm:hidden grid items-center absolute top-[44vh] lg:top-[37vh] left-0 gap-3 ml-1 bg-slate-50 p-1 rounded-sm shadow-md shadow-slate-500">
             {
sociallinks.map((val, i)=>{
  return <SocialLinks icon={val.icon} link={val.link} key={i} />
})
             }
          
          </div>
       
      </div>
    </>
  );
};

export default Home;
