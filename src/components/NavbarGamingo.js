import image from '../assets/images/GG_logo.svg';
import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
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

function NavbarGamingo(){
    return (
        <div>
  <Navbar
    color="light"
    expand="md"
    light
  >
    <NavbarBrand href="/">
      <img className="logo" src={image} alt="Gamingo"/>
    </NavbarBrand>
    <NavbarToggler onClick={function noRefCheck(){}} />
    <Collapse navbar>
      <Nav
        className="ms-auto"
        navbar
      >
        <NavItem>
          <NavLink href="http://localhost:3001/profile"> 
            <FaIcons.FaIdCard className="me-2"/>Perfil
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="https://google.com/">
            <FaIcons.FaRegSun className="me-2"/>Settings
          </NavLink>
        </NavItem>
        <UncontrolledDropdown
          inNavbar
          nav
        >
          <DropdownToggle
            caret
            nav
          >
            Mas 
          </DropdownToggle>
          <DropdownMenu end>
            <DropdownItem>
              Opcion 1
            </DropdownItem>
            <DropdownItem>
              Opcion 2
            </DropdownItem>
            <DropdownItem divider />
            <DropdownItem>
              Salir
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </Nav>
    </Collapse>
  </Navbar>
</div>
    )
}

export default NavbarGamingo;