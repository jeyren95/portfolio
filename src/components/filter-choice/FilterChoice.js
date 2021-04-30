import React from "react";

import "./FilterChoice.css";

class FilterChoice extends React.Component {
  handleClick = () => {
    this.props.handleChoiceClick()
  }

  render() {
    return (
      <span
      style={{
        fontWeight: this.props.projectsDisplayed === this.props.choice ? "600" : "",
        borderBottom: this.props.projectsDisplayed === this.props.choice ? "solid 2px #e7305b": "none",
        color: this.props.projectsDisplayed === this.props.choice ? "#32e0c4" : ""
      }}
      type="button"
      onClick={this.handleClick}
      >
      {this.props.choice}
      </span>

    )
  }
}

export default FilterChoice
