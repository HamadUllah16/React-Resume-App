import React from 'react'
import Styles from "../styles.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const project = [
    { name: "Express API", image: "/Thumbnail_Express.jpg", description: "Express.js API with CRUD features. MongoDB Database. HTML, CSS, EJS, Bootstrap5 Frontend.", release: "", repo: "https://github.com/HamadUllah16/React-Resume-App", deployed: true },
    { name: "Portfolio App", image: "/Thumbnail_Resume.jpg", description: "Single page portfolio application built in React & Bootstrap.", release: "https://resume-react-app.vercel.app", repo: "https://github.com/HamadUllah16/React-Resume-App", deployed: true },
    { name: "Title", image: "/NoThumbnail.jpg", description: "Description", release: "", repo: "", deployed: false }
]

function ProjectContainer() {

    const renderProjects = project.map((item, index) => (<div key={index} className={`${Styles.flexItem} mb-5 mt-2 text-dark px-2 rounded bg-light shadow text-light`}>
        <img src={item.image} className={`${Styles.projectImage} img-thumbnail mt-2`} alt='project banner' />
        <h1 className='fs-3 py-1 text-dark text-center'>{item.name}</h1>
        <p className='text-dark'>{item.description}</p>
        <div> {item.deployed ? <div className='d-inline'><p className='d-inline fw-bold'>Deployment:</p> <a href={item.repo} target='_blank' rel='noreferrer'><FontAwesomeIcon icon={faGithub} style={{color:"#000000"}} /></a> </div> : <p className='text-dark'>Not deployed yet</p>}</div>
        {item.release==="" ? <p className='fw-bold'>Not Released Yet!</p> : <div><a className={`${Styles.a} text-dark`} href={item.release} target='_blank' rel='noreferrer'><b>Released:</b> Read more <FontAwesomeIcon icon={faArrowRight} /></a></div> }
        
        

    </div>))
    return (
        <div>
            <h1 className='text-light py-3 text-center'>Featured Projects</h1>
            <div className={`container d-sm-flex flex-wrap justify-content-evenly`}>

                {renderProjects}

            </div>
        </div>
    )
}

export default ProjectContainer
