import React from "react";

import logo from "../images/logo.jpg";

class Introduction extends React.Component {

  render() {
    return (
      <div id="introduction">
        <nav id="home-navbar" className="navbar fixed-top navbar-expand-lg navbar-dark animate__animated animate__bounceInDown animate__delay-1s">
          <a className="navbar-brand" href="/portfolio">
            <img src={logo} alt="logo-img"/>
          </a>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="/portfolio/#about">ABOUT</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/portfolio/#projects">PORTFOLIO</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/portfolio/#contact">CONTACT</a>
              </li>
            </ul>
          </div>
        </nav>

        <div className="introduction-content">
          <h1 className="animate__animated animate__bounceInDown">Hello, I'm <span>Jey-ren</span>!</h1>
          <p className="animate__animated animate__bounceInDown">I'm a Singapore-based web developer.</p>
          <a href="#about">
            <button type="button" className="btn btn-outline-primary animate__animated animate__bounceInLeft animate__delay-1s">View More Here</button>
          </a>
        </div>


      </div>
    )
  }
}

export default Introduction
