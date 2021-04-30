import React from "react";

import Header from "./header/Header";

class Contact extends React.Component {

  render() {
    return (
      <div id="contact">
        <Header title="Contact" />
        <p>Have a question or interested in working together? Drop me a message!</p>
        <form action="https://formspree.io/mdowjwja" method="POST">
          <div className="form-detail">
            <i className="far fa-user"></i>
            <input type="text" placeholder="Name" name="name" autoComplete="off" require="true" />
          </div>
          <div className="form-detail">
            <i className="fas fa-envelope envelope-solid"></i>
            <input type="email" placeholder="Email" name="email" autoComplete="off" require="true" />
          </div>
          <div className="form-detail">
            <i className="fas fa-pen-alt"></i>
            <textarea rows="9" cols="60" placeholder="Your message" name="message"></textarea>
          </div>
          <button type="button" className="btn btn-outline-primary">Let's do this!</button>
      </form>
    </div>
    )
  }

}

export default Contact
