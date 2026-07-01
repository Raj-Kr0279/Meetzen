import React from 'react'
import cal from '../../Assets/redCal.png'
import { Link } from 'react-router-dom'

const MeetingModal = () => {
    const meetinglist = Array.from({ length: 20 }, (_, index) => (
        <div key={index} className='flex pl-4 flex-col gap-2 py-2.5 border-b border-borderInput'>
                <h1 className='text-dark leading-none text-base font-semibold'>123rd Board Meeting</h1>
                <p className='text-light leading-none text-smallSubheading font-medium'>9:00 AM - 11:00 AM</p>
            </div>
    ));


  return (

    <div className="absolute shadow-meetModal profile__modal flex-col z-40 flex bg-calModalBg right-[12vw] top-[24%] w-[19rem] rounded-2xl">
     <div className="meeting__card gap-4 p-4 flex flex-col">
        <div className='flex p-2 rounded-md items-center gap-3 bg-white'>
            <img src={cal} className="w-11 h-11" alt="" />
            <div>
                <h1 className='text-dark text-mediumSubheading leading-tight font-semibold'>13th June 2023</h1>
                <p className='text-theme-color text-base font-normal'>5 Meetings</p>
            </div>
        </div>
        <div className="meeting__list__wrapper bg-white overflow-y-auto h-60 w-full">
           {meetinglist}
        </div>
        <Link to={"/meeting-schedules"} className ="text-theme-color text-smallSubheading font-medium underline pt-2 text-center">View all</Link>

     </div>
    </div>

  )
}

export default MeetingModal
