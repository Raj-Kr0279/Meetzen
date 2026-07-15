import React from 'react'

const MemberNewsUpdates = () => {
  const news = Array.from({ length: 10 }, (_, index) => (
    <div key={index} className='break-words bg-white py-6 px-8 hover:bg-newsHover transition-all'>
        <h1 className='text-primary font-semibold text-2xl'>Sales achieved</h1>
        <p className='text-light font-normal text-base'>Lorem ipsum dolor sit amet consectetur. Donec laoreet molestie semper sed urna. Lorem ipsum dolor sit amet consectetur. Donec laoreet molestie semper sed urna.</p>
        <span className='text-placeholder font-normal text-base'>20 mins ago</span>
    </div>
  ))
  return (
    <div className="news pb-4 flex flex-col gap-2">
{news}
        </div>
  )
}

export default MemberNewsUpdates
