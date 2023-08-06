import React from 'react'
import Styles from "../styles.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const project = [
    { name: "Express API", image: "/Thumbnail_Express.jpg", description: "Express.js API with CRUD features. MongoDB Database. HTML, CSS, EJS, Bootstrap5 Frontend.", release: "", repo: "https://github.com/HamadUllah16/ExpressAPI", deployed: true },
    { name: "Portfolio App", image: "/Thumbnail_Resume.jpg", description: "Single page portfolio application built in React & Bootstrap.", release: "https://hamad-portfolio.vercel.app", repo: "https://github.com/HamadUllah16/React-Resume-App", deployed: true },
    { name: "ToDos App", image: "/todo-app.png", description: "A simple ToDos application built in React.", release: "https://hamad-todo.vercel.app", repo: "https://github.com/HamadUllah16/ToDo-App", deployed: true }
]

function ProjectContainer() {

    const renderProjects = project.map((item, index) => (<div key={index} className={`${Styles.flexItem} mb-5 text-dark rounded-3 bg-light shadow text-light`}>
        <div><a href={item.release==="" ? item.repo : item.release} target='_blank' rel='noreferrer'><img src={item.image} className={`rounded-2 ${Styles.projectImage} img-fluid`} alt='project banner' /></a></div>
        <div className='px-2'>
            <h1 className='fs-3 py-1 text-dark text-center'>{item.name}</h1>
            <p className={`text-dark ${Styles.description}`}>{item.description}</p>
            {item.deployed ? <div className='d-inline'><p className='d-inline'>GitHub:</p> <a href={item.repo} target='_blank' rel='noreferrer'><FontAwesomeIcon icon={faGithub} style={{ color: "#000000" }} /></a> </div> : <p className='text-dark'>Not deployed yet</p>}
            {item.release === "" ? <p className='m-0 pb-1' >Pending</p> : <div><a className={`${Styles.a} text-dark`} href={item.release} target='_blank' rel='noreferrer'>Read more <FontAwesomeIcon icon={faArrowRight} /></a></div>}
        </div>

    </div>))
    return (
        <div className='py-2'>
            <h1 className='text-light py-3 text-center'>Featured Projects</h1>
            <div className={`container d-sm-flex flex-wrap justify-content-evenly`}>

                {renderProjects}

            </div>
        </div>
    )
}

export default ProjectContainer
