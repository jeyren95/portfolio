import React from "react";

import "./Header.css";

class Header extends React.Component {

  render() {
    return (
      <div className="header">
        <h1>{this.props.title}</h1>
        <hr />
      </div>
    )
  }

}

export default Header
