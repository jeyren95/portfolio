import React from "react";

import "./Project.css";

class Project extends React.Component {
  state = {projectType: this.props.projectType}

  renderProjectDisplay = () => {
    if (this.props.filterChoice === "All" || this.props.filterChoice === this.state.projectType) {
      return ""
    } else {
      return "none"
    }
  }

  render() {
    return (
      <div style={{display: this.renderProjectDisplay()}} className="col-lg-4 col-md-6 project">
        <div id={this.props.name} className="card" >
          <div className="card-front">
            <img src={this.props.imageLink} className="card-img-top" alt="" />
          </div>
          <div className="card-back">
            <div className="project-name">
              <h5>{this.props.name}</h5>
              <p>{this.state.projectType === "React Web Apps" ? "React JS" : "HTML / CSS / Javascript"}</p>
            </div>
            <a href={this.props.urlLink}>
              <button type="button" className="btn btn-outline-primary">Visit Site</button>
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default Project
