import React, { Component } from "react";
import logo from "../assets/imgs/logo.png";

export default class Header extends Component {
  render() {
    return (
      <div>
        <section className="header ">
          <div className="container">
            <div className="row">
              <div className="col-sm-4">
                <img className="img-fluid logo" src={logo} alt="" />
              </div>
              <div className="col-sm-8">
                <ul className="navigation">
                  <li className="nav-links">
                    <a className="nav-items" href="#collection">
                      Collection
                    </a>
                  </li>
                  <li className="nav-links">
                    <a className="nav-items" href="#benefit">
                      benefit
                    </a>
                  </li>
                  <li className="nav-links">
                    <a className="nav-items" href="#roadmap">
                      Roadmap
                    </a>
                  </li>
                  <li className="nav-links">
                    <a className="nav-items" href="#team">
                      Team
                    </a>
                  </li>
                  <li className="nav-links">Litepaper</li>
                  <li className="nav-links">Contact</li>
                  <li className="nav-links mint-btn">Mint</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
