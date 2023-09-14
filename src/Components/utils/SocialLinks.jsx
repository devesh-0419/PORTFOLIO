import React from 'react'

const SocialLinks = ({icon,link}) => {
  // console.log('link', link);
  return (
    
    <>
    <a href={link} /*download="Devesh_Swarnkar_Btech_resume" */ target='_blank'>
    <img
    src={icon}
    alt='icon/socials'
    className='w-8 h-8 flex items-center cursor-pointer md:w-6 md:h-6 sm:w-5 sm:h-5 transition-all duration-200 hover:scale-110' 
    />
    </a>
    </>
  )
}

export default SocialLinks