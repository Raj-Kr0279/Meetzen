import React from 'react'
import { AiOutlineEye, AiOutlineSearch } from 'react-icons/ai'
import { BsClock } from 'react-icons/bs'
import { MdArrowBackIosNew } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'

const FinalMinutes = () => {

    const navigate = useNavigate()
    const finalMinutes = Array.from({ length: 12 }, (_, index) => (
        <div key={index} className="flex hover:bg-hover-bg justify-between items-center p-4 border-b">
            <div>
                <p className=' text-pargraph text-theme-color leading-none font-normal'>AUDIT COMMITTEE</p>
                <h1 className='text-dark leading-none pt-2 pb-1.5  font-semibold text-large'>Document Name</h1>
                <p className='text-paragraph font-medium text-light' >Date & Time: <span className='text-theme-color tracking-wide text-mediumCaption font-semibold pl-1'>03/04/2023 09:45 AM</span></p>
            </div>
            <div className='flex items-end'>
                <div className="flex items-center justify-end gap-4">
                    <span className='flex items-center justify-end gap-1 text-theme-color font-medium underline cursor-pointer'><AiOutlineEye />View Document</span>
                    <button className="text-white bg-theme-color text-paragraph font-medium rounded-[4px] py-2 px-3" onClick={()=>navigate("/compare-documents")}>Compare with Draft Minutes</button>
                </div>
            </div>
        </div>

    ))
    return (
        <>
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
            <p className='text-dark absolute top-4 left-1/2 -translate-x-1/2 text-mediumSubheading font-semibold'>Final Minutes</p>



            <div className="w-full px-10 flex flex-col ">
                {/* filters and search section  */}
                <div className=' bg-hover-bg px-4 py-2  flex justify-between rounded-md mt-6 mb-4 items-center'>
                    <h1 className='text-dark font-semibold text-large'>All Final Minutes</h1>
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

                <div className="h-[70dvh] mt-4 w-full border-borderInput border rounded-md overflow-y-scroll">
                    {finalMinutes}
                </div>
            </div>
        </>
    )
}

export default FinalMinutes
