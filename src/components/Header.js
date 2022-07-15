import React, { Component } from "react";
import logo from "../assets/imgs/logo.webp";
import ScrollSpy from "react-ui-scrollspy";
import hamburger from "../assets/imgs/icons/hamburger.png";
const Header = () => {
  const hamCtrl = () => {
    console.log("Clicked");
    let element = document.getElementById("nav-ctrl");
    element.classList.toggle("mystyle");
  };
  return (
    <div>
      <section className="header ">
        <div className="container">
          <div className="row">
            <div className="col-sm-2 col-5">
              <img className="img-fluid logo" src={logo} alt="" />
            </div>
            <div className="col-sm-10 col-7">
              <ul id="nav-ctrl" className="navigation">
                <li className="nav-links">
                  <a
                    className="nav-items scrollto active-scroll-spy"
                    href="#collection"
                    data-to-scrollspy-id="collection"
                  >
                    Collection
                  </a>
                </li>
                <li className="nav-links scrollto">
                  <a
                    className="nav-items"
                    href="#benefit"
                    data-to-scrollspy-id="benefit"
                  >
                    benefit
                  </a>
                </li>
                <li className="nav-links scrollto">
                  <a
                    className="nav-items"
                    href="#roadmap"
                    data-to-scrollspy-id="roadmap"
                  >
                    Roadmap
                  </a>
                </li>
                <li className="nav-links scrollto">
                  <a
                    className="nav-items"
                    href="#team"
                    data-to-scrollspy-id="team"
                  >
                    Team
                  </a>
                </li>
                <li className="nav-links scrollto">
                  <a className="nav-items" href="#">
                    Litepaper
                  </a>
                </li>
                <li className="nav-links scrollto">
                  <a className="nav-items" href="#">
                    Contact
                  </a>
                </li>
                <li className="nav-links scrollto mint-btn">
                  <a className="nav-items" href="#">
                    Mint
                  </a>
                </li>
              </ul>

              <div className="ham-wrap">
                <img
                  className="hamburger"
                  src={hamburger}
                  alt=""
                  onClick={() => hamCtrl()}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Header;
