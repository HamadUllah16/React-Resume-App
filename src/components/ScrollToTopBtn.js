import React, { useEffect, useState } from 'react'
import Styles from "../styles.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

function ScrollToTopBtn() {
    const [showBtn, setShowBtn] = useState(false);


    useEffect(()=>{
        window.addEventListener("scroll", ()=>{
            if(window.scrollY>200){
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
         {showBtn &&
         <button className={`${Styles.btnScroll}`} onClick={scrollToTop}> <FontAwesomeIcon  icon={faArrowUp} /></button> }
    </div>
  )
}

export default ScrollToTopBtn
