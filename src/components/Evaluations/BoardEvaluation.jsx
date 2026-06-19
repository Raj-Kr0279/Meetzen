import React from 'react'
import { AiOutlineEye, AiOutlineSearch } from 'react-icons/ai'
import { BsClock } from 'react-icons/bs'
import { MdArrowBackIosNew } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'

const BoardEvaluation = () => {
  const drafts = Array.from({ length: 12 }, (_, index) => (
    <div key={index} className="flex justify-between p-4 border-b">
      <div>
        <p className=' text-pargraph text-theme-color leading-none font-normal pb-2'>AUDIT COMMITTEE</p>
        <h1 className='text-dark leading-none pt-1 pb-2 font-semibold text-large'>Stakeholders Relationship Committee</h1>
        <p className='text-paragraph font-medium text-light' >Evaluation for: <span className='text-theme-color text-mediumCaption font-semibold pl-1'>MR. RAMCHARAN DAS (Managing Director)</span></p>
        <p className='text-paragraph font-medium text-light' >Due Date: <span className='text-theme-color text-mediumCaption font-semibold pl-1'>20/06/23</span></p>
      </div>
      <div className='flex flex-col items-end'>
        <div className="flex gap-1 items-center">
          <p className='text-paragraph font-medium text-light' >Questions Attempted: 4/5</p>
          <p className='text-paragraph font-medium text-light' >Marks Obtained: 4/5</p>
        </div>
        <div className="flex items-center pt-1 gap-4">
          <span className='flex items-center text-action font-medium p-0.5 bg-actionBg'><BsClock className='mr-2' />Pending 15 days left</span>
          <button className='py-2 px-6 text-paragraph font-medium bg-theme-color text-white rounded-[4px]' onClick={()=>navigate("/final-meeting-minutes")}>Submit Feedback</button>
        </div>

      </div>
    </div>

  ))
  const navigate = useNavigate()
  return (
    <>
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
      <p className='text-dark absolute top-3 left-1/2 -translate-x-1/2 text-mediumSubheading font-semibold'>Evaluation & Service</p>



      <div className="w-full px-10 mt-[40px] twok:mt-[60px] max-h-[calc(100dvh-40px)] flex flex-col h-screen overflow-y-scroll">
        {/* filters and search section  */}

        <div className=' bg-hover-bg px-4 py-4  flex justify-between rounded-md mt-6 mb-4 items-center'>
          <h1 className='text-dark font-semibold text-large'>All Evaluations</h1>
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
          {drafts}
        </div>
      </div>
    </>
  )
}

export default BoardEvaluation
