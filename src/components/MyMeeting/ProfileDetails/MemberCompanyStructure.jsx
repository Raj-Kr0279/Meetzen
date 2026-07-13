import React, { useState } from 'react'
import prof from '../../../assets/profileDummy.png'
import { FaAngleDown } from 'react-icons/fa';

const MemberCompanyStructure = () => {
  const [selectedFilter, setSelectedFilter] = useState('composition');
  const [isCollapsed, setCollapsed] = useState(true)
  const handleFilterSelection = (filter) => {
    setSelectedFilter(filter);
  };
  const membercards = Array.from({ length: 12 }, (_, index) => (
    <div key={index} className='w-60 rounded-md border flex justify-center items-center flex-col bg-white p-4'>
      <img src={prof} className=' w-12 h-12 rounded-full' alt="" />
      <h1 className='text-memberCardHeader pb-2 text-xs font-semibold'>Madelyn Mango</h1>
      <span className='w-full text-center bg-hover-bg text-foreground my-1 text-smallCaption font0-semibold p-1'>Chairman</span>
    </div>
  ))
  return (
    <>
      <div className='font-semibold flex items-center text-base px-0 overflow-hidden rounded-md h-12 place-items-center'>
        <div className='font-semibold flex items-center text-base px-0 overflow-hidden whitespace-nowrap border rounded-md h-12 place-items-center'>
          <span className={`w-full flex items-center px-4 justify-center h-full border-r ${selectedFilter === 'composition' ? 'bg-primary text-white' : 'bg-white text-primary'}`} onClick={() => handleFilterSelection('composition')}>Committee Composition</span>
          <span className={`w-full flex items-center justify-center h-full px-4 border-r ${selectedFilter === 'structure' ? 'bg-primary text-white' : 'bg-white text-primary'}`} onClick={() => handleFilterSelection('structure')}>Company Structure</span>
        </div>
      </div>

      {
        selectedFilter === "composition" ?
          <>
            <div className="flex flex-col mt-4 mb-6 gap-2">
              <label htmlFor="year" className='text-foreground text-base font-semibold'>Committee Composition</label>
              <select className='py-2.5 px-2.5 bg-white text-foreground text-base w-[19vw] rounded-sm border border-border' name="committee" id="committee">
                <option value="all">Audit Committee</option>
                <option value="board_meetig">Board Meeting</option>
                <option value="audit">Audit</option>
                <option value="src">SRC</option>
              </select>
            </div>
            <div className='grid member__cards__wrp pt-4 w-full grid-cols-[repeat(auto-fit,_minmax(15rem,_1fr))]  pb-6 gap-4'>
              {membercards}
            </div>
          </>

          :

          selectedFilter === "structure" ?
            <>
              <div className='relative mb-6 w-full flex flex-col items-center justify-center'>
                <div className='w-60 rounded-md border flex justify-center items-center flex-col bg-white p-4'>
                  <img src={prof} className=' w-12 h-12 rounded-full' alt="" />
                  <h1 className='text-memberCardHeader pb-2 text-xs font-semibold'>Madelyn Mango</h1>
                  <span className='w-full text-center bg-hover-bg text-foreground my-1 text-smallCaption font0-semibold p-1'>Chairman</span>
                  <p className='bg-[#D7D6FF] cursor-pointer text-compareHead px-3 py-1 rounded-full -translate-x-1/2 left-1/2 flex items-center gap-1 absolute -bottom-3' onClick={() => setCollapsed(!isCollapsed)}>2<FaAngleDown /></p>
                </div>
              </div>
              {isCollapsed &&
                <>
                  <div className='border-r-2 h-8 w-full border-l-2 border-t-2 cards__line border-black'>
                  </div>
                  <div className='grid place-items-center member__cards__wrp pt-4 w-full grid-cols-[repeat(auto-fit,_minmax(15rem,_1fr))]  pb-6 gap-4'>
                    {membercards}
                  </div>
                </>
              }
            </>


            : null
      }
    </>
  )
}

export default MemberCompanyStructure
