import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect, isLoaded } from "react-redux-firebase";
import Spinner1 from "../../components/Spinner/Spinner1";
import SubEdu from "./SubEdu";

const Details = ({ data }) => {
  console.log(data);
  if (!isLoaded(data)) return <Spinner1 />;
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
