import React from 'react'
import logoImg from '../assets/DEV03544.jpg'
import {Bars3Icon} from '@heroicons/react/24/solid'
const NavBar = () => {
  return (
    <>
    <header className=' sticky  top-0 left-0 right-0 bg-purple-700  z-10'>

    <nav className='flex items-center justify-between '>
   
        <div className='2xl:ml-10 md:ml-5 w-14 h-14 rounded-full overflow-hidden m-2  border border-black' >
        <img src={logoImg} alt="logo/img"  className=' w-auto -mt-4 h-28 rounded-full'/>

        </div>

          
            <ul className={`md:hidden flex items-center justify-center gap-2 mr-40`}>
                <li className='flex justify-center items-center cursor-pointer  p-4  rounded-sm text-xl font-bold hover:text-slate-50'>
                Home</li>
                <li className=''><button className=' flex justify-center items-center cursor-pointer  p-4  rounded-sm text-xl font-bold hover:text-slate-50'>
                About</button></li>
                <li className=''><button className=' flex justify-center items-center cursor-pointer  p-4  rounded-sm text-xl font-bold hover:text-slate-50'>
                Project</button></li>
                <li className=''><button className=' flex justify-center items-center cursor-pointer  p-4  rounded-sm text-xl font-bold hover:text-slate-50'>
                Contact</button></li>
               
            </ul>

               <button className='hidden md:block md:mr-5 p-4 group'>
                
<Bars3Icon className='w-10 h-10 hover:text-slate-50'/>

               

<div className='absolute right-0 z-20 bg-purple-500 w-full opacity-0 group-focus:opacity-100 group-focus:right-0 group-focus:top-0 transition-all duration-100 '>

<ul className={`hidden md:flex items-center justify-center gap-2 md:flex-col w-full font-bold mt-10`}>
                <li className=' flex justify-center items-center w-full  cursor-pointer hover:text-slate-50'>
                Home</li>
                <li className=' flex justify-center items-center w-full  cursor-pointer hover:text-slate-50'>
                About</li>
                <li className=' flex justify-center items-center w-full  cursor-pointer hover:text-slate-50'>
                Project</li>
                <li className=' flex justify-center items-center w-full  cursor-pointer hover:text-slate-50'>
                Contact</li>
                
                {/* <li className=''>About</li>
                <li className=''>Project</li>
              <li className=''>Contact</li> */}
            </ul>
              </div>
               </button>
                

        

    </nav>
    </header>
    </>
  )
}

export default NavBar
