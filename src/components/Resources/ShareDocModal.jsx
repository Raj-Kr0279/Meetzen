import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import prof from '../../assets/profileDummy.png'
import { MdAdd } from 'react-icons/md'

const ShareDocModal = ({ setModal }) => {
    const contact = Array.from(({ length: 20 }), (index) => (
        <div key={index} className="flex items-center p-2 justify-between w-full">
            <div className='flex items-center gap-1.5'>
                <img src={prof} className='rounded-full w-10 h-10' alt="" />
                <div className='flex flex-col'>
                    <p className='text-prof text-base font-medium'>Alex Payne</p>
                    <span className='text-profLight40 text-xs font-normal'>Manager</span>
                </div>
            </div>
            <div className='flex items-center text-primary justify-center w-12 h-9 bg-hover-bg'>
                <MdAdd className=' text-2xl font-bold' />
            </div>
        </div>

    ))
    return (
        <>
            <div className="fixed z-20 top-0 left-0 w-full h-screen bg-overlay" onClick={() => setModal(false)}></div>
            <div className="absolute flex flex-col overflow-hidden w-[50vw] h-[65dvh] max-w-[600px] z-30 top-1/2 bg-white left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-2xl shadow-md p-6">
                <h1 className='text-prof pb-3 text-2xl font-semibold'>Share with</h1>
                <div className='relative'>
                    <AiOutlineSearch className='absolute text-placeholder top-1/2 left-2 -translate-y-1/2' />
                    <input className='text-placeholder w-full border border-topSearch rounded-md py-2.5 px-8' placeholder='Search' type="text" name="search" id="search" />
                </div>
                <div className='py-2 px-4  inline-flex items-center gap-2 cursor-pointer'>
                    <p className="text-primary text-xs font-semibold">People with access</p>
                </div>
                <div className="contacts__wrap border-t grow-1 border-border gap-4 flex flex-col overflow-y-auto">
                    {contact}
                </div>
                <button className="bg-primary w-full text-white py-3 rounded-md px-8 " onClick={() => setModal(false)}>Done</button>
            </div>
        </>
    )
}

export default ShareDocModal
