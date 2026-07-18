import React, { useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { FiMic, FiMicOff, FiVideo, FiVideoOff } from 'react-icons/fi'
import { MdArrowBackIosNew } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import Button from '../ui/Button'

const JoinCall = () => {
    const navigate = useNavigate()
    const [isVideo, setVideo] = useState(false)
    const [isAudio, setAudio] = useState(false)
    return (
        <>
            <div className="mt-4">
                <div className="flex flex-col lg:flex-row lg:gap-12 lg:items-start lg:justify-around">
                    <div className='bg-primary lg:h-64 aspect-video rounded-lg flex items-end justify-center p-6'>
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
                        <h1 className='pb-1.5 text-display-sm font-display'>132nd Meeting of Audit Committee</h1>
                        <p className='text-body-md'>Lorem ipsum dolor sit amet consectetur. Donec laoreet molestie semper sed urna.</p>
                        <Button label="Join Call" variant="primary" classNames="mt-2"/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default JoinCall
