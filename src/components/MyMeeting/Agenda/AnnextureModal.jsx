import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'

const AnnextureModal = ({ setModal }) => {
    return (
        <>
            <div className="fixed z-20 top-0 left-0 w-full h-screen bg-overlay" ></div>
            <div className="absolute w-[50vw]  z-30 top-1/2 bg-hover-bg left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-2xl shadow-md p-6">
                <AiOutlineClose className='cursor-pointer absolute top-4 right-4 text-[#ccc] text-2xl z-30' onClick={() => setModal(false)}/>
                <h1 className='text-prof font-semibold text-2xl pb-3'>Minutes of Previous meeting</h1>
                <div className='py-4 border-b border-[#ccc]'>
                    <p className='text-[#666] text-mediumSubheading font-medium'>Annexure 1</p>
                </div>
                <div className='py-4 border-b border-[#ccc]'>
                    <p className='text-[#666] text-mediumSubheading font-medium'>Annexure 2</p>
                </div>
                <div className='py-4 border-b border-[#ccc]'>
                    <p className='text-[#666] text-mediumSubheading font-medium'>Annexure 3</p>
                </div>
                <div className='py-4 border-b border-[#ccc]'>
                    <p className='text-[#666] text-mediumSubheading font-medium'>Annexure 4</p>
                </div>
                <div className='py-4 border-b border-[#ccc]'>
                    <p className='text-[#666] text-mediumSubheading font-medium'>Annexure 5</p>
                </div>
            </div>
        </>
    )
}

export default AnnextureModal
