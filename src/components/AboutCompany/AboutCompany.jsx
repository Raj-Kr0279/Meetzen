import React, { useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { MdArrowBackIosNew } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import News from './News'
import CompanyStructure from './CompanyStructure'
import NewPage from '../OnBoarding/Login/Login'
import CommitteeComposition from './CommitteeComposition'
import PageHeading from '../PageHeading'

const AboutCompany = () => {
    const navigate = useNavigate()
    const [selectedFilter, setSelectedFilter] = useState('structure');
    const handleFilterSelection = (filter) => {
        setSelectedFilter(filter);
    };
   


    return (
        <>
        <PageHeading label="About Company"/>
            <div className="px-10 w-full">
                <div className='w-full px-10 min-h-screen bg-hover-bg'>
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
