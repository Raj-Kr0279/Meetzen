import React, { useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { MdArrowBackIosNew, MdOutlineImage } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import prof from '../../../Assets/profileDummy.png'
import { FaAngleDown } from 'react-icons/fa'
import { FiTrash2 } from 'react-icons/fi'

const MemberProfile = () => {
  return (
    <div className="grid h-full gap-8 p-8 bg-hover-bg md:grid-cols-[200px_1fr] grid-cols-1 w-full">
    <div className='flex flex-col self-baseline gap-4 items-center'>
      <div className='flex flex-col gap-2 items-center'>
        <img src={prof} className='w-[10.72rem] h-[10.72rem] rounded-full' alt="" />
      </div>
    </div>
    {/* form profile  */}
    <div className='w-full justify-self-start pr-20'>
      <div className='flex flex-col w-full gap-6 lg:gap-2'>
        <div>
          <label htmlFor="name" className='text-foreground text-base  font-semibold inline-block pb-2'>Full Name</label>
          <input disabled type="text" className=' bg-transparent border-border-input placeholder:text-placeholder w-full font-normal border-1 text-base  focus-within:border-dark focus-within:outline-none py-3 px-4 rounded-md' />
        </div>
        <div>
          <label htmlFor="phone" className='text-foreground text-base  font-semibold inline-block pb-2'>Mobile Number (WhatsApp Preferred)</label>
          <input disabled type="number" className=' bg-transparent border-border-input placeholder:text-placeholder w-full font-normal border-1 text-base  focus-within:border-dark focus-within:outline-none py-3 px-4 rounded-md' />
        </div>
        <div>
          <label htmlFor="bio" className='text-foreground text-base  font-semibold inline-block pb-2'>Bio</label>
          <textarea disabled className=' bg-transparent border-border-input resize-none h-28 placeholder:text-placeholder w-full font-normal border-1 text-base  focus-within:border-dark focus-within:outline-none py-3 px-4 rounded-md' />
        </div>
        <div>
          <label htmlFor="bio" className='text-foreground text-base  font-semibold inline-block pb-2'>Members of Committee</label>
          <textarea disabled className=' bg-transparent border-border-input resize-none h-28 placeholder:text-placeholder w-full font-normal border-1 text-base  focus-within:border-dark focus-within:outline-none py-3 px-4 rounded-md' />
        </div>

      </div>
    </div>
  </div>
  )
}

export default MemberProfile
