import React from 'react'
import FullScreen from './FullScreen'
import Styles from "../styles.module.css"
function MainContent() {
  const paragraph = "Hi I'm Hamad"
  const pfp = "/pfp.jpg"
  const title = "A Software Engineer"
  const title2 = "Specialized in Front-End"
  return (
    <FullScreen color={"purple"} >
      <div id='home' >
        <div className={`container-sm ${Styles.main} d-flex justify-content-center align-items-center text-center`}>
          <div>
            <img className={`${Styles.pfp} img-thumbnail`} src={pfp} alt='pfp' />
            <p className='fs-3 text-light'>{paragraph}</p>
            <h1 className="text-light" >{title}</h1>
            <h1 className="text-light" >{title2}</h1>
          </div>
        </div>
      </div>
    </FullScreen>
  )
}

export default MainContent
