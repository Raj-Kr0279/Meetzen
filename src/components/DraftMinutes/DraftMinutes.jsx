import React, { useState } from 'react'
import { AiOutlineEye, AiOutlineSearch } from 'react-icons/ai'
import { BsClock } from 'react-icons/bs'
import { MdArrowBackIosNew } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import SubmitPopup from './SubmitPopup'

const DraftMinutes = () => {
  const [submitDraftModal, setSubmitDraftModal] = useState(false)
  const [isSaveDraft, setSaveDraft] = useState(false)
      
  const navigate = useNavigate()
  const drafts = Array.from({ length: 12 }, (_, index) => (
    <div key={index} className="flex justify-between p-4 border-b">
    <div>
      <p className=' text-pargraph text-theme-color leading-none font-normal'>AUDIT COMMITTEE</p>
      <h1 className='text-dark leading-none pt-1 font-semibold text-large'>Stakeholders Relationship Committee</h1>
      <p className='text-theme-color font-medium pt-1.5'>Document Name</p>
      <p className='text-paragraph font-medium text-light' >Date <span className='text-theme-color text-mediumCaption font-semibold pl-1'>03/04/2023 09:45 AM</span></p>
        <button className='py-2 mt-4 px-6 text-paragraph font-medium text-success border border-success rounded-[4px]'>Approved</button>
    </div>
    <div className='flex flex-col items-end'>
      <div className="flex items-center justify-end gap-4">
          <button className='py-1.5 mt-4 px-6 text-paragraph font-medium text-theme-color border border-theme-color rounded-[4px]' onClick={()=>{setSaveDraft(true) ; setSubmitDraftModal(true)}}>Save</button>
          <button className="text-white mt-4 bg-theme-color text-paragraph font-semibold rounded-[4px] py-1.5 px-6" onClick={()=>setSubmitDraftModal(true)}>Submit</button>
      </div>
      <span className='flex items-center justify-end gap-1 text-theme-color font-medium mt-4 underline' onClick={()=>navigate("/view-draft-document")}><AiOutlineEye />View Document</span>

    </div>
  </div>

  ))
  return (
    <>
    {submitDraftModal && <SubmitPopup modal={submitDraftModal} setModal={setSubmitDraftModal} isSaveDraft={isSaveDraft} setSaveDraft={setSaveDraft} />}
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
  <p className='text-dark absolute top-4 left-1/2 -translate-x-1/2 text-mediumSubheading font-semibold'>Draft Minutes</p>



  <div className="w-full px-10 flex flex-col ">
    {/* filters and search section  */}
    <div className=' bg-hover-bg px-4 py-2  flex justify-between rounded-md mt-6 mb-4 items-center'>
          <h1 className='text-dark font-semibold text-large'>All Final Minutes</h1>
          <div className="flex items-center gap-3">
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

export default DraftMinutes
