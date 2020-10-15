import React from "react";
import SampleModal from "./SampleModal"
import DeleteModal from "./DeleteModal"


const SubSocial = ({ data }) => {
  console.log('hi', data)  
  return (
    <div className="card m-2 p-2" style={{width: "75%"}}>     
     
     <div className=" card-header bg-dark text-white">Your Data  <SampleModal data={data} /> <DeleteModal data={data} /> </div>        
      <ul className="list-group list-group-flush">        
        <li className="list-group-item"><h5>Site Name</h5>{data.name}</li>
        <li className="list-group-item"><h5>Profile Link</h5>{data.link}</li>            
      </ul>
    </div>
  );
};

export default SubSocial;

 