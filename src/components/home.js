import React, { Component } from "react";
import logo from "../assets/imgs/logo.png";
import mainbg from "../assets/imgs/main-bg.jpg";
import collection from "../assets/imgs/collection.png";
import pattern from "../assets/imgs/pattern.png";
import artworkleft from "../assets/imgs/artworkleft.png";
import artworkright from "../assets/imgs/artworkright.png";
import icon1 from "../assets/imgs/icons/icon1.png";
import icon2 from "../assets/imgs/icons/icon2.png";
import icon3 from "../assets/imgs/icons/icon3.png";
import team1 from "../assets/imgs/team/team1.png";
import team2 from "../assets/imgs/team/team2.png";
import team3 from "../assets/imgs/team/team3.png";
import team4 from "../assets/imgs/team/team4.png";
import team5 from "../assets/imgs/team/team5.png";
import team6 from "../assets/imgs/team/team6.png";
import team7 from "../assets/imgs/team/team7.png";
import openseaicon from "../assets/imgs/icons/openc.png";
import socialicon1 from "../assets/imgs/footer-icons/icon-dd.png";
import socialicon2 from "../assets/imgs/footer-icons/icon-fb.png";
import socialicon3 from "../assets/imgs/footer-icons/icon-ig.png";
import socialicon4 from "../assets/imgs/footer-icons/icon-tlg.png";
import socialicon5 from "../assets/imgs/footer-icons/icon-twt.png";
import socialicon6 from "../assets/imgs/footer-icons/icon-ytb.png";
import Countdown from "./Countdown";
import Header from "./Header";

export default class Home extends Component {
  render() {
    return (
      <>
        <img className="main-image" src={mainbg} alt="" />
        <Header />
        <section className="main-section">
          <div className="container">
            <div className="row">
              <div className="col-sm-6 col-6">
                <div className="text-wrapper">
                  <h2 className="first-tit">
                    Welcome To
                    <br />
                    Fmc Truck
                  </h2>
                  <h3 className="second-tit">
                    Ride Along With Future Smart and Minimal
                  </h3>
                  <p className="text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nec, dolor aliquam at proin. Arcu sed interdum pellentesque
                    urna purus duis neque. Id erat ut
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="collection" className="collection">
          <div className="container">
            <div className="row">
              <div className="col-sm-7">
                <img className="collection-image" src={collection} alt="" />
              </div>
              <div className="col-sm-5">
                <div className="collection-tit">
                  <div className="collection-text-wrapper">
                    <div className="collection-tit-wrapper">
                      <h2 className="collection-title">Collection</h2>
                    </div>
                    <p className="text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Eu in cursus tortor id id non. Nam consectetur purus urna
                      diam, commodo donec volutpat. Eros non sollicitudin nisl
                      velit fermentum dui eget. Etiam erat faucibus ultrices
                      adipiscing nec, eu purus eget ut. Nec mattis eget viverra
                      orci morbi. Eu ullamcorper nibh leo volutpat.
                    </p>
                    <p className="text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Eu in cursus tortor id id non. Nam consectetur purus urna
                      diam, commodo donec volutpat.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img className="pattern" src={pattern} alt="" />
        </section>

        <section id="artwork" className="artwork">
          <div className="container-fluid  nopadding">
            <div className="artwork-wrapper"></div>
            <h2 className="artwork-title">Art Work</h2>
          </div>
          <div className="artwork-wrappersss">
            <div className="forbackgroundok">
              <h2 className="art">art</h2>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-sm-6">
                  <img className="artwork-left" src={artworkleft} alt="" />
                </div>
                <div className="col-sm-6">
                  <div className="forcenter">
                    <div className="textwrap">
                      <h2 className="section-titles">Cyber tooth</h2>
                      <p className="text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Eu in cursus tortor id id non.Nam consectetur purus urna
                        diam, commodo donec volutpat. Eros non sollicitudin nisl
                        velit fermentum dui eget. Etiam erat faucibus.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="forbackgroundok">
              <h2 className="art">Work</h2>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-sm-6">
                  <div className="forcenter">
                    <div className="textwrap">
                      <h2 className="section-titles ">Neo Dumber</h2>
                      <p className="text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Eu in cursus tortor id id non.Nam consectetur purus urna
                        diam, commodo donec volutpat. Eros non sollicitudin nisl
                        velit fermentum dui eget. Etiam erat faucibus.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <img className="artwork-left" src={artworkright} alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="minting" style={{ paddingBottom: "100px" }}>
          <div className="artwork-wrapper"></div>
          <div className="container">
            <h2 style={{ margin: "0" }} className="artwork-title ">
              Minting
            </h2>
          </div>
          <div className="forbackgroundok">
            <h2
              style={{ textAlign: "left", marginBottom: "-177px" }}
              className="art"
            >
              mi
            </h2>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-xl-4">
                <div className="card-wrapping">
                  <div className="cards">
                    <div className="card-inner">
                      <h3 style={{ color: "#c73cbc" }} className="card-tit">
                        Private
                      </h3>
                      <div className="timer">
                        <Countdown />
                        <div className="titles-wrapper">
                          <div className="time-tits">
                            <h3 className="day-tit">Day</h3>
                          </div>
                          <div className="time-tits">
                            <h3 className="day-tit">Hrs</h3>
                          </div>
                          <div className="time-tits">
                            <h3 className="day-tit">Mins</h3>
                          </div>
                          <div className="time-tits">
                            <h3 className="day-tit">Sec</h3>
                          </div>
                        </div>
                      </div>
                      <div className="price-wrap">price: 0.20</div>
                      <div className="currentdate">
                        Date: {new Date().toLocaleString() + ""}
                      </div>
                    </div>
                  </div>
                  <a className="mint-btn" href="#">
                    Mint
                  </a>
                </div>
              </div>

              <div className="col-xl-4">
                <div className="cards">
                  <div className="card-inner">
                    <h3 className="card-tit">Private</h3>
                    <div className="timer">
                      {" "}
                      <Countdown />
                      <div className="titles-wrapper">
                        <div className="time-tits">
                          <h3 className="day-tit">Day</h3>
                        </div>
                        <div className="time-tits">
                          <h3 className="day-tit">Hrs</h3>
                        </div>
                        <div className="time-tits">
                          <h3 className="day-tit">Mins</h3>
                        </div>
                        <div className="time-tits">
                          <h3 className="day-tit">Sec</h3>
                        </div>
                      </div>
                    </div>
                    <div className="price-wrap">price: 0.20</div>
                    <div className="currentdate">
                      Date: {new Date().toLocaleString() + ""}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4">
                <div className="cards">
                  <div className="card-inner">
                    <h3 className="card-tit">Private</h3>
                    <div className="timer">
                      {" "}
                      <Countdown />
                      <div className="titles-wrapper">
                        <div className="time-tits">
                          <h3 className="day-tit">Day</h3>
                        </div>
                        <div className="time-tits">
                          <h3 className="day-tit">Hrs</h3>
                        </div>
                        <div className="time-tits">
                          <h3 className="day-tit">Mins</h3>
                        </div>
                        <div className="time-tits">
                          <h3 className="day-tit">Sec</h3>
                        </div>
                      </div>
                    </div>
                    <div className="price-wrap">price: 0.20</div>
                    <div className="currentdate">
                      Date: {new Date().toLocaleString() + ""}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <h2
            style={{
              textAlign: "right",
              marginTop: "-100px",
              marginBottom: "-200px",
            }}
            className="art"
          >
            nt
          </h2>
        </section>

        <section id="benefit">
          <div className="artwork-wrapper"></div>
          <div className="container">
            <div className="benefit">
              <h2 className="artwork-title">benefits</h2>
            </div>
          </div>
          <h2
            style={{ textAlign: "center", marginBottom: "-177px" }}
            className="art"
          >
            Bene
          </h2>
          <div className="container">
            <div className="row">
              <div className="col-sm-4">
                <div className="img-wrapper">
                  <img className="icon1" src={icon1} alt="" />
                </div>
                <div className="benefits-text-wrappers">
                  <h2 className="privatesale">private Sale</h2>
                  <p className="text benifits">
                    Lorem ipsum dolor sit amet, conse adipiscing elit. Eu in
                    cursus tortor Nam consectetur purus urna diam.
                    <br />
                    <br />
                    Donec volutpat. Eros non sollicitud velit fermentum dui
                    eget. Etiam et ultrices adipiscing nec, eu purus eg. Nec
                    mattis eget viverra orci morbi. Eu ullamcorper nibh leo
                    volutpat.
                  </p>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="img-wrapper">
                  <img className="icon2" src={icon2} alt="" />
                </div>
                <div className="benefits-text-wrappers">
                  <h2 className="privatesale">Nft Merge</h2>
                  <p className="text benifits">
                    Lorem ipsum dolor sit amet, conse adipiscing elit. Eu in
                    cursus tortor Nam consectetur purus urna diam.
                    <br />
                    <br />
                    Donec volutpat. Eros non sollicitud velit fermentum dui
                    eget. Etiam et ultrices adipiscing nec, eu purus eg. Nec
                    mattis eget viverra orci morbi. Eu ullamcorper nibh leo
                    volutpat.
                  </p>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="img-wrapper">
                  <img className="icon3" src={icon3} alt="" />
                </div>
                <div className="benefits-text-wrappers">
                  <h2 className="privatesale">Launchpad</h2>
                  <p className="text benifits">
                    Lorem ipsum dolor sit amet, conse adipiscing elit. Eu in
                    cursus tortor Nam consectetur purus urna diam.
                    <br />
                    <br />
                    Donec volutpat. Eros non sollicitud velit fermentum dui
                    eget. Etiam et ultrices adipiscing nec, eu purus eg. Nec
                    mattis eget viverra orci morbi. Eu ullamcorper nibh leo
                    volutpat.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <h2
            style={{
              textAlign: "center",
              marginBottom: "0px",
              marginTop: "-152px",
            }}
            className="art"
          >
            Fits
          </h2>
        </section>

        <section id="newsletter" className="Newsletter">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="newsletter-wrapp">
                  <h2 className="joinnewsletter">join newsletter</h2>
                  <p className="text">
                    Join the{" "}
                    <span style={{ color: "#0AE1EF", fontWeight: "bold" }}>
                      FMC TRUCK{" "}
                    </span>
                    newsletter and be the first to know the latest news!
                  </p>
                  <div className="btn-wrap">
                    <a className="apply-btn" href="#">
                      Apply
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="roadmap" className="roadmap">
          <div className="container-fluid  nopadding">
            <div className="artwork-wrapper"></div>
            <h2 className="artwork-title">Road Map</h2>
          </div>
          <h2
            style={{
              textAlign: "center",
              marginBottom: "-270px",
              marginTop: "0px",
            }}
            className="art"
          >
            Map
          </h2>
          <div className="container">
            <div className="row">
              <div className="col-sm-3">
                <h3 className="phase">
                  Phase<span className="numberstroke">1</span>
                </h3>
                <p className="text phase">
                  Lorem ipsum dolor sit amet, conse adipiscing elit. Eu in
                  cursus tortor Nam consectetur purus urna diam. Donec volutpat.
                  <br />
                  <br />
                  Eros non sollicitud velit fermentum dui eget. Etiam et
                  ultrices adipiscing nec, eu purus eg. Nec mattis eget viverra
                  orci morbi. Eu ullamcorper nibh leo volutpat.
                </p>
              </div>
              <div className="col-sm-3">
                <h3 className="phase">
                  Phase<span className="numberstroke">2</span>
                </h3>
                <p className="text phase">
                  Lorem ipsum dolor sit amet, conse adipiscing elit. Eu in
                  cursus tortor Nam consectetur purus urna diam. Donec volutpat.
                  <br />
                  <br />
                  Eros non sollicitud velit fermentum dui eget. Etiam et
                  ultrices adipiscing nec, eu purus eg. Nec mattis eget viverra
                  orci morbi. Eu ullamcorper nibh leo volutpat.
                </p>
              </div>
              <div className="col-sm-3">
                <h3 className="phase">
                  Phase<span className="numberstroke">3</span>
                </h3>
                <p className="text phase">
                  Lorem ipsum dolor sit amet, conse adipiscing elit. Eu in
                  cursus tortor Nam consectetur purus urna diam. Donec volutpat.
                  <br />
                  <br />
                  Eros non sollicitud velit fermentum dui eget. Etiam et
                  ultrices adipiscing nec, eu purus eg. Nec mattis eget viverra
                  orci morbi. Eu ullamcorper nibh leo volutpat.
                </p>
              </div>
              <div className="col-sm-3">
                <h3 className="phase">
                  Phase<span className="numberstroke">4</span>
                </h3>
                <p className="text phase">
                  Lorem ipsum dolor sit amet, conse adipiscing elit. Eu in
                  cursus tortor Nam consectetur purus urna diam. Donec volutpat.
                  <br />
                  <br />
                  Eros non sollicitud velit fermentum dui eget. Etiam et
                  ultrices adipiscing nec, eu purus eg. Nec mattis eget viverra
                  orci morbi. Eu ullamcorper nibh leo volutpat.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="team" className="team-main">
          <div className="artwork-wrapper"></div>
          <div className="container">
            <h2 className="artwork-title">Team</h2>
          </div>
          <h2
            style={{
              textAlign: "left",
              marginBottom: "-270px",
              marginTop: "0px",
            }}
            className="art"
          >
            TE
          </h2>

          <div className="container">
            <div className="custom-container">
              <div className="row">
                <div className="col-sm-5">
                  <div className="team main">
                    <div className="team-img-wrap">
                      <img className="team-img" src={team1} alt="" />
                    </div>
                    <div className="team-text-wrap">
                      <h3 className="team-name">Truck Artist</h3>
                      <p className="main-team-postition">
                        Famous Creator of Collection
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-sm-7">
                  <div className="row">
                    <div className="col-sm-4">
                      <div className="team">
                        <div className="team-img-wrap">
                          <img className="team-img" src={team2} alt="" />
                        </div>
                        <div className="team-text-wrap">
                          <h3 className="team-name">Truck Artist</h3>
                          <p className="team-postition">
                            Famous Creator of Collection
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="team">
                        <div className="team-img-wrap">
                          <img className="team-img" src={team3} alt="" />
                        </div>
                        <div className="team-text-wrap">
                          <h3 className="team-name">Truck Artist</h3>
                          <p className="team-postition">
                            Famous Creator of Collection
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="team">
                        <div className="team-img-wrap">
                          <img className="team-img" src={team4} alt="" />
                        </div>
                        <div className="team-text-wrap">
                          <h3 className="team-name">Truck Artist</h3>
                          <p className="team-postition">
                            Famous Creator of Collection
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div style={{ paddingTop: "20px" }} className="row">
                    <div className="col-sm-4">
                      <div className="team">
                        <div className="team-img-wrap">
                          <img className="team-img" src={team5} alt="" />
                        </div>
                        <div className="team-text-wrap">
                          <h3 className="team-name">Truck Artist</h3>
                          <p className="team-postition">
                            Famous Creator of Collection
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="team">
                        <div className="team-img-wrap">
                          <img className="team-img" src={team6} alt="" />
                        </div>
                        <div className="team-text-wrap">
                          <h3 className="team-name">Truck Artist</h3>
                          <p className="team-postition">
                            Famous Creator of Collection
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="team">
                        <div className="team-img-wrap">
                          <img className="team-img" src={team7} alt="" />
                        </div>
                        <div className="team-text-wrap">
                          <h3 className="team-name">Truck Artist</h3>
                          <p className="team-postition">
                            Famous Creator of Collection
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <h2
            style={{
              textAlign: "right",
              marginBottom: "0px",
              marginTop: "-240px",
            }}
            className="art"
          >
            AM
          </h2>
        </section>
        <footer>
          <div className="container-fluid  nopadding  ">
            <div className="artwork-wrapper"></div>
            <h2 className="artwork-title">
              <img className="img-fluid footlogo" src={logo} alt="" />
            </h2>
          </div>

          <div className="footer-wrapper">
            <div className="container">
              <div className="row">
                <div className="col-sm-2">
                  <img className="footer-img" src={openseaicon} alt="" />
                </div>
                <div className="col-sm-6">
                  <ul className="footer-ul">
                    <li>
                      <a className="footer-links">About FMC Truck</a>
                    </li>
                    <li>
                      <a className="footer-links">ADVERTISING</a>
                    </li>
                    <li>
                      <a className="footer-links">Help/Faq</a>
                    </li>
                    <li>
                      <a className="footer-links">Info@Supervet.io</a>
                    </li>
                  </ul>
                </div>

                <div className="col-sm-4 text-center">
                  <img
                    className="social-icons"
                    src={socialicon1}
                    alt="social icons"
                  />
                  <img
                    className="social-icons"
                    src={socialicon2}
                    alt="social icons"
                  />
                  <img
                    className="social-icons"
                    src={socialicon3}
                    alt="social icons"
                  />
                  <img
                    className="social-icons"
                    src={socialicon4}
                    alt="social icons"
                  />
                  <img
                    className="social-icons"
                    src={socialicon5}
                    alt="social icons"
                  />
                  <img
                    className="social-icons"
                    src={socialicon6}
                    alt="social icons"
                  />
                </div>
              </div>
            </div>
          </div>
        </footer>
      </>
    );
  }
}
