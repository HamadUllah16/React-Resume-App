import React from 'react'
import FullScreen from '../components/FullScreen'
import Styles from '../styles.module.css'

function Services() {
  return (
    <>
    <FullScreen color={'dark'}>
        <section className={`container ${Styles.main} py-5`}>
          <h1 className='text-light text-center'>
            Services
          </h1>
          <p className='text-light'>Soon to be added</p>
        </section>
    </FullScreen>
      
    </>
  )
}

export default Services
