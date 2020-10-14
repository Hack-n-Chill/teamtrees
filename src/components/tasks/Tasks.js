import React from "react";
import Task from "./Task";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";

const Tasks = ({ tasks }) => {
  return (
    <table className="table table-dark my-3 p-3">
      <thead>
        <tr>
          <th scope="col">Task</th>
          <th scope="col">Added On</th>
          <th scope="col">Status</th>
          <th scope="col">Delete</th>
        </tr>
      </thead>
      {tasks && tasks.map((x) => <Task task={x} key={x.id} />)}
    </table>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  const tasks = state.firestore.ordered.tasks;
  const uid = state.firebase.auth.uid;
  return {
    tasks,
    uid,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect((ownProps) => [
    {
      collection: "tasks",
      where: ["authorID", "==", ownProps.uid],
      orderBy: ["date", "desc"],
    },
  ])
)(Tasks);

// export default Tasks;
