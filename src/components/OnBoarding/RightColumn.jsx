import React from 'react'
import FooterText from '../FooterText/FooterText'

const RightColumn = ({children}) => {
  return (
   <div className="p-4 flex-1 md:p-16 flex flex-col md:justify-center md:items-center">{children}
           <div className="md:absolute text-xs text-light bottom-4 text-center">
 
   </div>
   </div>
  )
}

export default RightColumn
