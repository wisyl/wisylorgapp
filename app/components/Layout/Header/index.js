import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome/index';
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
} from 'reactstrap';

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  render() {
    return (
      <div>
        <Navbar dark className="fixed-top" expand="md">
          <NavbarBrand href="/">Wisyl</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="mx-auto text-center" navbar>
              <NavItem>
                <NavLink href="/">Users</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/messages">Messages</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/">Recipients</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/">Reporting</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/" className="d-block d-sm-block d-md-none">
                  Your Account
                </NavLink>
              </NavItem>
            </Nav>
            <Nav className="flex-row justify-content-center flex-nowrap d-none d-sm-none d-md-block" navbar>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  <FontAwesomeIcon icon="user" size="lg" />
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>Option 1</DropdownItem>
                  <DropdownItem>Option 2</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Logout</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
