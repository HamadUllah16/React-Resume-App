import React from 'react'

function FullScreen({children, color}) {
  return (
    <div className={`${color}`} >
      {children}      
    </div>
  )
}
export default FullScreen
