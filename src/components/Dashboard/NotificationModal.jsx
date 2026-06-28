import React from 'react'
import { AiFillCloseCircle } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'

const NotificationModal = ({ isNotificationsModal, setIsNotificationsModal }) => {
    const navigate = useNavigate()
    const viewAllClick = ()=>{
       !(window.location.pathname === "/home/notifications") && navigate("/home/notifications");
        setIsNotificationsModal(false);
    }
    return (
        <div className="absolute z-10 gap-4 tracking-[.18px] flex-col flex bg-white w-[25vw] h-[30vh] right-16 top-20 rounded-2xl shadow-md p-4">
            {/* <AiFillCloseCircle className='text-theme-color cursor-pointer text-heading absolute right-4 top-4' onClick={() => setIsNotificationsModal(false)} /> */}

            <div className="flex justify-between items-center">
                <h1 className='text-dark font-semibold'>Notifications</h1>
                <span className='underline text-smallSubheading cursor-pointer text-theme-color font-medium' onClick={viewAllClick}>View all</span>
            </div>

            <div className="overflow-y-scroll grow-1 noti__wrapper">
                <div className="flex flex-col mb-2 break-words bg-hover-bg border-l-4 p-2 border-theme-color">
                    <h1 className='text-dark text-base font-semibold'>80th Meeting of Board Committee</h1>
                    <span className="text-smallCaption tracking-[.18px] pb-1 text-placeholder font-normal">Lorem ipsum dolor sit amet consectetur. Donec laoreet molestie semper sed urna. Donec laoreet molestie semper sed urna. </span>
                    <p className=' text-smallCaption text-theme-color font-semibold'>July 23, 2023 at 05:45 PM</p>
                </div>
                <div className="flex flex-col mb-2 break-words  border-l-4 border-transparent p-2">
                    <h1 className='text-dark text-base font-semibold'>80th Meeting of Board Committee</h1>
                    <span className="text-smallCaption tracking-[.18px] pb-1 text-placeholder font-normal">Lorem ipsum dolor sit amet consectetur. Donec laoreet molestie semper sed urna. Donec laoreet molestie semper sed urna. </span>
                    <p className=' text-smallCaption text-theme-color font-semibold'>July 23, 2023 at 05:45 PM</p>
                </div>
                <div className="flex flex-col mb-2 break-words  border-l-4 border-transparent p-2">
                    <h1 className='text-dark text-base font-semibold'>80th Meeting of Board Committee</h1>
                    <span className="text-smallCaption tracking-[.18px] pb-1 text-placeholder font-normal">Lorem ipsum dolor sit amet consectetur. Donec laoreet molestie semper sed urna. Donec laoreet molestie semper sed urna. </span>
                    <p className=' text-smallCaption text-theme-color font-semibold'>July 23, 2023 at 05:45 PM</p>
                </div>
            </div>


        </div>
    )
}

export default NotificationModal
