import React from 'react';
import {VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css'; // $ npm i react-vertical-timeline-component
import BookmarkIcon from '@material-ui/icons/Bookmark';

const Institute = ({info}) => {

    // let name = props.info.name;
    // let start = props.info.start;
    // let end = props.info.end;
    // let summary = props.info.summary;


    return (
        <div>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date= {`${info.startDate} - ${info.endDate}`}
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={<BookmarkIcon />}
            >
                <h3 className="vertical-timeline-element-title">{info.instiname}</h3>
                <p>
                {info.summary}
                </p>
                <p>
                {info.major}
                </p>
                <p>
                {info.location}
                </p>
            </VerticalTimelineElement>
        </div>
    );
}

export default Institute;