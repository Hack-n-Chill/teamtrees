import React, { useState } from "react";
import { addSocial } from "../../components/actions/taskActions";
import { connect } from "react-redux";

const Form = ({ addSocial, data, uid }) => {
  
  const [name, setName] = useState("")  
  const [link, setLink] = useState("")

  const handleChange = (e) => {
    switch (e.target.id) {
      case "name":
        setName(e.target.value)
        return 
      case "link":
        setLink(e.target.value);
        return;       
      default:
        return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, link });
    addSocial({ name, link });
    
    setName("")
    setLink("")
  };
  return (
    <form
      className="container text border border-light bg-light my-3 p-3"
      autoComplete="off"
    >
      <div className="form-group">
        <label htmlFor="instiname">
          <h4>Enter Site Name </h4>
        </label>
        <input
          type="text"
          className="form-control"
          id="name"
          value={name}
          onChange={handleChange}
        />
    </div>       

      <div className="form-group">
        <label htmlFor="location">
          <h4> Enter Profile Link </h4>
        </label>
        <input
          type="text"
          className="form-control"
          id="link"
          style={{width: "100%"}}
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
  const data = state.firestore.ordered.social;
  const uid = state.firebase.auth.uid;
  return {
    data,
    uid,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addSocial: (task) => dispatch(addSocial(task)),    
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
