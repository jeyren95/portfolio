import React from "react";

import "./Skill.css";

class Skill extends React.Component {

  render() {
    return (
      <div className="col-md-2 col-4">
        <div className="card skill">
          <i style={{color: this.props.color}} className={`${this.props.class} fa-3x`}></i>
          <span>{this.props.name}</span>
        </div>
      </div>
    )
  }
}

export default Skill
