import React from 'react'
import map from '../../Assets/map.png'

const ViewMapModal = ({setModal}) => {
  return (
    <>
    <div className="fixed z-20 top-0 left-0 w-full h-screen bg-overlay" onClick={() => setModal(false)}></div>
    <div className="absolute  z-30 top-1/2 bg-white left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-2xl shadow-md p-6">
<div className="flex justify-between w-full items-center">
    <h1 className='text-prof font-semibold text-mediumSubheading'>Park Street</h1>
    <span className='text-mapDistance text-semibold text-xs'>4 Km</span>
</div>
    <img src={map} alt="" className='w-full' />
    </div>
    </>
  )
}

export default ViewMapModal
