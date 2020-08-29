import React, { Component } from "react";
import { FaBars } from "react-icons/fa";
import { CSSTransition } from "react-transition-group";

export default class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = { active: false };
  }

  handleHamburger = (e) => {
    e.preventDefault();
    const currentState = this.state.active;
    this.setState({ active: !currentState });
  };
  render() {
    return (
      <nav className={this.state.active ? "nav flex-row show" : "nav flex-row"}>
        <div className="nav-menu">
          <div className="nav-brand">
            <a href="#">HOUSING</a>
          </div>
        </div>
        <div className="toggle-collapse" onClick={this.handleHamburger}>
          <div className="toggle-icons">
            <FaBars />
          </div>
        </div>
        <div>
          <ul className="nav-items flex-row">
            <li className="nav-link">
              <a href="" className="text-black">
                Services
              </a>
            </li>
            <li className="nav-link">
              <a href="" className="text-black">
                About
              </a>
            </li>
            <li className="nav-link">
              <a href="" className="text-black">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
