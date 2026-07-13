import React from 'react'
import faceid from '../../assets/Face ID Symbol.svg'
import facesucc from '../../assets/Touch ID Symbol.png'

const FaceModal = () => {
    return (
        <div className="fixed z-10 top-0 left-0 w-full h-screen bg-modal-overlay">
            <div className="absolute text-white bg-modal z-20 w-40 h-40 rounded-xl flex flex-col gap-4 justify-center items-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                {/* <img src={faceid} alt="" /> */}
                <img src={facesucc} alt="" />
                <p className='font-medium font-sfpro text-base'>Face ID</p>
            </div>
        </div>
    )
}

export default FaceModal