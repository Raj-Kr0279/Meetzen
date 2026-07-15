
import React, { useState } from 'react'
import done from '../../assets/done_FILL0_wght400_GRAD0_opsz48 (1) 1.svg'

const SuccessModal = ({setModal}) => {
  return (
    <>
    <div className="fixed z-20 top-0 left-0 w-full h-screen bg-overlay" ></div>
    <div className="absolute w-[300px] z-30 top-1/2 bg-hover-bg left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-2xl shadow-md py-4 px-6">
    <div className="flex flex-col gap-2">
    <img src={done} alt="" className=' w-14 h-14' />
    <h3 className='text-prof font-medium text-mediumSubheading'>Files Uploaded</h3>
    <p className='text-primary text-medium font-normal'>Your files has been uploaded successfully.</p>
    <button className='bg-primary mt-3 text-white py-2 px-6 w-full rounded-md' onClick={()=>setModal(false)}>Okay</button>
</div>
</div>
</>
  )
}

export default SuccessModal
