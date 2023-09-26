import React from 'react'
import FullScreen from '../components/FullScreen'
import ProjectContainer from '../components/ProjectContainer'

function Projects() {
  return (
    <div id='projects'>
      <FullScreen color={"dark"}>
        <ProjectContainer />
      </FullScreen>

    </div>
  )
}

export default Projects
