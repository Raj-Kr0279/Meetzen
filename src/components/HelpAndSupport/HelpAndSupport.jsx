import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { MdArrowBackIosNew } from 'react-icons/md'
import { AiOutlineSearch } from 'react-icons/ai'


const HelpAndSupport = () => {
  const navigate = useNavigate()
  const [selectedOption, setSelectedOption] = useState("contact");
  return (
    <>
    <div className="flex bg-white fixed top-0 pt-4 pb-2 px-4 w-full justify-between items-center border-b">
    <div className='flex items-center font-semibold text-theme-color cursor-pointer' onClick={() => navigate("/dashboard")}>
        <MdArrowBackIosNew className=' text-largeX font-normal' />
        <span className=' text-lg font-medium'>Back</span>
    </div>
    <div className='relative'>
        <AiOutlineSearch className='absolute text-placeholder top-1/2 left-2 -translate-y-1/2' />
        <input className='text-placeholder border border-topSearch rounded-md py-1.5 px-8' placeholder='Search' type="text" name="search" id="search" />
    </div>

</div>
<p className='text-dark fixed top-4 left-1/2 -translate-x-1/2 text-mediumSubheading font-semibold'>Help & Support</p>

<div className="mt-[90px] flex w-full gap-4 px-10">
  <div className="sidemenu shrink-0 grow-0">
    <p className={`${selectedOption === "contact" ? "bg-theme-color text-white" : "text-theme-color"} py-2 px-4 font-medium text-paragraph`} onClick={()=>setSelectedOption("contact")}>Contact Details</p>
    <p className={`${selectedOption === "manual" ? "bg-theme-color text-white" : "text-theme-color"} py-2 px-4 font-medium text-paragraph`} onClick={()=>setSelectedOption("manual")}>Director Manuals</p>
    <p className={`${selectedOption === "video" ? "bg-theme-color text-white" : "text-theme-color"} py-2 px-4 font-medium text-paragraph`} onClick={()=>setSelectedOption("video")}>Video Manuals</p>
  </div>

  <div className="mainmenu grow-1">
  </div>
</div>


</>
  )
}

export default HelpAndSupport
