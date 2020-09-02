import React, { Component } from "react";
import img1 from "../images/modern1.jpg";
import img2 from "../images/modern2.jpg";
// components
import Reviev from "./Reviev";
import Slider from "infinite-react-carousel";

const settings = {
  arrows: false,
  arrowsBlock: false,
  dots: true,
};

export default class RecentHomes extends Component {
  render() {
    return (
      <div className="recent" id="recent">
        <p className="title">Recent Homes</p>
        <div className="gallery">
          <div className="row">
            <div className="column">
              <img src={img1} alt="img1" />
            </div>
            <div className="column">
              <img src={img2} alt="img1" />
            </div>
          </div>
        </div>
        <hr />
        <Slider {...settings}>
          <Reviev
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime culpa
          reprehenderit a. Ab id, expedita, molestias quidem culpa a iure
          distinctio eum illum alias quam ducimus consequuntur animi. Aliquam,
          sequi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          culpa reprehenderit a."
            author="John Doe"
            key="1"
          />
          <Reviev
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime culpa
          reprehenderit a. Ab id, expedita, molestias quidem culpa a iure
          distinctio eum illum alias quam ducimus consequuntur animi. Aliquam,
          sequi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          culpa reprehenderit a."
            author="John Doe"
            key="2"
          />
        </Slider>
        <div className="padding"></div>
      </div>
    );
  }
}
