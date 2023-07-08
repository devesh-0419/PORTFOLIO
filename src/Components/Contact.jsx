import React from 'react'
import Title from './utils/Title.jsx'
const Contact = () => {
  return (
    <>
    <div className=' bg-gradient-to-bl from-purple-100 to-purple-500 -mt-7 w-full h-[90%]'>
        <div className='flex flex-col items-center justify-center'>
        <div className='flex flex-col items-center justify-center mt-9'>
    <Title title={'Contact'} text={'Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology'}/>
        </div>

        </div>
   <div className=' grid grid-cols-1 items-center justify-items-center'>

    <div className='w-1/4 lg:w-3/4 md:w-[80%] m-10 bg-slate-50 rounded-lg'>
        <form action="" className='flex flex-col p-4'>
            <label htmlFor="name" className=' mx-4 my-2 text-sm font-semibold uppercase'>Name</label>
            <input type="text" id='name' className='bg-purple-400 mx-4 rounded-md p-1 pl-3 placeholder:text-black/30 py-2 text-xs overflow-y-hidden break-words max-w-full' placeholder='Enter Your Name'/>
            <label htmlFor="email" className=' mx-4 my-2 text-sm font-semibold uppercase'>email</label>
            <input type="text" id='email' className='bg-purple-400 mx-4 rounded-md p-1 pl-3 placeholder:text-black/30 py-2 text-xs overflow-y-hidden break-words max-w-full' placeholder='Enter Your Email'  />
            <label htmlFor="message" className=' mx-4 my-2 text-sm font-semibold uppercase'>message</label>
            <input type="text" id='message' className='bg-purple-400 mx-4 rounded-md p-1 pl-3 placeholder:text-black/30 py-2 text-xs overflow-y-hidden break-words max-w-full' placeholder='Enter Your Message' />

            <button className="rounded-md mx-4 my-6 p-2 text-sm font-semibold bg-purple-600 shadow shadow-slate-800 text-slate-100 active:scale-110 ">
              <h1 className="">Submit</h1>
            </button>
            
        </form>
    </div>
   </div>
       
    </div>
    </>
  )
}

export default Contact