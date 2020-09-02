import React, { Component } from "react";
import aboutImg from "../images/about.jpg";

export default class About extends Component {
  render() {
    return (
      <div className="about" id="about">
        <div className="row">
          <div className="column">
            <img src={aboutImg} alt="About" />
          </div>
          <div className="column right">
            <div className="text-container">
              <p className="title">Meet the faces behind Housing - John Doe</p>
              <p className="text">
                Our clients choose us because we make design matter. What makes
                a house a home? More specifically your home? For us, it’s
                personal touch. We are experts In Interior Design. We can help
                you create beautiful and functional spaces.
              </p>
              <p className="text-under">
                We help you stand out in a crowd. Create a space that you are
                both proud of and happy to come home to every day.
              </p>
              <button className="btn">About US</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
