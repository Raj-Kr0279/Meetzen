import React, { useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { MdArrowBackIosNew } from 'react-icons/md'
import DatePicker from 'react-modern-calendar-datepicker'
import { useNavigate } from 'react-router-dom'

const SearchReport = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const navigate = useNavigate()
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
            <p className='text-dark fixed top-2 z-30 left-1/2 -translate-x-1/2 text-mediumSubheading font-semibold'>Search Reports</p>

            <div className='w-full px-10 mt-[70px] twok:mt-[120px] '>
                <form >
                    <div className="grid md:grid-cols-4 mb-6 gap-x-6 whitespace-nowrap">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="" className="block">Search From</label>
                        <select className='py-2.5 px-2.5 bg-white text-dark text-paragraph  rounded-sm border border-borderInput' name="category" id="category">
                            <option value="all">All</option>
                            <option value="agenda">Agenda</option>
                            <option value="final_minutes">Final Minutes</option>
                            <option value="circ_resolution">Circualr Resolution</option>
                        </select>
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="" className="block">Select Committee</label>
                        <select className='py-2.5 px-2.5 bg-white text-dark text-paragraph  rounded-sm border border-borderInput' name="committee" id="commitee">
                            <option value="board_committee">Board Committee</option>
                            <option value="audit">Audit</option>
                            <option value="src">SRC</option>
                        </select>
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="" className="block">From</label>
                        <input
                            selected={startDate}
                            type='date'
                            className="border rounded-sm  p-2 border-borderInput"
                            onChange={(date) => setStartDate(date)} />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="" className="block">To</label>
                        <input
                            type='date'
                            selected={endDate}
                            className="border rounded-sm  p-2 border-borderInput"
                            onChange={(date) => setEndDate(date)} />
                    </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-x-6 whitespace-nowrap">
                    <div className="flex w-full items-center gap-4">
                        <div className='relative w-[60%]'>
                            <AiOutlineSearch className='absolute text-placeholder top-1/2 left-2 -translate-y-1/2' />
                            <input className='text-placeholder w-full border text-smallSubheading border-topSearch rounded-sm py-2 px-8' placeholder='Advanced Search using filter' type="text" name="search" id="search" />
                        </div>
                        <button className="text-white  bg-theme-color py-2 px-8 rounded-sm text-paragraph font-medium">Search</button>
                    </div>
                    </div>
                </form>
            </div>

            <div className="w-full bg-searchReport min-h-[90vh] mt-6 border-t text-searchReportText font-medium">
                <div className="grid grid-cols-[120px_auto] break-words border-b p-4">
                    <p>Committee:</p>
                    <p>Board Committee</p>
                </div>
                <div className="grid grid-cols-[120px_auto] break-words border-b p-4">
                    <p>Date:</p>
                    <p>04/04/2023</p>
                </div>
                <div className="grid grid-cols-[120px_auto] break-words border-b p-4">
                    <p>Snippet:</p>
                    <p>Sit nulla imperdiet at a, eu nulla. A id ultrices at bibendum aliquet. Lectus imperdiet orci libero, justo, turpis consectetur. Tristique pretium, turpis sit non quis commodo nisi, tristique in. In placerat arcu, felis a amet semper dignissim est. Amet, enim aliquam neque, tincidunt ultrices dictum diam dui. Malesuada eu laoreet sed elit dolor ipsum sed. In mi cras vitae, id aliquam nulla elementum risus amet.</p>
                </div>
                <div className="grid grid-cols-[120px_auto] break-words border-b p-4">
                    <p>Document:</p>
                    <a className='text-theme-color cursor-pointer underline'>132ndboardcommitee.pdf</a>
                </div>
            </div>
        </>
    )
}

export default SearchReport
