/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React, { useState, useEffect } from "react";

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { connect } from "react-redux";
import { updateSocial } from "../../components/actions/taskActions";

const ModalExample = (props) => {
  const {  className, data, updateSocial } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  const [nameModal, setName] = useState("")   
  const [linkModal, setLink] = useState("")
   
  useEffect(() => {
    console.log(data);
      setName(data.name)
      setLink(data.link)              
  }, [data]);

  const handleChange = (e) => {
    switch (e.target.id) {
      case "nameModal":
        setName(e.target.value)
        return      
      case "linkModal":
        setLink(e.target.value)
        return       
      default:
        return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data.id, { name: nameModal,   link: linkModal,  });
    updateSocial(data.id, { name: nameModal,  link: linkModal,   });
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
          Site Name
          <input
            type="text"
            className="form-control"
            id="nameModal"
            value={nameModal}
            onChange={handleChange}
          />
        </ModalHeader>                 
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
    updateSocial: (id, task) => dispatch(updateSocial(id, task)),
  };
};

export default connect(null, mapDispatchToProps)(ModalExample);
