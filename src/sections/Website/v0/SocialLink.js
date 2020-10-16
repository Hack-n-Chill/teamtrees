import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import SocialItem from "./SocialItem"

const Example = ({social}) => {
  return (
    <ListGroup>      
       {social.map(x => <SocialItem info={x} key={x.id} />)}
    </ListGroup>
  );
}

export default Example;