import React from 'react'
import Jumbotron from "./Jumbotron"

const About = ({info}) => {
    return (
        <div className="container">
            <Jumbotron info={info}/>
        </div>
    )
}

export default About
