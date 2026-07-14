import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { MdArrowBackIosNew } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import PageHeading from '../PageHeading'

const Notifications = () => {
    const navigate = useNavigate()
    return (
        <>
           <PageHeading label = "Notifications"/>
            <div className="w-full flex flex-col ">
                {/* filters and search section  */}

                <div className=' bg-hover-bg py-2 flex justify-between rounded-md mb-4 items-center'>
                    <h1 className='text-primary text-display-md'>All Notifications</h1>
                    <div className="flex items-center gap-3">
                        {/* <label htmlFor="year" className='text-placeholder text-base font-normal'>Filter Year: </label>
            <select className='py-2.5 px-2.5 bg-white text-foreground text-base w-[19vw] rounded-sm border border-border' name="year" id="year">
              <option value="all" >All</option>
              <option value="2023">2023</option>
              <option value="2022">2022</option>
              <option value="2021">2021</option>
            </select> */}

                        <label htmlFor="year" className='text-placeholder text-base font-normal'>Filter Committee: </label>
                        <select className='py-2.5 px-2.5 bg-white text-foreground text-base w-[19vw] rounded-sm border border-border' name="committee" id="committee">
                            <option value="all">All</option>
                            <option value="board_meetig">Board Meeting</option>
                            <option value="audit">Audit</option>
                            <option value="src">SRC</option>
                        </select>
                    </div>

                </div>

                <div className="h-[70vh] overflow-y-scroll w-full">
                    <div className='rounded-lg border-transparent border overflow-hidden'>
                        <div className="text-display-sm">Recent</div>
                        <div className="flex flex-col gap-2 w-full mt-2">
                           {Array.from({length: 4}, (_, index)=> <div key={index} className='px-8 rounded-lg border border-border bg-surface py-4 bg-hover-bg'>
                                <p className='text-primary text-body-sm'>BOARD COMMITTEE</p>
                                <h2 className='text-primary text-display-sm font-display pb-2'>80th Meeting of Board Committee</h2>
                                <p className='text-body-md'>Project management is a discipline that involves planning, organizing, securing, managing, leading, and controlling resources to achieve specific goals</p>
                                <p className='text-body-sm text-secondary pt-2'>20 mins ago</p>
                            </div>)}
                        </div>
                    </div>
                    <div className='rounded-lg border-transparent border overflow-hidden'>
                        <div className="text-display-sm pt-6 pb-1">Past</div>
                        <div className="flex flex-col gap-2 w-full">
                            {Array.from({length: 4}, (_, index)=> <div key={index} className='px-8 rounded-lg border border-border bg-surface py-4 bg-hover-bg'>
                                <p className='text-primary text-body-sm'>BOARD COMMITTEE</p>
                                <h2 className='text-primary text-display-sm font-display pb-2'>80th Meeting of Board Committee</h2>
                                <p className='text-body-md'>Project management is a discipline that involves planning, organizing, securing, managing, leading, and controlling resources to achieve specific goals</p>
                                <p className='text-body-sm text-secondary pt-2'>20 mins ago</p>
                            </div>)}
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Notifications
