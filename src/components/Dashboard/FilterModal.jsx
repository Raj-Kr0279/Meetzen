import React, { useState } from 'react'
import { AiFillCloseCircle, AiOutlineCloseCircle } from 'react-icons/ai'
import './Dashboard.css';

const FilterModal = ({setIsFilterModal, isFiltersModal}) => {
    const [checked, setChecked] = useState(false);

    const handleRadioChange = () => {
        setChecked(!checked);
    };
    return (
        <div className="absolute z-40 bg-white w-full md:w-[48vw] bottom-0 md:bottom-[unset] md:left-7 md:top-20 left-0 rounded-2xl shadow-md p-4">
            <AiFillCloseCircle className='text-theme-color cursor-pointer text-heading absolute right-4 top-4' onClick={()=>setIsFilterModal(false)} />
            <div className="flex items-center pb-8 gap-4">
                <h1 className=' text-dark pr-6 text-[1.8rem] font-bold'>Filters</h1>
                <div className='flex items-center mobile:max-md:bg-red-500 gap-2'>
                    <buttons className="p-[6px_12px] cursor-pointer border-2 border-theme-color text-white bg-meetzen-primary rounded-md">Apply Filter</buttons>
                    <buttons className="p-[6px_12px] cursor-pointer text-theme-color bg-white border-theme-color border-2 rounded-md">Clear all</buttons>
                </div>
            </div>

            <div className="date__filter filters mb-5 pb-4 border-b">
            <h1 className=' text-mediumSubheading text-filterType font-semibold'>Date</h1>
                <div className='flex'>
                    <div className='flex relative mr-4'>
                        <input type="radio" name="duration" id="today" className='' />
                        <label htmlFor='today' className='group'>Today</label>
                        <span className='custom__icon'></span>
                    </div>
                    <div className='flex relative mr-4'>
                        <input type="radio" name="duration" id="tomorrow" />
                        <label htmlFor='tomorrow'>Tomorrow</label>
                        <span className='custom__icon'></span>
                    </div>
                    <div className='flex relative mr-4'>
                        <input type="radio" name="duration" id="month" />
                        <label htmlFor='month'>This month</label>
                        <span className='custom__icon'></span>
                    </div>
                    <div className='flex relative mr-4'>
                        <input type="radio" name="duration" id="custom" />
                        <label htmlFor='custom'>Custom</label>
                        <span className='custom__icon'></span>
                    </div>
                </div>
            </div>


          


            <div className="Type__filter filters mb-5 pb-4 border-b">
            <h1 className=' text-mediumSubheading text-filterType font-semibold'>Type</h1>
                <div className='flex'>
                    <div className='flex relative mr-4'>
                        <input type="radio" name="type" id="agenda" className='' />
                        <label htmlFor='agenda' className='group'>Agenda</label>
                        <span className='custom__icon'></span>
                    </div>
                    <div className='flex relative mr-4'>
                        <input type="radio" name="type" id="final_min" />
                        <label htmlFor='final_min'>Final Minutes</label>
                        <span className='custom__icon'></span>
                    </div>
                    <div className='flex relative mr-4'>
                        <input type="radio" name="type" id="circular_res" />
                        <label htmlFor='circular_res'>Circular Resolution</label>
                        <span className='custom__icon'></span>
                    </div>
                </div>
            </div>


            <div className="committee__filter filters mb-5 pb-4 border-b">
                <h1 className=' text-mediumSubheading text-filterType font-semibold'>Committee</h1>
                <div className='flex'>
                    <div className='flex relative mr-4'>
                        <input type="radio" name="committee" id="audit_committee" className='' />
                        <label htmlFor='audit_committee' className='group'>Audit Committee</label>
                        <span className='custom__icon'></span>
                    </div>
                    <div className='flex relative mr-4'>
                        <input type="radio" name="committee" id="board_committe" />
                        <label htmlFor='board_committe'>Board Committee</label>
                        <span className='custom__icon'></span>
                    </div>
                    <div className='flex relative mr-4'>
                        <input type="radio" name="committee" id="src_committee" />
                        <label htmlFor='src_committee'>SRC Committee</label>
                        <span className='custom__icon'></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FilterModal
