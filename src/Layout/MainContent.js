import React from 'react'
import FullScreen from '../components/FullScreen'
import Styles from "../styles.module.css"
function MainContent() {
  const paragraph = "Hi I'm Hamad"
  const pfp = "/pfp.jpg"
  
  const title = "A Software Engineer"
  const title2 = "Specialized in Front-End"
  return (
    <FullScreen color={"purple"} >
      <div id='home' >
        <div className={`${Styles.main} d-flex justify-content-center align-items-center text-center m-0`}>
          <div>
            <img className={`${Styles.pfp} img-thumbnail`} src={pfp} alt='pfp' />
            <p className='fs-3 text-light'>{paragraph}</p>
            <h1 className="text-light" >{title}</h1>
            <h1 className="text-light pb-4" >{title2}</h1>
            <a className='m-1' href='https://www.github.com/hamadullah16/' target='_blank' rel='noreferrer'>
              <button className='btn btn-dark'>GitHub</button>
            </a>
            <a className='m-1' href='https://www.linkedin.com/in/hamadullah16/' target='_blank' rel='noreferrer'>
              <button className='btn btn-dark'>Linkedin</button>
            </a>
          </div>
        </div>
      </div>
    </FullScreen>
  )
}

export default MainContent
