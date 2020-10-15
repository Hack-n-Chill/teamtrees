/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React, { useState, useEffect } from "react";

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { connect } from "react-redux";
import { removeEdu } from "../../components/actions/taskActions";

const ModalExample = (props) => {
  const { buttonLabel, className, data, removeEdu } = props;

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data.id);
    removeEdu(data.id);
    toggle();
  };

  return (
    <>
      <span
        className="material-icons text-warning mx-2 text-danger"
        style={{ cursor: "pointer" }}
        onClick={toggle}
      >
        delete
      </span>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>
          Warning!
        </ModalHeader>         
        <ModalBody>
          Are you sure you want to delete this Edu ?
        </ModalBody>
        <ModalFooter>
          <Button color="danger" onClick={handleSubmit}>
            Delete
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
    removeEdu: (id) => dispatch(removeEdu(id)),
  };
};

export default connect(null, mapDispatchToProps)(ModalExample);
