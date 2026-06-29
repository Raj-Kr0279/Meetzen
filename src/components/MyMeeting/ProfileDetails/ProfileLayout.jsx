import React, { useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { MdArrowBackIosNew } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import MemberProfile from './MemberProfile'
import MemberCompanyStructure from './MemberCompanyStructure'
import MemberNewsUpdates from './MemberNewsUpdates'
import AboutMemberCompany from './AboutMemberCompany'

const ProfileLayout = () => {
    const [selectedOption, setSelectedOption] = useState("profile");
    const navigate = useNavigate()
    return (
        <>
            <div className="flex flex-col h-screen">
                {/* top navigation  */}
                <div className="flex fixed bg-white z-10 pt-4 pb-2 px-4 w-full justify-between items-center">
                    <div className='flex items-center font-semibold text-theme-color cursor-pointer' onClick={() => navigate("/dashboard")}>
                        <MdArrowBackIosNew className=' text-largeX font-normal' />
                        <span className=' text-lg font-medium'>Back</span>
                    </div>
                    <div className='relative'>
                        <AiOutlineSearch className='absolute text-placeholder top-1/2 left-2 -translate-y-1/2' />
                        <input className='text-placeholder border border-topSearch rounded-md py-1.5 px-8' placeholder='Search' type="text" name="search" id="search" />
                    </div>

                </div>
                <p className='text-dark fixed top-4 z-20 left-1/2 -translate-x-1/2 text-mediumSubheading font-semibold'>Meeting WorkSpace</p>

                <div className="flex mt-[70px] grow gap-6">
                    <div className='flex flex-col whitespace-nowrap'>
                        <p className={`${selectedOption === "profile" ? "bg-meetzen-primary text-white" : "text-theme-color"} py-2 px-4 font-medium text-paragraph cursor-pointer`} onClick={() => setSelectedOption("profile")}>Personal Details</p>
                        <p className={`${selectedOption === "structure" ? "bg-meetzen-primary text-white" : "text-theme-color"} py-2 px-4 font-medium text-paragraph cursor-pointer`} onClick={() => setSelectedOption("structure")}>Company Structure</p>
                        <p className={`${selectedOption === "news" ? "bg-meetzen-primary text-white" : "text-theme-color"} py-2 px-4 font-medium text-paragraph cursor-pointer`} onClick={() => setSelectedOption("news")}>News Updates</p>
                        <p className={`${selectedOption === "about" ? "bg-meetzen-primary text-white" : "text-theme-color"} py-2 px-4 font-medium text-paragraph cursor-pointer`} onClick={() => setSelectedOption("about")}>About Company</p>
                    </div>
                    <div className="grow w-full bg-hover-bg p-6">
                        {
                            selectedOption === "profile" ? <MemberProfile /> :
                                selectedOption === "structure" ? <MemberCompanyStructure /> :
                                    selectedOption === "news" ? <MemberNewsUpdates /> :
                                        selectedOption === "about" ? <AboutMemberCompany /> : null
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProfileLayout
