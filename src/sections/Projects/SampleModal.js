/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React, { useState, useEffect } from "react";

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { connect } from "react-redux";
import { updateProj } from "../../components/actions/taskActions";

const ModalExample = (props) => {
  const { buttonLabel, className, data, updateProj } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  const [nameModal, setName] = useState("")
  const [techModal, setTech] = useState("")
  const [linkModal, setLink] = useState("")
  const [summaryModal, setSummary] = useState("")
  const [startDateModal, setStartDate] = useState("")  

  useEffect(() => {
    console.log(data);
      setName(data.name)
      setLink(data.link)
      setTech(data.tech)
      setSummary(data.summary)
      setStartDate(data.startDate)
       
  }, [data]);

  const handleChange = (e) => {
    switch (e.target.id) {
      case "nameModal":
        setName(e.target.value)
        return
      case "techModal":
        setName(e.target.value)
        return
      case "linkModal":
        setLink(e.target.value)
        return 
      case "summaryModal":
        setSummary(e.target.value)
        return
      case "startDateModal":
        setStartDate(e.target.value)
        return
           
      default:
        return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data.id, { name: nameModal, tech: techModal, link: linkModal, summary: summaryModal, startDate: startDateModal });
    updateProj(data.id, { name: nameModal, tech: techModal, link: linkModal, summary: summaryModal, startDate: startDateModal  });
    toggle();
  };

  return (
    <>
      <span
        className="material-icons text-warning mx-2"
        style={{ cursor: "pointer" }}
        onClick={toggle}
      >
        create
      </span>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>
          Project
          <input
            type="text"
            className="form-control"
            id="nameModal"
            value={nameModal}
            onChange={handleChange}
          />
        </ModalHeader>

        <ModalBody>
        <h5>About</h5>
          <textarea
            className="form-control"
            id="summaryModal"
            rows="4"
            value={summaryModal}
            onChange={handleChange}
          ></textarea>
        </ModalBody>

        <ModalBody>
        <h5>Year</h5>
          <textarea
            className="form-control"
            id="startDateModal"
            rows="1"
            value={startDateModal}
            onChange={handleChange}
          ></textarea>
        </ModalBody>

        <ModalBody>
        <h5>Tech Used</h5>
          <textarea
            className="form-control"
            id="techModal"
            rows="2"
            value={techModal}
            onChange={handleChange}
          ></textarea>
        </ModalBody>
        
        <ModalBody>
        <h5>Links</h5>
          <textarea
            className="form-control"
            id="linkModal"
            rows="1"
            value={linkModal}
            onChange={handleChange}
          ></textarea>
        </ModalBody>                             
        <ModalFooter>
          <Button color="warning" onClick={handleSubmit}>
            Update
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateProj: (id, task) => dispatch(updateProj(id, task)),
  };
};

export default connect(null, mapDispatchToProps)(ModalExample);
