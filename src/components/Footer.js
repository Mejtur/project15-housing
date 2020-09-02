import React, { Component } from "react";
import { GiHouse } from "react-icons/gi";
import { Link } from "react-scroll";

export default class Footer extends Component {
  render() {
    return (
      <div className="footer" id="contact">
        <div className="footer-container">
          <div className="row">
            <div className="column-left">
              <ul>
                <li>
                  <Link
                    activeClass="active"
                    to="recent"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    Recent
                  </Link>
                </li>
                <li>
                  <Link
                    activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    activeClass="active"
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="column">
              <GiHouse className="logo" />
            </div>
            <div className="column-right">
              <ul>
                <li>
                  <a href="#">Facebook</a>
                </li>
                <li>
                  <a href="#">Instagram</a>
                </li>
                <li>
                  <a href="#">Pintrest</a>
                </li>
              </ul>
            </div>
          </div>
          <p className="copyright">
            2020 HOUSING. Copyrighted by &copy; Mejtur
          </p>
        </div>
      </div>
    );
  }
}
