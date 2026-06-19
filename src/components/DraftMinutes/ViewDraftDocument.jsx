import React, { useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { MdArrowBackIosNew } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const ViewDraftDocument = () => {
    const [value, setValue] = useState(''); 
    const navigate = useNavigate()
    return (
        <>
            <div className="flex fixed top-0 z-10 pt-4 pb-2 px-4 w-full justify-between items-center border-b">
                <div className='flex items-center font-semibold text-theme-color cursor-pointer' onClick={() => navigate("/dashboard")}>
                    <MdArrowBackIosNew className=' text-largeX font-normal' />
                    <span className=' text-lg font-medium'>Back</span>
                </div>
                <div className='relative'>
                    <AiOutlineSearch className='absolute text-placeholder top-1/2 left-2 -translate-y-1/2' />
                    <input className='text-placeholder border border-topSearch rounded-md py-1.5 px-8' placeholder='Search' type="text" name="search" id="search" />
                </div>
            </div>
            <p className='text-dark fixed z-20 top-4 left-1/2 -translate-x-1/2 text-mediumSubheading font-semibold'>Draft Minutes</p>
            <div className="mt-[80px] h-[75vh] flex flex-col px-10">
                <div className='flex bg-hover-bg px-4 py-4 justify-between shadow-meetModal rounded-md mb-4 items-start'>
                    <div className="">
                        <h1 className='text-dark font-semibold text-large pb-1.5'>132nd Meeting of Board Committee</h1>
                        <p className='text-theme-color text-mediumCaption font-semibold'>Document Name</p>
                        <p className='text-paragraph font-medium text-light' >Date & Time: <span className='text-theme-color text-mediumCaption font-semibold pl-1'>20/06/23 07:20 PM</span></p>
                    </div>

                    <div className="flex gap-4 items-center">
                        <button className='text-theme-color bg-white border border-theme-color text-paragraph font-medium py-2.5 px-16'>Save</button>
                        <button className='text-white border border-white bg-theme-color font-medium py-2.5 px-16'>Submit</button>
                    </div>
                </div>
            <ReactQuill className='grow border-none overflow-y-auto' theme="snow" value={value} onChange={setValue} />
            </div>

            
        </>
    )
}

export default ViewDraftDocument
