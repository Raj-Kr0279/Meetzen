import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { MdArrowBackIosNew } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'

const Notifications = () => {
    const navigate = useNavigate()
    return (
        <>
            {/* top navigation  */}
            <div className="flex pt-4 pb-2 px-4 w-full justify-between items-center border-b">
                <div className='flex items-center font-semibold text-theme-color cursor-pointer' onClick={() => navigate("/dashboard")}>
                    <MdArrowBackIosNew className=' text-largeX font-normal' />
                    <span className=' text-lg font-medium'>Back</span>
                </div>
                <div className='relative'>
                    <AiOutlineSearch className='absolute text-placeholder top-1/2 left-2 -translate-y-1/2' />
                    <input className='text-placeholder border border-topSearch rounded-md py-1.5 px-8' placeholder='Search' type="text" name="search" id="search" />
                </div>
            </div>
                <p className='text-dark absolute top-2 left-1/2 -translate-x-1/2 text-mediumSubheading font-semibold'>Notifications</p>



            <div className="w-full px-10 flex flex-col ">
                {/* filters and search section  */}

                <div className=' bg-hover-bg px-4 py-2  flex justify-between rounded-md mt-6 mb-4 items-center'>
                    <h1 className='text-dark font-semibold text-large'>All Notifications</h1>
                    <div className="flex items-center gap-3">
                        {/* <label htmlFor="year" className='text-placeholder text-paragraph font-normal'>Filter Year: </label>
            <select className='py-2.5 px-2.5 bg-white text-dark text-paragraph w-[19vw] rounded-sm border border-borderInput' name="year" id="year">
              <option value="all" >All</option>
              <option value="2023">2023</option>
              <option value="2022">2022</option>
              <option value="2021">2021</option>
            </select> */}

                        <label htmlFor="year" className='text-placeholder text-paragraph font-normal'>Filter Committee: </label>
                        <select className='py-2.5 px-2.5 bg-white text-dark text-paragraph w-[19vw] rounded-sm border border-borderInput' name="committee" id="committee">
                            <option value="all">All</option>
                            <option value="board_meetig">Board Meeting</option>
                            <option value="audit">Audit</option>
                            <option value="src">SRC</option>
                        </select>
                    </div>

                </div>

                <div className="h-[80vh] overflow-y-scroll w-full">
                    <div className='rounded-lg border-transparent border overflow-hidden'>
                        <div className="bg-theme-color w-full text-white py-2 text-heading font-semibold px-4">Recent</div>
                        <div className="flex flex-col w-full mt-2">
                            <div className='px-8 py-6 bg-hover-bg'>
                                <p className='text-theme-color font-normal text-paragraph'>BOARD COMMITTEE</p>
                                <h2 className='text-dark font-semibold text-large tracking-wide '>80th Meeting of Board Committee</h2>
                                <p className=' text-medium font-normal text-light'>Project management is a discipline that involves planning, organizing, securing, managing, leading, and controlling resources to achieve specific goals</p>
                                <p className='text-paragraph text-light font-normal'>20 mins ago</p>
                            </div>
                            <div className='px-8 py-6'>
                                <p className='text-theme-color font-normal text-paragraph'>BOARD COMMITTEE</p>
                                <h2 className='text-dark font-semibold text-large tracking-wide '>80th Meeting of Board Committee</h2>
                                <p className=' text-medium font-normal text-light'>Project management is a discipline that involves planning, organizing, securing, managing, leading, and controlling resources to achieve specific goals</p>
                                <p className='text-paragraph text-light font-normal'>20 mins ago</p>
                            </div>
                                 <div className='px-8 py-6'>
                                <p className='text-theme-color font-normal text-paragraph'>BOARD COMMITTEE</p>
                                <h2 className='text-dark font-semibold text-large tracking-wide '>80th Meeting of Board Committee</h2>
                                <p className=' text-medium font-normal text-light'>Project management is a discipline that involves planning, organizing, securing, managing, leading, and controlling resources to achieve specific goals</p>
                                <p className='text-paragraph text-light font-normal'>20 mins ago</p>
                            </div>
                        </div>
                    </div>
                    <div className='rounded-lg border-transparent border overflow-hidden'>
                        <div className="bg-theme-color w-full text-white py-2 text-heading font-semibold px-4">Past</div>
                        <div className="flex flex-col w-full mt-2">
                            <div className='px-8 py-6 bg-hover-bg'>
                                <p className='text-theme-color font-normal text-paragraph'>BOARD COMMITTEE</p>
                                <h2 className='text-dark font-semibold text-large tracking-wide '>80th Meeting of Board Committee</h2>
                                <p className=' text-medium font-normal text-light'>Project management is a discipline that involves planning, organizing, securing, managing, leading, and controlling resources to achieve specific goals</p>
                                <p className='text-paragraph text-light font-normal'>20 mins ago</p>
                            </div>
                            <div className='px-8 py-6'>
                                <p className='text-theme-color font-normal text-paragraph'>BOARD COMMITTEE</p>
                                <h2 className='text-dark font-semibold text-large tracking-wide '>80th Meeting of Board Committee</h2>
                                <p className=' text-medium font-normal text-light'>Project management is a discipline that involves planning, organizing, securing, managing, leading, and controlling resources to achieve specific goals</p>
                                <p className='text-paragraph text-light font-normal'>20 mins ago</p>
                            </div>
                                 <div className='px-8 py-6'>
                                <p className='text-theme-color font-normal text-paragraph'>BOARD COMMITTEE</p>
                                <h2 className='text-dark font-semibold text-large tracking-wide '>80th Meeting of Board Committee</h2>
                                <p className=' text-medium font-normal text-light'>Project management is a discipline that involves planning, organizing, securing, managing, leading, and controlling resources to achieve specific goals</p>
                                <p className='text-paragraph text-light font-normal'>20 mins ago</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Notifications
