import React, { useState } from 'react'
import { AiOutlineSearch, AiOutlineShareAlt } from 'react-icons/ai';
import { BsFillTriangleFill, BsPlusLg, BsTrash } from 'react-icons/bs';
import { MdArrowBackIosNew } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import MyDocuments from './MyDocuments';
import CompanyDocuments from './CompanyDocuments';


const Resources = () => {
    const navigate = useNavigate()
    const [selectedFilter, setSelectedFilter] = useState('my_docs');
    const handleFilterSelection = (filter) => {
        setSelectedFilter(filter);
    };
    return (
        <div>

            {/* top navigation  */}
            <div className="flex fixed bg-white top-0 py-2 px-4 w-full justify-between items-center border-b">
                <div className='flex items-center font-semibold text-theme-color' onClick={() => navigate("/dashboard")}>
                    <MdArrowBackIosNew className=' text-largeX font-normal' />
                    <span className=' text-lg font-medium'>Back</span>
                </div>
                <div className='relative'>
                    <AiOutlineSearch className='absolute text-placeholder top-1/2 left-2 -translate-y-1/2' />
                    <input className='text-placeholder border border-topSearch rounded-md py-1.5 px-8' placeholder='Search' type="text" name="search" id="search" />
                </div>
            </div>
            <p className='text-dark absolute top-4 left-1/2 -translate-x-1/2 text-mediumSubheading font-semibold'>Resources</p>



            <div className="w-full px-10 mt-[40px] twok:mt-[60px] max-h-[calc(100dvh-40px)] flex flex-col h-screen overflow-y-scroll">
                {/* filters and search section  */}

                <div className=' bg-hover-bg px-4 py-2  flex justify-between rounded-md mt-6 mb-4 items-center'>
                    <div className="flex highlight_switcher justify-between items-center">
                        <div className='font-semibold flex items-center border-borderInput text-paragraph px-0 overflow-hidden border rounded-md h-10 place-items-center'>
                            <div className='font-semibold whitespace-nowrap flex items-center border-borderInput text-paragraph px-0 overflow-hidden border rounded-md h-10 place-items-center'>
                                <span className={`w-full flex items-center px-4 justify-center h-full border-r ${selectedFilter === 'my_docs' ? 'bg-meetFilterBlueLight text-theme-color' : 'bg-white text-dark'}`} onClick={() => handleFilterSelection('my_docs')}>My Documents</span>
                                <span className={`w-full flex items-center justify-center h-full px-4 border-r ${selectedFilter === 'company_docs' ? 'bg-meetFilterBlueLight text-theme-color' : 'bg-white text-dark'}`} onClick={() => handleFilterSelection('company_docs')}>Company Documents</span>
                            </div>

                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <label htmlFor="year" className='text-placeholder text-paragraph font-normal'>Filter Year: </label>
                        <select className='py-2.5 px-2.5 bg-white text-dark text-paragraph w-[19vw] rounded-sm border border-borderInput' name="year" id="year">
                            <option value="all" >All</option>
                            <option value="2023">2023</option>
                            <option value="2022">2022</option>
                            <option value="2021">2021</option>
                        </select>

                        <label htmlFor="year" className='text-placeholder text-paragraph font-normal'>Filter Committee: </label>
                        <select className='py-2.5 px-2.5 bg-white text-dark text-paragraph w-[19vw] rounded-sm border border-borderInput' name="committee" id="committee">
                            <option value="all">All</option>
                            <option value="board_meetig">Board Meeting</option>
                            <option value="audit">Audit</option>
                            <option value="src">SRC</option>
                        </select>
                    </div>

                </div>

               {selectedFilter === "my_docs" ? <MyDocuments/> : selectedFilter === "company_docs" ? <CompanyDocuments/> : null}
            </div>
            </div>
    )
}

export default Resources
