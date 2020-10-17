import React from 'react';
import EachProject from './eachProject';
import {Alert} from "reactstrap"

const Projects = ({info}) => {  
    console.log(info)
    return (
      <>
      {(!(info && info.length)) ? <Alert color="danger"> Projects Section not filled yet! </Alert>:
        <div id="projects">
        <h3 className="text-center display-4 mb-5">PROJECTS</h3>
        <div className="row">
          {info.map((x, index) => (
            <EachProject info={x} key={x.id} index={index}></EachProject>
          ))}
        </div>
      </div>
    }
    </>
    );
};

export default Projects;