import React, { useState } from "react";
import { addProj } from "../../components/actions/taskActions";
import { connect } from "react-redux";

const Form = ({ addProj, data, uid }) => {
  
  const [name, setName] = useState("")
  const [tech, setTech] = useState("")
  const [link, setLink] = useState("")
  const [startDate, setStartDate] = useState("")
  const [summary, setSummary] = useState("");

  const handleChange = (e) => {
    switch (e.target.id) {
      case "name":
        setName(e.target.value)
        return 
      case "summary":
        setSummary(e.target.value);
        return;
      case "tech":
        setTech(e.target.value)
        return
      case "link":
        setLink(e.target.value)
        return
      case "startDate":
        setStartDate(e.target.value)
        return
      default:
        return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ summary, startDate, name, tech, link });
    addProj({ summary, startDate, name, tech, link });
    setLink("")
    setName("")
    setTech("")
    setSummary("");
    setStartDate("")     
  };
  return (
    <form
      className="container text border border-light bg-light my-3 p-3"
      autoComplete="off"
    >
      <div className="form-group">
        <label htmlFor="instiname">
          <h4>Enter Project name </h4>
        </label>
        <input
          type="text"
          className="form-control"
          id="name"
          value={name}
          onChange={handleChange}
        />
      </div>

      <div className="form-inline my-1">
        <div className="form-group mb-2">
          <label htmlFor="location">
            <h4>Year </h4>
          </label>
          <input
            type="text"
            className="form-control mx-2"
            id="startDate"
            style={{width: "30%"}}
            value={startDate}
            onChange={handleChange}
          />
        </div>     
      </div>

      <div className="form-group">
        <label htmlFor="summary">
          <h4>About the Project</h4>
        </label>
        <textarea
          className="form-control"
          id="summary"
          rows="4"
          value={summary}
          onChange={handleChange}
        ></textarea>
      </div>

      <div className="form-group">
        <label htmlFor="location">
          <h4> Technologies Used </h4>
        </label>
        <input
          type="text"
          className="form-control"
          id="tech"
          style={{width: "75%"}}
          value={tech}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="location">
          <h4>Link to Project </h4>
        </label>
        <input
          type="text"
          className="form-control"
          id="link"
          style={{width: "75%"}}
          value={link}
          onChange={handleChange}
        />
      </div>           
      <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
        Submit
      </button>
    </form>
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

const mapDispatchToProps = (dispatch) => {
  return {
    addProj: (task) => dispatch(addProj(task)),    
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
