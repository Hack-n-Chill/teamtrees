import React from 'react'
import { Card,  CardHeader, CardBody,
    CardTitle, CardText } from 'reactstrap';
const CardExpSingle = ({info}) => {
    const {company, designation,location, startDate, summary} = info
    return (
        <div>
        <Card>
        <CardHeader><h4>{company}</h4></CardHeader>
        <CardBody>
        <CardText>{designation}</CardText>
    <CardTitle>{startDate}</CardTitle>
    <CardText>{location}</CardText>    
    <CardText>{summary}</CardText>
          
        </CardBody>        
      </Card>
        </div>
    )
}

export default CardExpSingle