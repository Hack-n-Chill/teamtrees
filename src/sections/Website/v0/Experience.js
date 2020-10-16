import React from 'react'
import CardsExp from "./CardsExp"
import {Button} from "reactstrap"

const Education = ({info}) => {
    return (
        <>
        <Button color="success" className="mb-1 mt-1">Experience</Button>
         <CardsExp info={info}/>
         </>
    )
}

export default Education
