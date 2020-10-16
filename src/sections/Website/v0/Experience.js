import React from 'react'
import CardsExp from "./CardsExp"
import {Button, Alert} from "reactstrap"

const Education = ({info}) => {
    return (
        <>
        <Button color="success" className="mb-1 mt-1">Experience</Button>
        {(!(info && info.length)) ? <Alert color="success"> Experience Section not filled yet! </Alert>:  <CardsExp info={info}/>}
        
         </>
    )
}

export default Education
