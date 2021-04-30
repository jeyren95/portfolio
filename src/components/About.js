import React from "react";

import Header from "./header/Header";
import Skill from "./skill/Skill";

import "./App.css";

import {frontEndSkills, backEndSkills} from "../skills.js";

import profile from "../images/profile.jpg";

class About extends React.Component {
  renderFrontEndSkills() {
    return frontEndSkills.map((skill) => {
      return (
        <Skill
        key={skill.name}
        name={skill.name}
        color={skill.color}
        class={skill.class}
        />
      )
    })
  }

  renderBackEndSkills() {
    return backEndSkills.map((skill) => {
      return (
        <Skill
        key={skill.name}
        name={skill.name}
        color={skill.color}
        class={skill.class}
        />
      )
    })
  }

  render() {
    return (
      <div id="about">
        <Header title="About" />
        <div className="row">
          <div className="col-lg-5">
            <img src={profile} alt="profile-img" />
          </div>
          <div className="col-lg-7">
            <div className="focus">
              <h5>My Focus:</h5>
              <p>I develop websites and web applications that are <em className="emphasis">simple and responsive.</em></p>
            </div>
            <div className="frontend-skills">
              <p>Frontend Skills:</p>
              <div className="row">
                {this.renderFrontEndSkills()}
              </div>
            </div>
            <div className="backend-skills">
              <p>Backend Skills:</p>
              <div className="row">
                {this.renderBackEndSkills()}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default About
