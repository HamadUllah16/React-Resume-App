import React from 'react'
import Styles from "../styles.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode } from '@fortawesome/free-solid-svg-icons'

function Skillset() {
  return (
    <div>
        <h1 className='text-light m-0 p-3 text-center'>Skillset <FontAwesomeIcon icon={faCode} /></h1>
        <div className={`container ${Styles.skillItems}`}>
            <div className='row'>
                <div className='col bg-light m-2 shadow rounded'>Javascript ES6</div>
                <div className='col bg-light m-2 shadow rounded'>Python</div>
            </div>
            <div className='row'>
                <div className='col bg-light m-2 shadow rounded'>React</div>
                <div className='col bg-light m-2 shadow rounded'>Express JS</div>
            </div>
            <div className='row'>
                <div className='col bg-light m-2 shadow rounded'>Bootstrap</div>
                <div className='col bg-light m-2 shadow rounded'>HTML & CSS</div>
            </div>
        </div>
    </div>
  )
}

export default Skillset
