import React from 'react'
import {skills} from '../../data/data'
const Skills = () => {
  return (
    <>
    <div className='ml-3 mt-5'>
        <h1 className='text-xl md:text-lg font-bold'>My Skills</h1>
        <div className=' ml-1 mt-5 flex items-center justify-start flex-wrap gap-2 w-2/3 mb-7'>
{skills.map((val, i)=>{
    return <div className=' bg-slate-50 rounded-md' key={i}><h1 className=' p-2 font-normal text-slate-950 text-sm'>{val.skill}</h1></div>
})}
        </div>
        </div>
    
    </>
  )
}

export default Skills