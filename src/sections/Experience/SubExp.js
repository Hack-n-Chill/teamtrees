import React from "react";
import SampleModal from "./SampleModal"
import DeleteModal from "./DeleteModal"


const SubExp = ({ data }) => {
  console.log('hi', data)  
  return (
    <div className="card m-2 p-2" style={{width: "75%"}}>     
     
     <div className=" card-header bg-dark text-white">Your Data  <SampleModal data={data} /> <DeleteModal data={data} /> </div>        
      <ul className="list-group list-group-flush">        
        <li className="list-group-item"><h5>Company</h5>{data.company}</li>
        <li className="list-group-item"><h5>Designation</h5>{data.designation}</li>
        <li className="list-group-item"><h5>Location</h5>{data.location}</li>        
        <li className="list-group-item"><h5>Duration</h5>{data.startDate} - {data.endDate}</li>        
        <li className="list-group-item"><h5>Work</h5>{data.summary}</li>        
      </ul>
    </div>
  );
};

export default SubExp;

 