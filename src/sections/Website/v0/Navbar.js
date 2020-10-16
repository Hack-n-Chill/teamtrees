import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Alert
} from 'reactstrap';

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);
    const {info} = props
  const toggle = () => setIsOpen(!isOpen);
  if(!(info && info.length)) return <Alert color="secondary"> Personal information not filled yet! </Alert>
  return (
    
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/" className="text-center"><h4>{info[0].fullname}</h4></NavbarBrand>
        <NavbarToggler onClick={toggle} />        
      </Navbar>
    </div>
  );
}

export default Example;