import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect, isLoaded } from "react-redux-firebase";
import Generic from "../../components/Spinner/Generic"
import SubEdu from "./SubEdu";

const Details = ({ data }) => {
  console.log(data);
  if (!isLoaded(data)) return <Generic />;
  if (!(data && data.length > 0)) return null;
  return (
    <>
      {data &&
        data.length > 0 &&
        data.map((x) => <SubEdu data={x} key={x.id} />)}
    </>
  );
};

const mapStateToProps = (state) => {
  //   console.log(state);
  const data = state.firestore.ordered.edu;
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
      collection: "edu",
      where: ["authorID", "==", ownProps.uid],
      orderBy: ["date", "desc"],
    },
  ])
)(Details);

// export default Tasks;
