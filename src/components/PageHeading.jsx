import React from 'react'
import { MdArrowBackIosNew } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'

const PageHeading = ({label}) => {
  const navigate = useNavigate()
  return (
    <>
     <div className="flex bg-white top-0 py-2 px-4 w-full justify-between items-center border-b">
        <div className='flex items-center cursor-pointer font-semibold text-theme-color' onClick={() => navigate(-1)}>
          <MdArrowBackIosNew className=' text-largeX font-normal' />
          <span className=' text-lg font-medium'>Back</span>
        </div>
      </div>
   {/* <p className='text-dark py-8 text-mediumSubheading text-center font-semibold'>{label}</p> */}
    </>
  )
}

export default PageHeading
