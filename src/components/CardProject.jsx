import React from 'react'

const CardProject = ({title, description}) => {
  return (
    <div className='border border-gray-200 rounded-lg px-8 py-4 bg-white shadow shadow-gray-200'>
        <div className='flex justify-between'>
            <h1>{title}</h1>
            <span>arrow</span>
        </div>
        <p>{description}</p>

        <span className='bg-gray-200 rounded px-2 py-0.5 border border-gray-300'><b className='text-sm'>React.js</b></span>

    </div>
  )
}

export default CardProject