import React from 'react'

const Footer = () => {
  return (
    <>
    <div className='flex flex-row-reverse md:flex-col items-start justify-start bg-purple-950 text-slate-50'>
        <div className='w-1/2 md:w-[80%] m-8'>
            <h1 className='uppercase font-bold text-xl'>Social</h1>
            
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