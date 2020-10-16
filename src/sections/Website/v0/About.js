import React from 'react'
import Jumbotron from "./Jumbotron"

const About = ({info, social}) => {
    return (
        <>
            <Jumbotron info={info} social={social}/>
        </>
    )
}

export default About
