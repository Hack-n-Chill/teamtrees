import React from 'react'
import CardsProj from "./CardsProj"
import {Button} from "reactstrap"

const Projects = ({info}) => {
    return (
        <>
        <Button color="warning" className="mb-1 mt-1">Projects</Button>
         <CardsProj info={info}/>
         </>
    )
}

export default Projects
