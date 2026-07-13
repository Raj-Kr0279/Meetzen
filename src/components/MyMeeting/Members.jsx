import React from 'react'
import prof from '../../assets/profileDummy.png'
import { useNavigate } from 'react-router-dom'

const Members = () => {
  const navigate = useNavigate()
    const membercards = Array.from({ length: 12 }, (_, index) => (
        <div key={index} className="member__card break-words bg-white flex rounded-lg flex-col items-center text-center p-4">
            <img src={prof} className='rounded-full w-1/3 h-1/3' alt="" />
            <h1 className='text-memberCardHeader text-mediumHeading font-bold'>Madelyn Mango</h1>
            <p className='text-gray50 py-0.5 rounded-sm mb-2 w-full bg-hover-bg '>Chairman</p>
            <div className='flex flex-col'>
                <p className='text-graySecondary text-xs font-medium'>Chairman:</p>
                <h5 className='text-black pb-1.5 font-semibold text-xs'>Board Meeting</h5>
                <p className='text-foreground text-xs font-normal'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt consequatur quam eligendi placeat saepe corrupti facilis ab, esse modi natus.</p>
                <span className='text-primary underline font-bold pt-3 cursor-pointer' onClick={()=>navigate("/view-member-profile")}>View profile</span>
            </div>
        </div>
    ))
  return (
    <div className='grid member__cards__wrp w-full grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] h-[95%] overflow-y-auto pb-6 gap-4'>
       {membercards}
      
    </div>
  )
}

export default Members
