import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
  DropdownItem } from 'reactstrap';

  export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar dark className="fixed-top" expand="md">
          <NavbarBrand href="/">Wisyl</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/components/">Messages</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/">Recipients</NavLink>
              </NavItem>
              <NavItem style={{marginRight: '15em'}} >
                <NavLink href="/">Reporting</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/components/"><FontAwesomeIcon icon="bell" size="lg" /></NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                <FontAwesomeIcon icon="user" size="lg" />
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Option 1
                  </DropdownItem>
                  <DropdownItem>
                    Option 2
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}