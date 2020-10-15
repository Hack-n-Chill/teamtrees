/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React, { useState, useEffect } from "react";

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { connect } from "react-redux";
import { updateExp } from "../../components/actions/taskActions";

const ModalExample = (props) => {
  const { buttonLabel, className, data, updateExp } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  const [companyModal, setCompany] = useState("")
  const [designationModal, setDesignation] = useState("")
  const [locationModal, setLocation] = useState("")
  const [summaryModal, setSummary] = useState("")
  const [startDateModal, setStartDate] = useState("")
  const [endDateModal, setEndDate] = useState("")

  useEffect(() => {
    console.log(data);
      setCompany(data.company)
      setDesignation(data.designation)
      setLocation(data.location)
      setSummary(data.summary)
      setStartDate(data.startDate)
      setEndDate(data.endDate)
  }, [data]);

  const handleChange = (e) => {
    switch (e.target.id) {
      case "companyModal":
        setCompany(e.target.value)
        return
      case "locationModal":
        setLocation(e.target.value)
        return
      case "designationModal":
        setDesignation(e.target.value)
        return
      case "summaryModal":
        setSummary(e.target.value)
        return
      case "startDateModal":
        setStartDate(e.target.value)
        return
      case "endDateModal":
        setEndDate(e.target.value)
        return      
      default:
        return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data.id, { company: companyModal, designation: designationModal, location: locationModal, summary: summaryModal, startDate: startDateModal, endDate: endDateModal });
    updateExp(data.id, { company: companyModal, designation: designationModal, location: locationModal, summary: summaryModal, startDate: startDateModal, endDate: endDateModal });
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
          Company
          <input
            type="text"
            className="form-control"
            id="companyModal"
            value={companyModal}
            onChange={handleChange}
          />
        </ModalHeader>
        <ModalBody>
        <h5>Location</h5>
          <textarea
            className="form-control"
            id="locationModal"
            rows="2"
            value={locationModal}
            onChange={handleChange}
          ></textarea>
        </ModalBody>
        <ModalBody>
        <h5>Start Date</h5>
          <textarea
            className="form-control"
            id="startDateModal"
            rows="1"
            value={startDateModal}
            onChange={handleChange}
          ></textarea>
        </ModalBody>
        <ModalBody>
        <h5>End Date</h5>
          <textarea
            className="form-control"
            id="endDateModal"
            rows="1"
            value={endDateModal}
            onChange={handleChange}
          ></textarea>
        </ModalBody>
        
        <ModalBody>
        <h5>Designation</h5>
          <textarea
            className="form-control"
            id="designationModal"
            rows="2"
            value={designationModal}
            onChange={handleChange}
          ></textarea>
        </ModalBody>
        
        <ModalBody>
        <h5>Work</h5>
          <textarea
            className="form-control"
            id="summaryModal"
            rows="4"
            value={summaryModal}
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
    updateExp: (id, task) => dispatch(updateExp(id, task)),
  };
};

export default connect(null, mapDispatchToProps)(ModalExample);
