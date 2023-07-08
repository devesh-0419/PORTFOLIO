import React from 'react'

const Title = ({title,text}) => {
  return (
    <>
    <h1 className='text-5xl md:text-4xl font-bold mt-7'>{title}</h1>
        <div className='m-3 bg-purple-700 rounded w-10 h-1'><h1></h1></div>

        <div className='mx-5 text-center text-sm'>

<p>{text}
</p>
</div>
    </>
  )
}

export default Title