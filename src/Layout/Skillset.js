import React from 'react'
import FullScreen from '../components/FullScreen'
import TechStack from '../components/TechStack'

function Skillset({cert}) {
    return (
        <div>
            <FullScreen color={'purple'}>
                <TechStack cert={cert} />
            </FullScreen>
        </div>
    )
}

export default Skillset