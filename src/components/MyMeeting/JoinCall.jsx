import React, { useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { FiMic, FiMicOff, FiVideo, FiVideoOff } from 'react-icons/fi'
import { MdArrowBackIosNew } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'

const JoinCall = () => {
    const navigate = useNavigate()
    const [isVideo, setVideo] = useState(false)
    const [isAudio, setAudio] = useState(false)
    return (
        <>
            <div className="flex fixed z-40 bg-white top-0 py-2 px-4 w-full justify-between items-center border-b">
                <div className='flex items-center font-semibold text-theme-color' onClick={() => navigate("/dashboard")}>
                    <MdArrowBackIosNew className=' text-largeX font-normal' />
                    <span className=' text-lg font-medium'>Back</span>
                </div>
                <div className='relative'>
                    <AiOutlineSearch className='absolute text-placeholder top-1/2 left-2 -translate-y-1/2' />
                    <input className='text-placeholder border border-topSearch rounded-md py-1.5 px-8' placeholder='Search' type="text" name="search" id="search" />
                </div>
            </div>
            <p className='text-dark z-40 leading-[1.2] fixed top-[12px] twok:top-[20px] left-1/2 -translate-x-1/2 text-mediumSubheading font-semibold'>Meeting Workspace</p>

            <div className="px-10 mt-[100px]">
                <div className="grid md:grid-cols-2 gap-10 place-items-center lg:px-12">
                    <div className='bg-prof h-96 rounded-lg w-full flex items-end justify-center p-6'>
                        <div className="flex gap-2 items-center ">
                            <div className={`${!isVideo ? "bg-white text-prof" : "text-white"} w-10 h-10 flex justify-center items-center rounded-full p-1`}>
                            {isVideo ? <FiVideo className='' onClick={() => setVideo(!isVideo)} /> : <FiVideoOff className='' onClick={() => setVideo(!isVideo)} />}
                            </div>
                            <div className={`${!isAudio ? "bg-white text-prof" : "text-white"} w-10 h-10 flex justify-center items-center rounded-full p-1`}>
                            {isAudio ? <FiMic className='' onClick={() => setAudio(!isAudio)} /> : <FiMicOff className='' onClick={() => setAudio(!isAudio)} />}
</div>
                        </div>
                    </div>
                    <div className=''>
                        <h1 className=' text-extraLarge pb-1.5 font-semibold text-dark'>132nd Meeting of Audit Committee</h1>
                        <p className='text-light text-paragraph font-normal'>Lorem ipsum dolor sit amet consectetur. Donec laoreet molestie semper sed urna.</p>
                        <button className='bg-meetzen-primary w- mt-10 text-white text-mediumCaption py-4 px-20 rounded-sm'>Join Call</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default JoinCall
