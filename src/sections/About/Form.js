import React, { useState } from "react";
import { addAbout, updateAbout } from "../../components/actions/taskActions";
import { connect } from "react-redux";

const Form = ({ addAbout, data, uid, updateAbout }) => {
  const [fullname, setFullname] = useState("");
  const [summary, setSummary] = useState("");

  const handleChange = (e) => {
    switch (e.target.id) {
      case "fullname":
        setFullname(e.target.value);
        return;
      case "summary":
        setSummary(e.target.value);
        return;
      default:
        return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log({ fullname, summary });
    if (data && data.length > 0) updateAbout({ data, fullname, summary });
    else addAbout({ fullname, summary });
    setFullname("");
    setSummary("");
  };
  return (
    <form
      className="container text border border-light bg-light my-3 p-3"
      autoComplete="off"
    >
      <div className="form-group">
        <label htmlFor="password">
          {" "}
          {data && data.length > 0 ? (
            <h4>Update Full Name </h4>
          ) : (
            <h4>Enter Full Name </h4>
          )}
        </label>
        <input
          type="text"
          className="form-control"
          id="fullname"
          value={fullname}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="summary">
          {data && data.length > 0 ? (
            <h4>Update Summary</h4>
          ) : (
            <h4>Short Summary about Yourself</h4>
          )}
        </label>
        <textarea
          className="form-control"
          id="summary"
          rows="4"
          value={summary}
          onChange={handleChange}
        ></textarea>
      </div>

      <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
        Submit
      </button>
    </form>
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

const mapDispatchToProps = (dispatch) => {
  return {
    addAbout: (task) => dispatch(addAbout(task)),
    updateAbout: (task) => dispatch(updateAbout(task)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
