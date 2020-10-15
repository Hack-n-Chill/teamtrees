/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React, { useState, useEffect } from "react";

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { connect } from "react-redux";
import { updateAbout } from "../../components/actions/taskActions";

const ModalExample = (props) => {
  const { buttonLabel, className, data, updateAbout } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  const [fullnameModal, setFullname] = useState("");
  const [summaryModal, setSummary] = useState("");

  useEffect(() => {
    console.log(data);
    setFullname(data[0].fullname);
    setSummary(data[0].summary);
  }, [data]);

  const handleChange = (e) => {
    switch (e.target.id) {
      case "fullnameModal":
        setFullname(e.target.value);
        return;
      case "summaryModal":
        setSummary(e.target.value);
        return;
      default:
        return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ data, fullname: fullnameModal, summary: summaryModal });
    updateAbout({ data, fullname: fullnameModal, summary: summaryModal });
    toggle();
  };

  return (
    <>
      <span
        className="material-icons mx-2 text-warning"
        style={{ cursor: "pointer" }}
        onClick={toggle}
      >
        create
      </span>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>
          <input
            type="text"
            className="form-control"
            id="fullnameModal"
            value={fullnameModal}
            onChange={handleChange}
          />
        </ModalHeader>
        <ModalBody>
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
    updateAbout: (task) => dispatch(updateAbout(task)),
  };
};

export default connect(null, mapDispatchToProps)(ModalExample);
