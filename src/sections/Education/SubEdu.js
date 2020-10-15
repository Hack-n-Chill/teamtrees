import React from "react";
import SampleModal from "./SampleModal"
import DeleteModal from "./DeleteModal"


const SubEdu = ({ data }) => {
  console.log('hi', data)  
  return (
    <div className="card m-2 p-2" style={{width: "75%"}}>     
     
     <div className=" card-header bg-dark text-white">Your Data  <SampleModal data={data} /> <DeleteModal data={data} /> </div>        
      <ul className="list-group list-group-flush">        
        <li className="list-group-item">{data.instiname}</li>
        <li className="list-group-item">{data.location}</li>
        <li className="list-group-item">{data.major}</li>
        <li className="list-group-item">{data.summary}</li>        
      </ul>
    </div>
  );
};

export default SubEdu;

 