import React from 'react'
import prof from '../../Assets/person_FILL0_wght300_GRAD0_opsz24.svg'
import pass from '../../Assets/password_FILL0_wght300_GRAD0_opsz24 1.svg'
import face from '../../Assets/Face ID Symbol.png'
import fing from '../../Assets/fingerprint_FILL0_wght200_GRAD200_opsz24 1.svg'
import logout from '../../Assets/logout_FILL0_wght300_GRAD0_opsz24.svg'
import { useNavigate } from 'react-router-dom'

const ProfileModal = () => {
    const navigate = useNavigate()
    return (
        <div className="absolute profile__modal flex-col z-10 flex bg-white right-6 top-20 rounded-2xl shadow-md">
            <div className="flex border-b  cursor-pointer border-profileModalBorder py-2 items-center" onClick={()=>navigate("/edit-profile")}>
                <img src={prof} className='w-6 h-6 mx-4' alt="" />
                <span className='text-dark text-smallSubheading font-normal mr-4'>Profile Details</span>
            </div>
            <div className="flex border-b  cursor-pointer border-profileModalBorder py-2 items-center" onClick={()=>navigate("/change-password")}>
                <img src={pass} className='w-6 h-6 mx-4' alt="" />
                <span className='text-dark text-smallSubheading font-normal mr-4'>Change Password</span>
            </div>
            <div className="flex border-b  cursor-pointer border-profileModalBorder py-2 items-center">
                <img src={face} className='w-6 h-6 mx-4' alt="" />
                <span className='text-dark text-smallSubheading font-normal mr-4'>Setup Face ID</span>
            </div>
            <div className="flex border-b cursor-pointer border-profileModalBorder py-2 items-center">
                <img src={fing} className='w-6 h-6 mx-4' alt="" />
                <span className='text-dark text-smallSubheading font-normal mr-4'>Setup Fingerprint ID</span>
            </div>
            <div className="flex py-2 items-center cursor-pointer" onClick={()=>navigate("/")}>
                <img src={logout} className='w-6 h-6 mx-4' alt="" />
                <span className='text-dark text-smallSubheading font-normal mr-4' >Logout</span>
            </div>
            

        </div>
    )
}

export default ProfileModal
