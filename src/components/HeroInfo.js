import React, { Component } from "react";

export default class HeroInfo extends Component {
  render() {
    return (
      <div className="container">
        <div className="info-header">
          <p>BEAUTIFUL DESIGN</p>
          <p>CREATIVE ORGANIZATION</p>
          <p>COMFORTABLE DECOR</p>
        </div>
        <div className="info-text">
          <p className="title">
            <i>Skip the headache </i> of planning, designing, building, and
            decorating.
          </p>
          <p className="text">
            Building your dream home can be a tiring process. Without the right
            experience, it’s impossible to get everything just right. We
            specialize in large residential homes that are beautifully designed,
            creatively organized, and comfortable to live in. Our approach to
            building homes ensures a pleasant building experience for you that
            ends on time and on budget.
          </p>
          <button className="btn">Our Services</button>
          <hr />
        </div>
      </div>
    );
  }
}
