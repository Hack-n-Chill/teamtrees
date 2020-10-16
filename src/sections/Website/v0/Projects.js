import React from 'react'
import CardsProj from "./CardsProj"
import {Button, Alert} from "reactstrap"

const Projects = ({info}) => {
    return (
        <>
        <Button color="warning" className="mb-1 mt-1">Projects</Button>
        {(!(info && info.length)) ? <Alert color="warning"> Projects Section not filled yet! </Alert>: <CardsProj info={info}/>}
        
         </>
    )
}

export default Projects
