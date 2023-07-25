import React from 'react'
import Styles from "../styles.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const project = [
    { name: "Express API", image: "/Vision.jpg", description: "Express.js API with CRUD features. MongoDB Database. HTML, CSS, EJS, Bootstrap5 Frontend.", link: "https://www.github.com/hamadullah16/ExpressAPI" },
    { name: "Resume - React App", image: "/NoThumbnail.jpg", description: "Single page Resume application based on React.", link: "https://resume-react-app.vercel.app" },
    { name: "Title", image: "/NoThumbnail.jpg", description: "Description", link: "" }
]

function ProjectContainer() {

    const renderProjects = project.map((item,index) => (<div key={index} className={`${Styles.flexItem} m-2 rounded bg-light shadow text-light`}>
        <img src={item.image} className={`${Styles.projectImage} img-thumbnail`} alt='project banner'/>
        <h1 className='fs-3 py-1 px-2 text-dark'>{item.name}</h1>
        <p className='px-2 text-dark'>{item.description}</p>
        <a className={`${Styles.a} px-2 text-dark`} href={item.link} target='_blank' rel='noreferrer'>Read more <FontAwesomeIcon icon={faArrowRight} /></a>
    </div>))
    return (
        <div className={`${Styles.main}`}>
            <h1 className='text-light p-3 text-center'>Featured Projects</h1>
            <div className={`container d-sm-flex flex-wrap justify-content-evenly`}>
                
                    {renderProjects}
                
            </div>
        </div>
    )
}

export default ProjectContainer
