import React from 'react';
import { Card, CardHeader, CardBody, CardText, CardFooter } from 'reactstrap';
  

const EachProject = ({info}) => { 
  return (
    <div className="m-3">
        <Card className="text-center" style={{width: "27rem"}}>
            <CardHeader tag="h3">{info.name}</CardHeader>
            <CardBody>
            <CardText>{info.startDate}</CardText>
                <CardText>{info.summary}</CardText>
            </CardBody>
            <CardFooter><a href={info.link}>{info.link}</a></CardFooter>
        </Card>
    </div>
  );
}

export default EachProject;