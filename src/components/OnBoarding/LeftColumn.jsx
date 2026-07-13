import React from 'react'
import meetzen from '../../assets/Meetzen.png'

const LeftColumn = () => {
  return (
    <div className='flex-1 flex justify-center items-center'>
      <div className=''>
         <img src={meetzen} className='w-40 mx-auto' alt="" />
         <h1 className=' text-meetzen-secondary text-4xl md:text-5xl font-bold font-moirai'>
         MEET<span className='text-muted'>ZEN</span>
          </h1>
         <p className='text-meetzen-textPrimary text-xs'> Conduct hassle free digital board Meetings</p>
      </div>
    </div>
  )
}

export default LeftColumn
