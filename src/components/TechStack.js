import React from 'react'
const skills = ['JavaScript', 'React', 'Express', 'MongoDB', 'Bootstrap5', 'Figma', 'Python', 'Java', 'MySQL']

function Skillset({ cert }) {
    return (
        <div>
            <section className={`container pb-5`}>
                <section className='row'>
                    <section className='col p-4'>
                        <h1 className='text-light m-0 p-3 text-center'>Tech Stack</h1>
                        <section className='row pt-5 justify-content-center align-items-center'>

                            {skills.map((item) => {
                                return (
                                    <article className='col-lg-6 p-2 bg-dark text-center socialsBox text-light m-2 rounded shadow'><h5 className='m-0'>{item}</h5></article>
                                )
                            })}
                        </section>
                    </section>
                    <section className='col p-4 text-center'>
                        <h1 className='text-light m-0 p-3 text-center'>Certifications</h1>
                        <img className='img-fluid mt-5 cert' src={cert} />
                    </section>
                </section>
            </section>
        </div>
    )
}

export default Skillset
