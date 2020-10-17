import React from 'react';
import { VerticalTimeline}  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css'; // $ npm i react-vertical-timeline-component
import { Jumbotron } from 'reactstrap';
import Company from './company';
import {Alert} from "reactstrap"

const Experience = ({info}) => {
   
    console.log(info)
    return (
        <>
        {(!(info && info.length)) ? <Alert color="info"> Experience Section not filled yet! </Alert>:
        <Jumbotron>
            <div>
                <h2 className = "text-center display-4" id="experience">EXPERIENCE</h2>
                <VerticalTimeline>
                {info.map((x, index) => (
                    <Company info={x} key={x.id} index={index}></Company>
                ))}
                </VerticalTimeline>
            </div>
            </Jumbotron>}
            </>
    )
};

export default Experience;