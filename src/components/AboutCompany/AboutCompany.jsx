import React, { useState } from 'react'
import News from './News'
import CompanyStructure from './CompanyStructure'
import CommitteeComposition from './CommitteeComposition'
import PageHeading from '../PageHeading'
import FilterTabs from '../ui/FilterTabs'

const AboutCompany = () => {
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
                    <FilterTabs options={aboutFilters} onSelect={handleFilterSelection} selectedValue={selectedFilter}/>

                   <div className="mt-8">
                        {selectedFilter === "structure" ? <CompanyStructure/> : selectedFilter === "news" ? <News/> : selectedFilter === "composition" ? <CommitteeComposition/> :  null}
                        </div>
                    </div>
                </div>
 
        </>
    )
}

export default AboutCompany
