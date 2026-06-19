import React from 'react'

const RightColumn = ({children}) => {
  return (
   <div className="right-column relative p-4 md:p-16 flex flex-col md:justify-center md:items-center w-full">{children}
           <div className="md:absolute text-smallSubheading text-light bottom-4 text-center">
   www.pro-cs.in | contact@pro-cs.in | ProCS - Digital Board Meeting
   </div>
   </div>
  )
}

export default RightColumn
