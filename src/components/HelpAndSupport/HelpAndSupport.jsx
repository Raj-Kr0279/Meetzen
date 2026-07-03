import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { MdArrowBackIosNew } from 'react-icons/md'
import { AiOutlineSearch } from 'react-icons/ai'
import PageHeading from '../PageHeading'


const HelpAndSupport = () => {
  const navigate = useNavigate()
  const [selectedOption, setSelectedOption] = useState("contact");
  return (
    <>
    {/* <div className="flex bg-white fixed top-0 pt-4 pb-2 px-4 w-full justify-between items-center border-b">
    <div className='flex items-center font-semibold text-primary cursor-pointer' onClick={() => navigate("/dashboard")}>
        <MdArrowBackIosNew className=' text-2xlX font-normal' />
        <span className=' text-lg font-medium'>Back</span>
    </div>
    <div className='relative'>
        <AiOutlineSearch className='absolute text-placeholder top-1/2 left-2 -translate-y-1/2' />
        <input className='text-placeholder border border-topSearch rounded-md py-1.5 px-8' placeholder='Search' type="text" name="search" id="search" />
    </div>

</div> */}
<PageHeading label="Help & Support"/>

<div className="flex w-full gap-4 mt-4 px-10">
  <div className="sidemenu shrink-0 grow-0">
    <p className={`${selectedOption === "contact" ? "bg-primary text-white" : "text-primary"} py-2 px-4 font-medium text-base`} onClick={()=>setSelectedOption("contact")}>Contact Details</p>
    <p className={`${selectedOption === "manual" ? "bg-primary text-white" : "text-primary"} py-2 px-4 font-medium text-base`} onClick={()=>setSelectedOption("manual")}>Director Manuals</p>
    <p className={`${selectedOption === "video" ? "bg-primary text-white" : "text-primary"} py-2 px-4 font-medium text-base`} onClick={()=>setSelectedOption("video")}>Video Manuals</p>
  </div>

  <div className="mainmenu grow-1">
  </div>
</div>


</>
  )
}

export default HelpAndSupport
