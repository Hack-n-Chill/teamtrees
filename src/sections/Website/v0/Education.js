import React from 'react'
import CardsEdu from "./CardsEdu"
import {Button, Alert} from "reactstrap"

const Education = ({info}) => {
    
    return (
        <>
        <Button color="dark" className="mb-1">Education</Button>
        {(!(info && info.length)) ? <Alert color="dark"> Education Section not filled yet! </Alert>: <CardsEdu info={info}/>}
         
         </>
    )
}

export default Education
