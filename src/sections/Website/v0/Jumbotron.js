import React from 'react';
import { Jumbotron, Button } from 'reactstrap';
import SocialLink from "./SocialLink"

const Example = ({info, social}) => {
  return (
    <div>
      <Jumbotron className="mt-2">
  <h1 className="display-3">Hello, I am {info[0].fullname} !</h1>
        <p className="lead">A very warm welcome to my personal website!</p>
        <hr className="my-2" />
  <p>{info[0].summary}</p>     

      <SocialLink social={social} />
      </Jumbotron>
    </div>
  );
};

export default Example;