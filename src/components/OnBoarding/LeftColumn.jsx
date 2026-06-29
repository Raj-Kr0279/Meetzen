import React from 'react'
import meetzen from '../../Assets/meetzen.png'

const LeftColumn = () => {
  return (
    <div className='flex-1 flex justify-center items-center'>
      <div className=''>
          <img src={meetzen} className='w-[125px] md:w-[217px]' alt="" />
          <h1 className='text-heading leading-snug pt-6'>
          Conduct hassle <br/> free digital board <br/> Meetings
          </h1>
      </div>
    </div>
  )
}

export default LeftColumn
