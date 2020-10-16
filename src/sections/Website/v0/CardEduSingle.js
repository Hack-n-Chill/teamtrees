import React from 'react'
import { Card, CardHeader,CardBody,
    CardTitle, CardText } from 'reactstrap';
const CardEduSingle = ({info}) => {
    const {instiname, startDate, endDate, location, major, summary} = info
    return (
        <div>
        <Card>
        <CardHeader><h4>{instiname}</h4></CardHeader>
        <CardBody>
    <CardTitle>{startDate} - {endDate}</CardTitle>
    <CardText>{location}</CardText>
    <CardText>{major}</CardText>
    <CardText>{summary}</CardText>
          
        </CardBody>        
      </Card>
        </div>
    )
}

export default CardEduSingle