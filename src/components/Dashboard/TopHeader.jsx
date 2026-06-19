import React, { useContext, useEffect, useState } from 'react'
import { FiFilter, FiMenu, FiMessageSquare, FiSearch } from 'react-icons/fi'
import { AiFillFilter, AiOutlineBell } from 'react-icons/ai'
import { MdSync, MdTune } from 'react-icons/md'
import { FaAngleDown } from 'react-icons/fa'
import prof from '../../Assets/profileDummy.png'
import { useNavigate } from 'react-router-dom'
import { getDatasetAtEvent } from 'react-chartjs-2'
import { DataContext } from '../Context/DataContext'

const TopHeader = ({ setIsFilterModal, isFiltersModal, isNotificationsModal, setIsNotificationsModal, isProfileModal, setIsProfileModal, isSidebarOpen, setIsSidebarOpen }) => {
    const { sidemenu, isMobile, setSidemenu } = useContext(DataContext)
    console.log(isFiltersModal, "header")
    const navigate = useNavigate()
    // useEffect(()=>{
    //     isMobile && setSidemenu(true)
    //         },[])
    return (
        <div className="top__header relative py-3 md:bg-hover-bg flex flex-col gap-6 md:gap-0 md:grid grid-cols-2 w-full">
            <div className="search order-1 md:order-[unset]">
                <div className="relative mobile:border mobile:border-borderInput mobile:mx-4 md:mx-0 mobile:py-4 mobile:rounded-sm md:border-none md:py-0 md:rounded-none flex flex-col text-placeholder h-full">
                    <FiSearch className='absolute top-1/2 text-mediumSubheading -translate-y-1/2 left-4' />
                    <MdTune onClick={() => setIsFilterModal(!isFiltersModal)} className='absolute top-1/2 text-mediumSubheading cursor-pointer -translate-y-1/2 right-4' />
                    <input type="text" name="" id="" className="border-none text-smallSubheading bg-transparent px-16 focus-visible:outline-none focus-visible:border-none h-full w-full" placeholder='Advance Search using filter' />
                </div>
            </div>
            <div className="action__links text-theme-color flex w-full justify-end mobile:px-4 px-6 gap-4 items-center">
                <div className="sidebar__toggle block md:hidden mr-auto" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                    <FiMenu className='text-large' />
                </div>
                <div className="chat__action md:border md:border-theme-color rounded-lg p-2 font-medium cursor-pointer flex gap-2 items-center" onClick={() => navigate("/chats")}>
                    <FiMessageSquare className='text-large' />
                    <span className="text-medium hidden md:inline-block">Chat</span>
                    <span className='rounded-full bg-dark text-white text-smallSubheading items-center justify-center font-semibold w-6 h-6 hidden md:flex'>5</span>
                </div>
                <AiOutlineBell onClick={() => setIsNotificationsModal(!isNotificationsModal)} className='text-heading font-normal cursor-pointer' />
                <MdSync className='text-heading md:inline-block hidden' />
                <div className="profile__action hidden md:flex items-center cursor-pointer" onClick={() => setIsProfileModal(!isProfileModal)}>
                    <img src={prof} className=' w-10 h-10 rounded-full' alt="" />
                    <div className="flex flex-col text-smallSubheading ml-2">
                        <span className='text-prof font-medium leading-[1.4]'>John Doe</span>
                        <span className='text-light font-normal leading-[1.4]'>President</span>
                    </div>
                    <FaAngleDown className='text-light ml-3.5' />
                </div>
            </div>
        </div>
    )
}

export default TopHeader
