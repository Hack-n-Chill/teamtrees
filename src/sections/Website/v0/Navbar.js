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
  NavbarText
} from 'reactstrap';

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);
    const {info} = props
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">{info[0].fullname}</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/components/">Education</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Experience</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Projects</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Social</NavLink>
            </NavItem>             
          </Nav>
          <NavbarText>Edit</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Example;