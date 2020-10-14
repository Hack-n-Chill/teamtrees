import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect, isLoaded } from "react-redux-firebase";
import Spinner1 from "../../components/Spinner/Spinner1";
import SampleModal from "./SampleModal";

const Details = ({ data }) => {
  console.log("hi from about", data);
  if (!isLoaded(data)) return <Spinner1 />;
  if (!(data && data.length > 0)) return null;

  const toggleModal = () => {};

  return (
    <div className="card">
      <div className="card-header bg-dark text-white">Your Data</div>
      <div className="card-body">
        <div className="row">
          <div className="col col-lg-10">
            <h5 className="card-title">{data[0].fullname}</h5>
            <p className="card-text">{data[0].summary}</p>
          </div>
          <div className="col col-lg-2">
            <SampleModal data={data} />
          </div>
        </div>
      </div>
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
