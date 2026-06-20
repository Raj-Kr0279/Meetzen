import React from 'react'
import FooterText from '../FooterText/FooterText'

const RightColumn = ({children}) => {
  return (
   <div className="right-column relative p-4 md:p-16 flex flex-col md:justify-center md:items-center w-full">{children}
           <div className="md:absolute text-smallSubheading text-light bottom-4 text-center">
  <FooterText/>
   </div>
   </div>
  )
}

export default RightColumn
