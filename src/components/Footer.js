import React, { Component } from "react";
import Logo from "../images/Logo.png";

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="footer-container">
          <div class="row">
            <div class="column-left">
              <ul>
                <li>
                  <a href="">Services</a>
                </li>
                <li>
                  <a href="">About</a>
                </li>
                <li>
                  <a href="">Contact</a>
                </li>
              </ul>
            </div>
            <div class="column">
              <img src={Logo} alt="logo" align="center" />
            </div>
            <div class="column-right">
              <ul>
                <li>
                  <a href="">Facebook</a>
                </li>
                <li>
                  <a href="">Instagram</a>
                </li>
                <li>
                  <a href="">Pintrest</a>
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
