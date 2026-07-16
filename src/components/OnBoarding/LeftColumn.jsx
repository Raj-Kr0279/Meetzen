import React from 'react'
import meetzen from '../../assets/Meetzen.png'

const LeftColumn = () => {
  return (
    <div className='flex-1 flex justify-center items-center'>
      <div className='flex flex-col items-center justify-center'>
         <img src={meetzen} className='w-40 mx-auto' alt="" />
         <h1 className=' text-primary text-4xl md:text-5xl font-bold'>
         MEET<span className='text-secondary'>ZEN</span>
          </h1>
         <p className='text-subtle text-body-sm'> Conduct hassle free digital board Meetings</p>
      </div>
    </div>
  )
}

export default LeftColumn
