import React from 'react'
const Project = ({val:{img,title,btn,text,link}}) => {
  return (
    <>
    <div className='grid md:grid-cols-1 grid-cols-2 items-center  justify-items-center mt-40 md:m-5 md:mt-14'>
        <div className='md:w-2/3 w-[85%]'>
            <img src={img} alt="img"  className='m-10 md:m-0'/>
        </div>
        <div className='md:m-4 ml-6 flex flex-col md:items-center justify-center'>
            <h1 className=' text-xl  lg:text-lg font-bold md:m-2'>{title}</h1>
            <div className='md:mx-4 mr-20 my-8 lg:my-4'>
                <p className=' text-sm lg:text-xs font-base text-left md:text-center '>{text}</p>
            </div>
            <div className='my-5'>
           <a href={link} target="_blank" > 
            <button className="button-theme text-sm font-semibold bg-purple-600 shadow shadow-slate-800 text-slate-100 active:scale-110">
              <h1 className=" px-1 py-2">{btn}</h1>
            </button> </a>
            </div>
        </div>

    </div>
    </>
  )
}

export default Project