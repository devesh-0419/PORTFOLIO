import React from 'react'
import Title from './utils/Title.jsx'
const Contact = () => {
  return (
    <>
    <div id='contact' className=' bg-gradient-to-bl from-gray-100 to-gray-200 -mt-7 w-full h-[90%]'>
        <div className='flex flex-col items-center justify-center'>
        <div className='flex flex-col items-center justify-center mt-9'>
    <Title title={'Contact'} text={'Feel free to Contact me by submitting the form below and I will get back to you as soon as possible'}/>
        </div>

        </div>
   <div className=' grid grid-cols-1 items-center justify-items-center'>

    <div className='w-1/4 lg:w-1/3 md:w-1/2 sm:3/2 xsm:w-[80%] m-10 bg-slate-50 rounded-lg'>
        <form action="" className='flex flex-col p-4'>
            <label htmlFor="name" className=' mx-4 my-2 text-sm font-semibold uppercase'>Name</label>
            <textarea type="text" id='name' className='bg-purple-400 mx-4 rounded-md p-1 pl-3 placeholder:text-black/30 py-2 text-xs overflow-y-hidden break-words max-w-full' placeholder='Enter Your Name' autoComplete="off"/>
            <label htmlFor="email" className=' mx-4 my-2 text-sm font-semibold uppercase'>email</label>
            <textarea type="text" id='email' className='bg-purple-400 mx-4 rounded-md p-1 pl-3 placeholder:text-black/30 py-2 text-xs overflow-y-hidden break-words max-w-full' placeholder='Enter Your Email' autoComplete="off" />
            <label htmlFor="message" className=' mx-4 my-2 text-sm font-semibold uppercase'>message</label>
            <textarea type="text" id='message' className='bg-purple-400 mx-4 rounded-md p-1 pl-3 placeholder:text-black/30 py-2 text-xs overflow-y-hidden break-words max-w-full h-28' placeholder='Enter Your Message...' autoComplete="off"/>

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