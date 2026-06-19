import React, { useContext, useEffect, useState } from 'react'
import { FaCity, FaRegFolderOpen, FaUser } from 'react-icons/fa'
import {MdOutlineDashboardCustomize, MdOutlineMarkChatRead, MdOutlineModeEditOutline} from 'react-icons/md'
import {FiFileText, FiUsers} from 'react-icons/fi'
import './Sidebar.css'
import proCS from '../../Assets/proCSLogo.svg'
import { AiOutlineFile, AiOutlineSearch } from 'react-icons/ai'
import {RiFileEditLine} from 'react-icons/ri'
import {BiSupport} from 'react-icons/bi'
import { Link } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive'
import { DataContext } from '../Context/DataContext'


const Sidebar = ({setIsSidebarOpen, isSidebarOpen}) => {
    const {sidemenu} = useContext(DataContext);
    const [isSidebar, setSidebar] = useState(false);
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
 
  return (
    <div className={`w-[223px] absolute ${isSidebarOpen || !isMobile ? "translate-x-0" : "-translate-x-full"} min-h-screen transition-all  md:static z-50 twok:w-[350px] bg-dark text-white grow-0 shrink-0 sidebar`}>
                <div className="flex flex-col h-full">
                    <div className='main__sidenav'>
                        <div className="logo py-10 font-semibold text-headingxl text-center">
                            LOGO
                        </div>
                        <div className="links flex flex-col">
                            <Link to = {"/dashboard"} className="link"><MdOutlineDashboardCustomize /><span>Dashboard</span></Link>
                            <Link to = {"/my-meeting"} className="link"><FiUsers /><span>My Meeting</span></Link>
                            <Link to = {"/circular-resolution"} className="link"><MdOutlineModeEditOutline /><span>Resolution</span></Link>
                            <Link to = {"/draft-minutes"} className="link"><RiFileEditLine /><span>Draft Minutes</span></Link>
                            <Link to = {"/final-minutes"} className="link"><AiOutlineFile /><span>Final Minutes</span></Link>
                            <Link to = {"/resources"} className="link"><FaRegFolderOpen /><span>Resources</span></Link>
                            <Link to = {"/board-evaluation"} className="link"><MdOutlineMarkChatRead /><span>Evaluation</span></Link>
                            <Link to = {"/search-report"} className="link"><AiOutlineSearch /><span>Search Report</span></Link>
                            <Link to = {"/about"} className="link"><FaCity /><span>About Company</span></Link>
                            <Link to = {"/disclosure"} className="link"><FiFileText /><span>Directors Disclosure</span></Link>
                            <Link to = {"/support"} className="link"><BiSupport /><span>Help & Support</span></Link>
                        </div>
                    </div>
                    <div className="mt-auto procs__logo__img">
                        <img src={proCS} alt="" />
                    </div>
                </div>
            </div>
  )
}

export default Sidebar
