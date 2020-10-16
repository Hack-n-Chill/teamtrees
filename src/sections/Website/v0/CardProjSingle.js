import React from 'react'
import { Card, Button, CardHeader, CardFooter, CardBody,
    CardTitle, CardText } from 'reactstrap';
const CardProjSingle = ({info}) => {
    const {name, summary, tech, link, startDate} = info
    return (
        <div>
        <Card>
        <CardHeader><h4>{name}</h4></CardHeader>
        <CardBody>
            <CardText>{summary}</CardText>
            <CardTitle>{startDate}</CardTitle>
            <CardText>{tech}</CardText>    
            <CardText>{link}</CardText>          
        </CardBody>        
      </Card>
        </div>
    )
}

export default CardProjSingle