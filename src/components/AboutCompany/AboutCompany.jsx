import React, { useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { MdArrowBackIosNew } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import News from './News'
import CompanyStructure from './CompanyStructure'
import NewPage from '../OnBoarding/Login/Login'
import CommitteeComposition from './CommitteeComposition'
import PageHeading from '../PageHeading'
import MeetingFilter from '../ui/MeetingFilter'

const AboutCompany = () => {
    const navigate = useNavigate()
    const [selectedFilter, setSelectedFilter] = useState('structure');
    const handleFilterSelection = (filter) => {
        setSelectedFilter(filter);
    };
    const aboutFilters=[
        {label: "Company Structure", value: "structure"},
        {label: "News & Updates", value: "news"},
        {label: "Committee Composition", value: "composition"},
    ]
   


    return (
        <>
        <PageHeading label="About Company"/>
            <div className="md:pe-10 w-full flex flex-col">
                <div className='w-full bg-hover-bg'>
                    <MeetingFilter filters={aboutFilters} onFilterSelection={handleFilterSelection} selectedFilter={selectedFilter}/>

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
