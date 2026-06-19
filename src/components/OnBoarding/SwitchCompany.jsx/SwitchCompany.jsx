import React from 'react'
import LeftColumn from '../LeftColumn'
import RightColumn from '../RightColumn'
import {AiOutlinePlus} from 'react-icons/ai'
import { Navigate, useNavigate } from 'react-router-dom'

const SwitchCompany = () => {
    const navigate = useNavigate()
  return (
    <div className="grid-cols-1 tab:grid-cols-2 grid w-full h-screen">
      <LeftColumn />
      <RightColumn>
<div className='w-full'>
    <h1 className='text-heading leading-none text-center text-dark font-semibold'>Switch Company</h1>
    <p className="mt-4 text-center text-dark text-paragraph leading-snug font-medium">Select a company</p>

    <div className='border border-transparent mt-12 rounded-2xl overflow-hidden'>
        <div className='flex border-b px-6 py-3 gap-4 items-center bg-hover-bg'>
            <div className='bg-green-500 w-8 h-8 flex justify-center items-center rounded-full text-white'><span>P</span></div>
            <div>
                <p className='text-dark font-semibold leading-none text-paragraph'>proCS</p>
                <span className='text-light font-medium text-smallCaption'>email@gmail.com</span>
            </div>
        </div>
        <div className='flex border-b px-6 py-3 gap-4 items-center '>
            <div className='bg-purple-500 w-8 h-8 flex justify-center items-center rounded-full text-white'><span>N</span></div>
            <div>
                <p className='text-dark font-semibold leading-none text-paragraph'>NIIT</p>
                <span className='text-light font-medium text-smallCaption'>j******4</span>
            </div>
        </div>
        <div className='flex border-b px-6 py-3 gap-4 items-center '>
            <div className='bg-theme-color w-8 h-8 flex justify-center items-center rounded-full text-white'><span>M</span></div>
            <div>
                <p className='text-dark font-semibold leading-none text-paragraph'>MSTC</p>
                <span className='text-light font-medium text-smallCaption'>email@gmail.com</span>
            </div>
        </div>
        <div className='flex border-b px-6 py-3 gap-4 items-center '>
            <div className='bg-red-500 w-8 h-8 flex justify-center items-center rounded-full text-white'><span>J</span></div>
            <div>
                <p className='text-dark font-semibold leading-none text-paragraph'>Jubiliant</p>
                <span className='text-light font-medium text-smallCaption'>email@gmail.com</span>
            </div>
        </div>
        <button onClick={()=>navigate("/")} className="bg-theme-color px-6 w-full text-white py-4 flex gap-4 items-center"><AiOutlinePlus/> Add other company</button>
    </div>
</div>
        </RightColumn>
        </div>
  )
}

export default SwitchCompany
