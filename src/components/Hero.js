import React, { Component } from "react";
import Logo from "../images/Logo.png";
import Nav from "./Nav";

export default class Hero extends Component {
  render() {
    return (
      <>
        <div className="banner">
          <Nav />
          <div className="banner-card">
            <img src={Logo} alt="logo" className="logo" />
            <p className="title">Build your</p>
            <p className="title">
              <em>dream</em> home
            </p>
            <p className="text">
              Our approach to building homes ensures a pleasant building
              experience for you that ends on time and on budget.
            </p>
            <button className="btn">Get in touch</button>
          </div>
        </div>
      </>
    );
  }
}
