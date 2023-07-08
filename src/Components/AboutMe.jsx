import React from 'react'
import GetToKnowMe from './utils/GetToKnowMe.jsx'
import Skills from './utils/Skills.jsx'
import Title from './utils/Title.jsx'
const AboutMe = () => {
  return (
   <>
   <div className=' w-full h-[90%] bg-gradient-to-bl from-purple-100 to-purple-400'>
    <div className='flex items-center justify-center  flex-col'>
    <Title title={'About Me'} text={'Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology'}/>
    </div>
    
    <div className='grid grid-cols-2 md:grid-cols-1'>

     <GetToKnowMe/>
     <Skills/> 
    </div>
   </div>
   </>
  )
}

export default AboutMe