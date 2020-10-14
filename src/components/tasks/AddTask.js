// import React, { useState } from "react";
// import { addTask } from "../actions/taskActions";
// import { connect } from "react-redux";

// const AddTask = ({ addTask }) => {
//   const [task, setTask] = useState("");

//   const handleChange = (e) => {
//     switch (e.target.id) {
//       case "task":
//         setTask(e.target.value);
//         return;
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log({ task });
//     addTask({ task, checked: false });
//     setTask("");
//   };

//   return (
//     <form
//       className="container text border border-light bg-light my-3 p-3"
//       autoComplete="off"
//       onSubmit={handleSubmit}
//     >
//       <div className="form-group">
//         <label htmlFor="password">
//           {" "}
//           <h4>Add Task </h4>
//         </label>
//         <input
//           type="text"
//           className="form-control"
//           id="task"
//           value={task}
//           onChange={handleChange}
//         />
//       </div>
//       <button type="submit" className="btn btn-primary">
//         Add
//       </button>
//     </form>
//   );
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     addTask: (task) => dispatch(addTask(task)),
//   };
// };

// export default connect(null, mapDispatchToProps)(AddTask);
