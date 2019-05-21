import { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome/index'
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

  render() {
    return (
      <Navbar dark expand="md">
        <NavbarBrand href="/" className="d-flex flex-row align-items-center">
          <img src="/static/logo.svg" height="50" />
          Wisyl
        </NavbarBrand>
        <NavbarToggler onClick={this.toggleMenu} />
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
              <NavLink href="/todo">Calendar</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/todo">Reply</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/todo" className="d-block d-sm-block d-md-none">
                Your Account
              </NavLink>
            </NavItem>
          </Nav>
          <Nav className="flex-row justify-content-center flex-nowrap d-none d-sm-none d-md-block" navbar>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                <FontAwesomeIcon icon="user" size="lg" className="navbar-icon" />
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
    );
  }
}
