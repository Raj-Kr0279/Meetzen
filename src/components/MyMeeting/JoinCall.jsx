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
            <div className="px-10">
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
                        <h1 className=' text-extraLarge pb-1.5 font-semibold text-foreground'>132nd Meeting of Audit Committee</h1>
                        <p className='text-light text-base font-normal'>Lorem ipsum dolor sit amet consectetur. Donec laoreet molestie semper sed urna.</p>
                        <button className='bg-primary w- mt-10 text-white text-lg py-4 px-20 rounded-sm'>Join Call</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default JoinCall
