import React from 'react';
import { VerticalTimeline}  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css'; // $ npm i react-vertical-timeline-component
import Institute from './institute';
import {Alert} from "reactstrap"

const Education = ({info}) => {   

    console.log(info)
    return (
        <>
        {(!(info && info.length)) ? <Alert color="success"> Education Section not filled yet! </Alert>: <div>
            <h2 className = "text-center display-4" id="education">EDUCATION</h2>
            <VerticalTimeline>
            {info.map((x, index) => (
                <Institute info={x} key={x.id} index={index}></Institute>
            ))}
            </VerticalTimeline>
        </div>}
        </>
    )
};

export default Education;