import React from 'react'
import niit from '../../Assets/NiitLogo.png'

const LeftColumn = () => {
  return (
    <div className='bg-theme-color h-96 flex md:block justify-center items-center relative w-full md:h-screen'>
      <div className='md:absolute top-[30%] left-[15%]'>
          <img src={niit} className='w-[125px] md:w-[217px]' alt="" />
          <h1 className='text-heading text-white leading-snug pt-6'>
          Conduct hassle <br/> free digital board <br/> Meetings
          </h1>
      </div>
    </div>
  )
}

export default LeftColumn
