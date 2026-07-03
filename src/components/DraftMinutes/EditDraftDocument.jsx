import React, { useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { MdArrowBackIosNew } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import PageHeading from '../PageHeading';

const EditDraftDocument = () => {
    const [value, setValue] = useState(''); 
    const navigate = useNavigate()
    return (
        <>
            <PageHeading label="Draft Minutes"/>
            <div className="h-[75vh] flex flex-col px-10">
                <div className='flex bg-hover-bg px-4 py-4 justify-between shadow-meetModal rounded-md mb-4 items-start'>
                    <div className="">
                        <h1 className='text-foreground font-semibold text-2xl pb-1.5'>132nd Meeting of Board Committee</h1>
                        <p className='text-primary text-lg font-semibold'>Document Name</p>
                        <p className='text-base font-medium text-light' >Date & Time: <span className='text-primary text-lg font-semibold pl-1'>20/06/23 07:20 PM</span></p>
                    </div>

                    <div className="flex gap-4 items-center">
                        <button  className='text-primary bg-white border border-theme-color text-base font-medium py-2.5 px-16'>Save</button>
                        <button onClick={()=>navigate("/home/draft-minutes")} className='text-white border border-white bg-primary font-medium py-2.5 px-16'>Submit</button>
                    </div>
                </div>
            <ReactQuill className='grow border-none overflow-y-auto' theme="snow" value={value} onChange={setValue} />
            </div>

            
        </>
    )
}

export default EditDraftDocument
