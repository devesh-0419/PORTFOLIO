import React from 'react'
import {homeapi} from '../data/data'
import SocialLinks from './utils/SocialLinks'
const Footer = () => {
 const {sociallinks} = homeapi;
  return (
    <>
    <div className='flex flex-row-reverse md:flex-col items-start justify-start bg-purple-950 text-slate-50'>
        <div className='w-1/2 md:w-[80%] m-8'>
            <h1 className='uppercase font-bold text-xl'>Social</h1>
     
       <div className=' mt-6 flex gap-2'>
      {sociallinks.map((val,i)=>{
        return <a href={val.link} key={i} rel='noopener' target='_blank'>
          <img src={val.icon} alt="social/icon" className='w-11 h-11 flex items-center cursor-pointer md:w-10 md:h-10 sm:w-9 sm:h-9 transition-all duration-200 hover:scale-110'  />
        </a>
      })}
       </div>
            
        </div>
        <div className='w-1/2 md:w-[80%] m-8'>
            <h1 className=' font-bold text-xl'>Devesh Swarnkar</h1>
            <div className='my-4'>
                <p className=' text-xs font-medium text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum optio explicabo animi at perferendis fugit placeat cupiditate aspernatur omnis labore.
                </p>
            </div>
        </div>
   
      


    </div>
    <div  className=' bg-purple-950 text-white'>
      <div className=' text-center'> 
        <p className=' text-xs'> 
           CopyRight 
            <sup className=' font-bold text-xs'>&copy;</sup>
            All Reserved Rights 2022 <span className=' font-bold'>Devesh Swarnkar</span>
        </p>
      </div>
    </div>
    </>
  )
}

export default Footer