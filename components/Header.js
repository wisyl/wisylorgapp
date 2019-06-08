import React, { Component } from 'react'
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
} from 'reactstrap'

import { NextAuth } from 'next-auth/client'
import Router from 'next/router'

export default class extends Component {
  constructor(props) {
    super(props);

    this.toggleMenu = this.toggleMenu.bind(this);
    this.state = {
      isMenuOpen: false,
    };
  }

  toggleMenu() {
    this.setState({
      isMenuOpen: !this.state.isMenuOpen,
    });
  }

  handleSignOutSubmit(event) {
    event.preventDefault()
    NextAuth.signout()
    .then(() => {
      Router.push('/auth/callback')
    })
    .catch(err => {
      Router.push('/auth/error?action=signout')
    })
  }

  render() {
    return (
        <Navbar dark expand="md">
          <NavbarBrand href="/" className="d-flex flex-row align-items-center">
            <img src='/static/logo.png' alt="image" className="mr-1"/>
            <strong>Wisyl</strong>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggleMenu}/>
          <Collapse isOpen={this.state.isMenuOpen} navbar>
            <Nav className="mx-auto text-center" navbar>
              <NavItem>
                <NavLink href="/recipients">Recipients</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/messages">Messages</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/reporting">Reporting</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/calendar">Calendar</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/reply">Reply</NavLink>
              </NavItem>
            </Nav>
            <Nav className="flex-row justify-content-center flex-nowrap d-none d-sm-none d-md-block" navbar>
              <NavItem>
                <NavLink href="/profile">
                  <i className="fas fa-user"/>
                </NavLink>
              </NavItem>
              <NavItem onClick={(e) => this.handleSignOutSubmit(e)}>
                <NavLink>
                  <i className="fas fa-sign-out-alt"/>
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
    );
  }
}
