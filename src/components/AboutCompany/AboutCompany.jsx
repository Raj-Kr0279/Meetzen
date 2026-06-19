import React, { useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { MdArrowBackIosNew } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import News from './News'
import CompanyStructure from './CompanyStructure'
import NewPage from '../OnBoarding/Login/Login'
import CommitteeComposition from './CommitteeComposition'

const AboutCompany = () => {
    const navigate = useNavigate()
    const [selectedFilter, setSelectedFilter] = useState('structure');
    const handleFilterSelection = (filter) => {
        setSelectedFilter(filter);
    };
   


    return (
        <>
            <div className="flex fixed z-20 bg-white top-0 py-2 px-4 w-full justify-between items-center border-b">
                <div className='flex items-center font-semibold text-theme-color cursor-pointer' onClick={() => navigate("/dashboard")}>
                    <MdArrowBackIosNew className=' text-largeX font-normal' />
                    <span className=' text-lg font-medium'>Back</span>
                </div>
                <div className='relative'>
                    <AiOutlineSearch className='absolute text-placeholder top-1/2 left-2 -translate-y-1/2' />
                    <input className='text-placeholder border border-topSearch rounded-md py-1.5 px-8' placeholder='Search' type="text" name="search" id="search" />
                </div>
            </div>
            <p className='text-dark fixed z-30 top-4 left-1/2 -translate-x-1/2 text-mediumSubheading font-semibold'>About Company</p>
            <div className="px-10 w-full">
                <div className='w-full px-10 mt-[70px] min-h-screen bg-hover-bg'>
                    <div className="flex highlight_switcher pt-10 justify-between items-center">
                        <div className='font-semibold flex items-center border-borderInput text-paragraph px-0 overflow-hidden border rounded-md h-12 place-items-center'>
                            <div className='font-semibold whitespace-nowrap flex items-center border-borderInput text-paragraph px-0 overflow-hidden border rounded-md h-12 place-items-center'>
                                <span className={`w-full cursor-pointer flex items-center px-4 justify-center h-full border-r ${selectedFilter === 'structure' ? 'bg-meetFilterBlueLight text-theme-color' : 'bg-white text-dark'}`} onClick={() => handleFilterSelection('structure')}>Company Structure</span>
                                <span className={`w-full cursor-pointer flex items-center justify-center h-full px-4 border-r ${selectedFilter === 'news' ? 'bg-meetFilterBlueLight text-theme-color' : 'bg-white text-dark'}`} onClick={() => handleFilterSelection('news')}>News & Updates</span>
                                <span className={`w-full cursor-pointer flex items-center justify-center h-full px-4 ${selectedFilter === 'composition' ? 'bg-meetFilterBlueLight text-theme-color' : 'bg-white text-dark'}`} onClick={() => handleFilterSelection('composition')}>Committee Composition</span>
                            </div>
                        </div>
                    </div>

                   <div className="mt-8">
                        {selectedFilter === "structure" ? <CompanyStructure/> : selectedFilter === "news" ? <News/> : selectedFilter === "composition" ? <CommitteeComposition/> :  null}
                        </div>
                    </div>
                </div>
 
            {console.log(selectedFilter, "filtere")}
        </>
    )
}

export default AboutCompany
