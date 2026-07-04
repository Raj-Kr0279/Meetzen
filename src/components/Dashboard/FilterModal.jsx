import React from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import "./Dashboard.css";

const FilterModal = ({ onClose }) => {
    return (
        <div className="fixed bottom-0 left-0 z-50 w-full rounded-t-2xl bg-white p-4 shadow-lg md:left-7 md:top-20 md:bottom-auto md:w-[48vw] md:rounded-2xl">
            <AiFillCloseCircle className='absolute right-4 top-4 cursor-pointer text-heading text-primary' onClick={onClose} />
            <div className="flex items-center pb-8 gap-4">
                <h1 className=' text-foreground pr-6 text-[1.8rem] font-bold'>Filters</h1>
                <div className='flex items-center gap-2'>
                    <button type="button" className="rounded-md border-2 border-theme-color bg-primary p-[6px_12px] text-white">Apply Filter</button>
                    <button type="button" className="rounded-md border-2 border-theme-color bg-white p-[6px_12px] text-primary">Clear all</button>
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
