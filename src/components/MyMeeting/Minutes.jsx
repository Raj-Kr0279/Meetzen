import React from 'react'
import { BsClock } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import Button from '../ui/Button'

const Minutes = () => {
  const navigate = useNavigate()
    const minutes = Array.from({ length: 12 }, (_, index) => (
        <div key={index} className="flex border-border border hover:border-secondary rounded-md bg-surface p-4 items-center justify-between">
          <div className="flex flex-col gap-1">
            <h1 className='text-display-sm font-display'>Document Name</h1>
            <div className='flex items-center gap-2'>
                <span className='text-subtle text-captionLight'>Date & Time:</span>
                <p className="text-body-sm">20/06/23 06:57 PM</p>
            </div>
          </div>
          <div className="flex items-center gap-4 ">
            <span className='flex items-center text-caption gap-1 text-secondary p-0.5'><BsClock/>Pending 15 days left</span>
            <Button variant="primary" label="Submit Feedback" onClick={()=>navigate("/home/submit-feedback")} classNames="text-body-sm"/>
            </div>
        </div>
    ))
  return (
    <div className='w-full  py-2 px-4 flex gap-2 flex-col pb-4 overflow-y-auto'>
       {minutes}
      
    </div>
  )
}

export default Minutes
