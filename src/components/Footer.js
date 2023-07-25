import React from 'react'
import FullScreen from './FullScreen'

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div>
      <FullScreen color={"dark"}>
<div className='container d-flex justify-content-center text-light '>
  <p className='m-0 p-3'>Hamad - {currentYear}</p>

</div>
      </FullScreen>
    </div>
  )
}
