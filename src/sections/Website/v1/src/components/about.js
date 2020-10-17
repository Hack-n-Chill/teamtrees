import React from 'react';
import { Jumbotron} from 'reactstrap';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import {Alert} from "reactstrap"

const About = ({info}) => {   
  console.log(info)
  return (
    <div>
      {(!(info && info.length)) ? <Alert color="warning"> About Section not filled yet! </Alert>: 
      <Jumbotron className="text-center" id="about">
          <h1 className="display-3">{info[0].fullname}</h1>
          <p className="lead">Hi there! , Welcome to my Portfolio Website</p>
          <pre>
            <LinkedInIcon href="#" fontSize="large"></LinkedInIcon>{'         '}
            <GitHubIcon href="#" fontSize="large"></GitHubIcon>{'          '}
            <TwitterIcon href="#" fontSize="large"></TwitterIcon>
          </pre>
          <hr className="my-2" />
          <p>{info[0].summary}</p>
      </Jumbotron>}
    </div>
  );
};

export default About;