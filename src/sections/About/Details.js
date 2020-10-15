import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect, isLoaded } from "react-redux-firebase";
import Spinner1 from "../../components/Spinner/Spinner1";
import SampleModal from "./SampleModal";
import DeleteModal from "./DeleteModal"

const Details = ({ data }) => {
  console.log("hi from about", data);
  if (!isLoaded(data)) return <Spinner1 />;
  if (!(data && data.length > 0)) return null;

  const toggleModal = () => {};

  return (
    <div className="card m-2 p-2" style={{width: "75%"}}>     
     
     <div className=" card-header bg-dark text-white">Your Data <SampleModal data={data} /> <DeleteModal data={data} /> </div>        
      <ul className="list-group list-group-flush">        
      <li className="list-group-item"><h3>{data[0].fullname}</h3></li>
      <li className="list-group-item">{data[0].summary}</li>        
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  //   console.log(state);
  const data = state.firestore.ordered.about;
  const uid = state.firebase.auth.uid;
  return {
    data,
    uid,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect((ownProps) => [
    {
      collection: "about",
      where: ["authorID", "==", ownProps.uid],
      orderBy: ["date", "desc"],
    },
  ])
)(Details);

// export default Tasks;
