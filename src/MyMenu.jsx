import React from 'react';
import logo from './logo.svg'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
 } from 'reactstrap';
 import {NavLink as RRNavLink} from 'react-router-dom';


export default class MyMenu extends React.Component {
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
      <div className='mb-5'>
        <Navbar color="dark" dark expand="md">
          <NavbarBrand tag={RRNavLink} exact to="/">
            <img src={logo} alt="React Logo" style={{ width: '40px', height: '40px' }} />
            OTN
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-1" navbar>
              <NavItem>
                <NavLink  exact tag={RRNavLink} to="/"   >Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink  tag={RRNavLink} to="/about" >About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={RRNavLink} to="/list" >Employee List</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={RRNavLink} to="/todos" >Todos</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={RRNavLink} to="/reddits" >Reddits</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}