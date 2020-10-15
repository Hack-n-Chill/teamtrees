import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect, isLoaded, isEmpty } from "react-redux-firebase";
import Spinner1 from "../../components/Spinner/Spinner1";
import SubProj from "./SubProj";

const Details = ({ data }) => {
  console.log(data);
  if (!isLoaded(data)) return <Spinner1 />;
  if(isEmpty(data)) return <div>No records found!</div>;
  if (!(data && data.length > 0)) return null;
  return (
    <>
      {data &&
        data.length > 0 &&
        data.map((x) => <SubProj data={x} key={x.id} />)}
    </>
  );
};

const mapStateToProps = (state) => {
  //   console.log(state);
  const data = state.firestore.ordered.proj;
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
      collection: "proj",
      where: ["authorID", "==", ownProps.uid],
      orderBy: ["date", "desc"],
    },
  ])
)(Details);

// export default Tasks;
