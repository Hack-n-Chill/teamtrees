import React from 'react'
import Jumbotron from "./Jumbotron"
import {Alert} from "reactstrap"

const About = ({info, social}) => {
    if(!(info && info.length)) return <Alert color="danger"> About Section not filled yet! </Alert>
    return (
        <>
            <Jumbotron info={info} social={social}/>
        </>
    )
}

export default About
