import React, { useContext, useState } from 'react'
import Sidebar from '../Sidebar/Sidebar'
import './Dashboard.css'
import TopHeader from './TopHeader'
import { AiOutlineCalendar, AiOutlineClockCircle, AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
import prof from '../../Assets/profileDummy.png'
import { FiEdit, FiFile, FiUsers } from 'react-icons/fi'
import FilterModal from './FilterModal'
import NotificationModal from './NotificationModal'
import ProfileModal from './ProfileModal'
import { MdOutlineMessage } from 'react-icons/md'
import dash from '../../Assets/Icon placeholder.svg'
import cal from '../../Assets/Calendar.png'
import { Link, useNavigate } from 'react-router-dom'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'
import MeetingModal from './MeetingModal'
import { DataContext } from '../Context/DataContext'

const Dashboard = () => {
    const { sidemenu, setSidemenu, isFiltersModal, setIsFilterModal } = useContext(DataContext)

    const [isNotificationsModal, setIsNotificationsModal] = useState(false);
    const [isProfileModal, setIsProfileModal] = useState(false);
    const [isChat, setIsChat] = useState(false);
    const [startDate, setStartDate] = useState(new Date());
    const navigate = useNavigate()
    console.log(isChat, "chatter")

    const [selectedDate, setSelectedDate] = useState(null);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isMeetingModal, setIsMeetingModal] = useState(false);

    const handleDateClick = (date) => {
        if (date) {
            const today = new Date();
            const isToday = date.toDateString() === today.toDateString();

            if (isToday) {
                setSelectedDate(date);
                setIsMeetingModal(true);
            }
        }
    };

    const meetinglist = Array.from({ length: 20 }, (_, index) => (

        <Link to={"/meeting-workspace"} key={index} className="inner__card bg-greenLight p-4 rounded-xl border border-success">
            <p className='text-smallSubheading font-medium text-theme-color uppercase leading-[1.1] pb-1'>Board Committee</p>
            <h3 className='text-dark text-mediumCaption font-semibold pb-1'>132nd Meeting of Board Committee</h3>
            <div className="flex text-datetime gap-4 text-smallSubheading font-medium leading-snug pb-2">
                <div className='flex items-center gap-1'><AiOutlineCalendar /><span>24/05/23</span></div>
                <div className='flex items-center gap-1'><AiOutlineClockCircle /><span>9:00 AM - 11:00 AM</span></div>
            </div>
            <div className='flex items-center gap-5 pt-1'>
                <div className="flex items-center text-smallSubheading font-normal gap-1 text-placeholder">
                    <FiUsers />
                    <span>Members Accepted (27/50)</span>
                </div>
                <div className='users_preview_wrp flex'>
                    <div className={`users__image rounded-full border-theme-color border bg-center bg-cover w-8 h-8 -ml-2`} style={{ backgroundImage: `url(${prof})` }}></div>
                    <div className={`users__image rounded-full border-theme-color border bg-center bg-cover w-8 h-8 -ml-2`} style={{ backgroundImage: `url(${prof})` }}></div>
                    <div className={`users__image rounded-full border-theme-color border bg-center bg-cover w-8 h-8 -ml-2`} style={{ backgroundImage: `url(${prof})` }}></div>
                    <div className={`users__image rounded-full border-theme-color border bg-center bg-cover w-8 h-8 -ml-2`} style={{ backgroundImage: `url(${prof})` }}></div>
                    <div className='bg-dark text-smallSubheading flex rounded-full border-theme-color border w-8 h-8 -ml-2 text-white justify-center items-center font-medium'><span>+23</span></div>
                </div>
            </div>
        </Link>
    ));

    const closeModal = () => {
        setIsMeetingModal(false);
    };
    return (
        <>
            {console.log(isSidebarOpen, "checking")}
            {/* overlay for mobile screen  */}

            <div className={`${isMeetingModal || isFiltersModal ? "block" : "hidden"} z-40 fixed h-full w-full bg-[#00000095] top-0 left-0`}></div>
            {isSidebarOpen ? <div className={`z-40 md:hidden overlay fixed h-full w-full bg-[#00000095] top-0 left-0`} onClick={() => setIsSidebarOpen(false)}></div> : null}
            <div className="w-full flex h-screen overflow-x-hidden">
                <Sidebar isSidebarOpen={isSidebarOpen}/>
                <div className="grow-1 w-full relative">
                <TopHeader
                    isSidebarOpen={isSidebarOpen}
                    setIsSidebarOpen={setIsSidebarOpen}
                    isFiltersModal={isFiltersModal}
                    setIsFilterModal={setIsFilterModal}
                    isNotificationsModal={isNotificationsModal}
                    setIsNotificationsModal={setIsNotificationsModal}
                    isProfileModal={isProfileModal} setIsProfileModal={setIsProfileModal} />
                {isNotificationsModal && <NotificationModal isNotificationsModal={isNotificationsModal} setIsNotificationsModal={setIsNotificationsModal} />}
                {isFiltersModal && <FilterModal isFiltersModal={isFiltersModal} setIsFilterModal={setIsFilterModal} />}
                {isProfileModal && <ProfileModal isProfileModal={isProfileModal} setIsProfileModal={setIsProfileModal} />}
                {isMeetingModal && <MeetingModal isMeetingModal={isMeetingModal} setIsMeetingModal={setIsMeetingModal} />}
                <div className="grid dash__wrapper px-4 md:px-10 py-4 grid-cols-1 md:grid-cols-[1.5fr_1fr] pb-20 gap-8">
                    <div className='flex flex-col w-full'>
                        <div className="highlight__wrp md:min-h-[480px] overflow-hidden md:border w-full rounded-xl md:p-4 card">
                            <div className="flex highlight_switcher justify-between items-center">
                                <div className='font-semibold flex items-center text-paragraph px-0 overflow-hidden border rounded-md whitespace-nowrap h-12 place-items-center'>
                                    <span className='text-success bg-greenLight w-full flex items-center justify-center h-full border-r px-4'>Upcoming(2)</span>
                                    <span className='text-light w-full flex items-center justify-center h-full px-4'>Recent</span>
                                </div>
                                <span onClick={() => navigate("/my-meeting")} className="underline cursor-pointer text-theme-color font-semibold">View all</span>
                            </div>
                            <div className="highlights__content_wrp max-h-[395px] overflow-y-scroll flex md:flex-col gap-2 mt-6">

                                <Link to={"/meeting-workspace"} className="inner__card bg-greenSelection px-4 py-3 rounded-xl border border-success">
                                    <p className='text-smallSubheading font-medium text-theme-color uppercase leading-[1.1] pb-1'>Board Committee</p>
                                    <h3 className='text-dark text-mediumCaption font-semibold pb-1'>132nd Meeting of Board Committee</h3>
                                    <div className="flex text-datetime gap-4 text-smallSubheading font-medium leading-snug pb-2">
                                        <div className='flex items-center gap-1'><AiOutlineCalendar /><span>24/05/23</span></div>
                                        <div className='flex items-center gap-1'><AiOutlineClockCircle /><span>9:00 AM - 11:00 AM</span></div>
                                    </div>
                                    <div className='flex items-center gap-5 pt-1'>
                                        <div className="flex items-center text-smallSubheading font-normal gap-1 text-placeholder">
                                            <FiUsers />
                                            <span>Members Accepted (27/50)</span>
                                        </div>
                                        <div className='users_preview_wrp flex'>
                                            <div className={`users__image rounded-full border-theme-color border bg-center bg-cover w-8 h-8 -ml-2`} style={{ backgroundImage: `url(${prof})` }}></div>
                                            <div className={`users__image rounded-full border-theme-color border bg-center bg-cover w-8 h-8 -ml-2`} style={{ backgroundImage: `url(${prof})` }}></div>
                                            <div className={`users__image rounded-full border-theme-color border bg-center bg-cover w-8 h-8 -ml-2`} style={{ backgroundImage: `url(${prof})` }}></div>
                                            <div className={`users__image rounded-full border-theme-color border bg-center bg-cover w-8 h-8 -ml-2`} style={{ backgroundImage: `url(${prof})` }}></div>
                                            <div className='bg-dark text-smallSubheading flex rounded-full border-theme-color border w-8 h-8 -ml-2 text-white justify-center items-center font-medium'><span>+23</span></div>
                                        </div>
                                    </div>
                                </Link>

                                {meetinglist}
                            </div>

                        </div>

                        <div className='w-full md:p-4 my-6 md:my-0 card'>
                            <h1 className="text-dark text-heading font-semibold pb-2">My Actionable</h1>
                            <div className="grid-cols-2 md:grid-cols-4 grid gap-2">
                                <div className='flex flex-col items-center text-center px-2 py-4 rounded-xl bg-actionableLightOrange'>
                                    <FiEdit className='text-heading text-white w-[52px] h-[52px] rounded-full p-2 bg-actionableOrange' />
                                    <span className='text-dark text-smallCaption tracking-[1px] pt-2 font-medium pb-2'>Draft Minutes</span>
                                    <h1 className='text-dark text-heading font-bold mt-auto'>9</h1>
                                </div>
                                <div className='flex flex-col items-center text-center px-2 py-4 rounded-xl bg-actionableLightGreen'>
                                    <MdOutlineMessage className='text-heading text-white w-[52px] h-[52px] rounded-full p-2 bg-success' />
                                    <span className='text-dark text-smallCaption tracking-[1px] pt-2 font-medium pb-2'>Board Evaluation</span>
                                    <h1 className='text-dark text-heading font-bold mt-auto'>5</h1>
                                </div>
                                <div className='flex flex-col items-center text-center px-2 py-4 rounded-xl bg-actionableLightPurple'>
                                    <img src={dash} alt="" />
                                    <span className='text-dark text-smallCaption tracking-[1px] pt-2 font-medium pb-2'>Resolution By Circulation</span>
                                    <h1 className='text-dark text-heading font-bold mt-auto'>12</h1>
                                </div>
                                <div className='flex flex-col items-center text-center px-2 py-4 rounded-xl bg-actionableLightYellow'>
                                    <FiFile className='text-heading text-white w-[52px] h-[52px] rounded-full p-2 bg-actionableYellow' />
                                    <span className='text-dark text-smallCaption tracking-[1px] pt-2 font-medium pb-2'>Final Minutes</span>
                                    <h1 className='text-dark text-heading font-bold mt-auto'>4</h1>
                                </div>
                            </div>
                        </div>






                    </div>
                    <div className='flex flex-col gap-4 w-full'>

                        {/* date picker  */}
                        <div className="date__picker py-2 overflow-hidden border rounded-lg card">
                            <DatePicker
                                selected={startDate}
                                formatWeekDay={(day) => day.substr(0, 1)}
                                onChange={(date) => { setStartDate(date); handleDateClick(date) }}
                                // onChange={handleDateClick}
                                renderCustomHeader={({
                                    monthDate,
                                    customHeaderCount,
                                    decreaseMonth,
                                    increaseMonth,
                                }) => (
                                    <div>
                                        <button
                                            aria-label="Previous Month"
                                            className={"absolute flex justify-center items-center w-8 h-8 right-14 border-2 text-smallSubheading top-3 rounded-md"}
                                            style={customHeaderCount === 1 ? { visibility: "hidden" } : null}
                                            onClick={decreaseMonth}
                                        >{<AiOutlineLeft />}</button>

                                        <span className=" text-large text-dark font-semibold text-left w-full pl-6">
                                            {monthDate.toLocaleString("en-US", {
                                                month: "long",
                                                year: "numeric",
                                            })}
                                        </span>
                                        <button
                                            aria-label="Next Month"
                                            className={"absolute flex justify-center items-center w-8 h-8 right-3 border-2 text-smallSubheading top-3 rounded-md"}
                                            // style={customHeaderCount === 0 ? { visibility: "hidden" } : null}
                                            onClick={increaseMonth}
                                        >
                                            {<AiOutlineRight />}
                                        </button>
                                    </div>
                                )}
                                inline
                            />
                        </div>
                        <div className="notifications border rounded-lg p-4 card flex-col flex bg-white h-[50vh]">
                            <div className="flex highlight_switcher whitespace-nowrap mb-3 justify-between items-center">
                                <div className='font-semibold flex items-center text-paragraph px-0 overflow-hidden border rounded-md h-12'>
                                    <span className={`w-full flex items-center justify-center h-full border-r px-4 ${isChat ? "bg-white text-dark" : "bg-lightBlueBg text-theme-color"}`} onClick={() => setIsChat(false)}>Notifications (2)</span>
                                    <span className={`w-full flex items-center justify-center h-full border-r px-4 ${!isChat ? "bg-white text-dark" : "bg-lightBlueBg text-theme-color"}`} onClick={() => setIsChat(true)}>Chats (4)</span>
                                </div>
                                <span className="underline cursor-pointer text-theme-color font-semibold"
                                    onClick={() => {
                                        if (isChat) {
                                            navigate("/chats")
                                        }
                                        else {
                                            navigate("/notifications")
                                        }
                                    }}>View all</span>
                            </div>



                            {!isChat ?
                                // notifications 
                                <div className="overflow-y-scroll pt-4 grow-1 noti__wrapper">
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
                                </div> :

                                // chat notificatios

                                <div className="overflow-scroll flex flex-col gap-10 pt-6 grow-1 chat__wrapper">
                                    <div className="chat__card px-6">
                                        <div className="flex items-start">

                                            <div className="relative w-10 h-10 shrink-0 mr-4">
                                                <img src={prof} className='w-full h-full rounded-full' alt="" />
                                                <div className="absolute w-[.563rem] h-[.563rem] bg-success rounded-full right-0 bottom-0"></div>
                                            </div>
                                            <div className="flex flex-col">
                                                <div className="flex justify-between leading-none pb-1 items-center">
                                                    <p className='text-dark font-medium text-smallSubheading'>Brenda White</p>
                                                    <span className="text-light font-medium text-[.813rem]">12:00</span>
                                                </div>
                                                <span className='text-light text-smallSubheading text__content_dash'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique ipsa repellat suscipit optio ex, voluptates quos nihil sunt consequuntur voluptate?</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="chat__card px-6">
                                        <div className="flex items-start">

                                            <div className="relative w-10 h-10 shrink-0 mr-4">
                                                <img src={prof} className='w-full h-full rounded-full' alt="" />
                                                <div className="absolute w-[.563rem] h-[.563rem] bg-success rounded-full right-0 bottom-0"></div>
                                            </div>
                                            <div className="flex flex-col">
                                                <div className="flex justify-between leading-none pb-1 items-center">
                                                    <p className='text-dark font-medium text-smallSubheading'>Brenda White</p>
                                                    <span className="text-light font-medium text-[.813rem]">12:00</span>
                                                </div>
                                                <span className='text-light text-smallSubheading text__content_dash'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique ipsa repellat suscipit optio ex, voluptates quos nihil sunt consequuntur voluptate?</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="chat__card px-6">
                                        <div className="flex items-start">

                                            <div className="relative w-10 h-10 shrink-0 mr-4">
                                                <img src={prof} className='w-full h-full rounded-full' alt="" />
                                                <div className="absolute w-[.563rem] h-[.563rem] bg-success rounded-full right-0 bottom-0"></div>
                                            </div>
                                            <div className="flex flex-col">
                                                <div className="flex justify-between leading-none pb-1 items-center">
                                                    <p className='text-dark font-medium text-smallSubheading'>Brenda White</p>
                                                    <span className="text-light font-medium text-[.813rem]">12:00</span>
                                                </div>
                                                <span className='text-light text-smallSubheading text__content_dash'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique ipsa repellat suscipit optio ex, voluptates quos nihil sunt consequuntur voluptate?</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div >

        </>
    )
}

export default Dashboard
