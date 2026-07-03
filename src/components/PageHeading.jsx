import React from 'react'
import { MdArrowBackIosNew } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'

const PageHeading = ({label}) => {
  const navigate = useNavigate()
  return (
    <>
     
   {/* <p className='text-foreground py-8 text-mediumSubheading text-center font-semibold'>{label}</p> */}
    </>
  )
}

export default PageHeading
