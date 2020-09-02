import React, { Component } from "react";
import Nav from "./Nav";
import { GiHouse } from "react-icons/gi";

export default class Hero extends Component {
  render() {
    return (
      <>
        <div className="banner">
          <Nav />
          <div className="banner-card">
            <p>
              <GiHouse className="logo" />
            </p>
            {/* <img src={Logo} alt="logo" className="logo" /> */}
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
