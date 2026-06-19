import React from 'react'
import { BsClock } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'

const Minutes = () => {
  const navigate = useNavigate()
    const minutes = Array.from({ length: 12 }, (_, index) => (
        <div key={index} className="flex border-b py-2 items-center justify-between">
          <div className="flex flex-col gap-1">
            <h1 className='text-dark font-semibold text-large'>Document Name</h1>
            <div className='flex items-center gap-2'>
                <span className='text-placeholder'>Date & Time:</span>
                <p className=" text-mediumCaption text-theme-color font-medium">20/06/23 06:57 PM</p>
            </div>
          </div>
          <div className="flex items-center gap-4 ">
            <span className='flex items-center text-action font-medium p-0.5 bg-actionBg'><BsClock/>Pending 15 days left</span>
            <button className={`text-white bg-theme-color py-2 px-4 font-medium text-paragraph rounded-sm`} onClick={()=>navigate("/submit-feedback")}>Submit Feedback</button></div>
        </div>
    ))
  return (
    <div className='w-full minutes__wrp py-2 px-4 bg-white h-[95%] pb-4 overflow-y-auto'>
       {minutes}
      
    </div>
  )
}

export default Minutes
