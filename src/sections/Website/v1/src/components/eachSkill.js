import React from 'react';
import { Card, CardHeader, CardBody, CardText } from 'reactstrap';
  

const EachSkill = (props) => {

    let name = props.info.name;
    let summary = props.info.summary;

  return (
    <div className="m-3">
        <Card className="text-center" style={{width: "27rem"}}>
            <CardHeader tag="h3">{name}</CardHeader>
            <CardBody>
                <CardText>{summary}</CardText>
            </CardBody>
        </Card>
    </div>
  );
}

export default EachSkill;