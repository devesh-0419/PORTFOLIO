import React from 'react'
import {Logo} from '../data/data'
import {Bars3Icon} from '@heroicons/react/24/solid'
import {Link} from 'react-scroll'
const NavBar = () => {
  return (
    <>
    <header className=' sticky  top-0 left-0 right-0 bg-purple-700  z-10'>

    <nav className='flex items-center justify-between '>
   
        <div className='h-20 p-2' >
        <img src={Logo.img} alt="logo/img"  className=' w-auto -mt-4 h-24 rounded-full'/>

        </div>

          
            <ul className={`md:hidden flex items-center justify-center gap-2 mr-40`}>
                <li className=''>
                  <Link className='flex justify-center items-center cursor-pointer  p-4  rounded-sm text-xl font-bold hover:text-slate-50' to='home' spy={true} smooth={true} offset={-80} duration={1000}>
                  Home
                  </Link>
                  </li>
                <li className=''>
                  <Link className='flex justify-center items-center cursor-pointer  p-4  rounded-sm text-xl font-bold hover:text-slate-50' to='about' spy={true} smooth={true} offset={-80} duration={1000}>
                  About
                  </Link>
                  </li>
                <li className=''>
                  <Link className='flex justify-center items-center cursor-pointer  p-4  rounded-sm text-xl font-bold hover:text-slate-50' to='projects' spy={true} smooth={true} offset={-80} duration={1000}>
                  Projects
                  </Link>
                  </li>
                <li className=''>
                  <Link className='flex justify-center items-center cursor-pointer  p-4  rounded-sm text-xl font-bold hover:text-slate-50' to='contact' spy={true} smooth={true} offset={-80} duration={1000}>
                  Contact
                  </Link>
                  </li>
               
               
            </ul>

               <button className='hidden md:block md:mr-5 p-4 group'>
                
<Bars3Icon className='w-10 h-10 hover:text-slate-50'/>

               

<div className='absolute right-0 z-20 bg-purple-500 w-full opacity-0 group-focus:opacity-100 group-focus:right-0 group-focus:top-0 transition-all duration-100 '>

<ul className={`hidden md:flex items-center justify-center gap-2 md:flex-col w-full font-bold mt-10`}>
               <li className='w-full'> <Link className=' flex justify-center items-center w-full  cursor-pointer hover:text-slate-50' to='home' spy={true} smooth={true} offset={-80} duration={1000}>
               Home
               </Link>
                </li>
               <li className='w-full'> <Link className=' flex justify-center items-center w-full  cursor-pointer hover:text-slate-50' to='about' spy={true} smooth={true} offset={-80} duration={1000}>
               About
               </Link>
                </li>
               <li className='w-full'> <Link className=' flex justify-center items-center w-full  cursor-pointer hover:text-slate-50' to='projects' spy={true} smooth={true} offset={-80} duration={1000}>
               Projects
               </Link>
                </li>
               <li className='w-full'> <Link className=' flex justify-center items-center w-full  cursor-pointer hover:text-slate-50' to='contact' spy={true} smooth={true} offset={-80} duration={1000}>
               Contact
               </Link>
                </li>
                
                
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
