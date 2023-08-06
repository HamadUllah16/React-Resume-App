import React, { useEffect, useState } from 'react'
import Styles from "../styles.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import Fade from 'react-reveal/Fade';

function ScrollToTopBtn() {
    const [showBtn, setShowBtn] = useState(false);


    useEffect(()=>{
        window.addEventListener("scroll", ()=>{
            if(window.scrollY>400){
                setShowBtn(true)

            }
            else{
                setShowBtn(false)
            }
        })
    },[])

    const scrollToTop = ()=>{
        window.scrollTo({
            top:0,
            behavior: 'smooth'
        })
    }
  return (
    <div>
         {
         <Fade opposite when={showBtn}><button className={`${Styles.btnScroll } shadow`} onClick={scrollToTop}> <FontAwesomeIcon  icon={faArrowUp} /></button></Fade>
          }
    </div>
  )
}

export default ScrollToTopBtn
