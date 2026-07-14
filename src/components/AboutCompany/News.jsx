import React from 'react'

const News = () => {
    const news = Array.from({ length: 10 }, (_, index) => (
        <div key={index} className=' bg-white py-6 border-border border rounded-md px-8 hover:border-secondary transition-all'>
            <h1 className='text-display-md'>Sales achieved</h1>
            <p className='text-body-lg'>Lorem ipsum dolor sit amet consectetur. Donec laoreet molestie semper sed urna. Lorem ipsum dolor sit amet consectetur. Donec laoreet molestie semper sed urna.</p>
            <span className='text-secondary text-caption'>20 mins ago</span>
        </div>
    ))
  return (
    <div className="news pb-4 flex flex-col gap-2">
{news}
        </div>
  )
}

export default News
