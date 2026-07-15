import React from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import cal from "../../assets/redCal.png";
import { Link } from "react-router-dom";

const MeetingModal = ({ onClose }) => {
    const meetinglist = Array.from({ length: 20 }, (_, index) => (
        <div key={index} className='flex pl-4 flex-col gap-2 py-2.5 border-b border-border'>
                <h1 className='text-primary leading-none text-base font-semibold'>123rd Board Meeting</h1>
                <p className='text-light leading-none text-xs font-medium'>9:00 AM - 11:00 AM</p>
            </div>
    ));


  return (

    <div className="fixed right-4 top-24 z-50 flex w-[19rem] flex-col rounded-2xl bg-calModalBg shadow-meetModal md:right-[12vw] md:top-[24%]">
     <button
        type="button"
        className="absolute right-4 top-4 text-primary"
        onClick={onClose}
        aria-label="Close meeting summary"
      >
        <AiFillCloseCircle className="text-2xl" />
      </button>
     <div className="meeting__card gap-4 p-4 flex flex-col">
        <div className='flex p-2 rounded-md items-center gap-3 bg-white'>
            <img src={cal} className="w-11 h-11" alt="" />
            <div>
                <h1 className='text-primary text-mediumSubheading leading-tight font-semibold'>13th June 2023</h1>
                <p className='text-primary text-base font-normal'>5 Meetings</p>
            </div>
        </div>
        <div className="meeting__list__wrapper bg-white overflow-y-auto h-60 w-full">
           {meetinglist}
        </div>
        <Link to={"/meeting-schedules"} onClick={onClose} className ="text-primary text-xs font-medium underline pt-2 text-center">View all</Link>

     </div>
    </div>

  )
}

export default MeetingModal
