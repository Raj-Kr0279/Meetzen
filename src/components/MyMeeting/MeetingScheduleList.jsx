import React, { useState } from 'react'
import { AiOutlineLeft, AiOutlineRight, AiOutlineSearch } from 'react-icons/ai'
import { MdArrowBackIosNew } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './MeetinsSchedule.css'

const MeetingScheduleList = () => {
    const [startDate, setStartDate] = useState(new Date());
    const navigate = useNavigate()
    const calendars = Array.from({ length: 12 }, (_, index) => (
        <div key={index} className="date__picker pt-2 border rounded-xl card">
            <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                renderCustomHeader={({
                    monthDate,
                    customHeaderCount,
                    decreaseMonth,
                    increaseMonth,
                }) => (
                    <div className=''>
                        <button
                            aria-label="Previous Month"
                            className={"hidden absolute justify-center items-center w-8 h-8 right-14 border-2 text-smallSubheading top-3 rounded-md"}
                            style={customHeaderCount === 1 ? { visibility: "hidden" } : null}
                            onClick={decreaseMonth}
                        >{<AiOutlineLeft />}</button>

                        <span className=" text-base text-dark font-semibold text-center w-full">
                            {monthDate.toLocaleString("en-US", {
                                month: "long",
                                year: "numeric",
                            })}
                        </span>
                        <button
                            aria-label="Next Month"
                            className={"hidden absolute justify-center items-center w-8 h-8 right-3 border-2 text-smallSubheading top-3 rounded-md"}
                            // style={customHeaderCount === 0 ? { visibility: "hidden" } : null}
                            onClick={increaseMonth}
                        >
                            {<AiOutlineRight />}
                        </button>
                    </div>
                )}
                inline
            />
        </div>
    ));
    return (
        <>
            <div className="flex fixed z-40 bg-white top-0 py-2 px-4 w-full justify-between items-center border-b">
                <div className='flex items-center font-semibold text-theme-color' onClick={() => navigate("/dashboard")}>
                    <MdArrowBackIosNew className=' text-2xlX font-normal' />
                    <span className=' text-lg font-medium'>Back</span>
                </div>
                <div className='relative'>
                    <AiOutlineSearch className='absolute text-placeholder top-1/2 left-2 -translate-y-1/2' />
                    <input className='text-placeholder border border-topSearch rounded-md py-1.5 px-8' placeholder='Search' type="text" name="search" id="search" />
                </div>
            </div>
            <p className='text-dark z-40 leading-[1.2] fixed top-[12px] twok:top-[20px] left-1/2 -translate-x-1/2 text-mediumSubheading font-semibold'>All Meetings</p>


            <div className='w-full mt-12 px-10 flex flex-col'>
                <div className=' bg-hover-bg mx-10 px-4 py-2 flex justify-end rounded-md mt-6 mb-4 items-center'>
                    <div className="flex items-center gap-3">
                        <label htmlFor="year" className='text-placeholder text-base font-normal'>Filter Year: </label>
                        <select className='py-2.5 px-2.5 bg-white text-dark text-base w-[19vw] rounded-sm border border-borderInput' name="year" id="year">
                            <option value="all" >All</option>
                            <option value="2023">2023</option>
                            <option value="2022">2022</option>
                            <option value="2021">2021</option>
                        </select>
                    </div>
                </div>
                <div className="grid-cols-1 h-[80vh] overflow-y-scroll mx-10 px-4 schedule_cal_list grid md:grid-cols-2 lg:grid-cols-3 desk:grid-cols-4 mt-4 twok:grid-cols-5 threek:grid-cols-6 place-items-center gap-8">
                    {calendars}
                </div>
            </div>
        </>
    )
}

export default MeetingScheduleList
