import React from "react";

import Introduction from "./Introduction";
import About from "./About";
import Project from "./project/Project";
import Header from "./header/Header";
import FilterChoice from "./filter-choice/FilterChoice";
import Contact from "./Contact";
import Footer from "./Footer";

import "./App.css";

import projects from "../projects";


class App extends React.Component {
  state = {
    projectsDisplayed: "All"
  }

  componentDidMount() {
    window.scrollTo(0, 0)
    window.addEventListener("scroll", this.listenToScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.listenToScroll)
  }

  listenToScroll = () => {
    if (document.getElementById("about").getBoundingClientRect().y <= 0) {
      document.getElementById("home-navbar").style.borderBottom = "solid #e7305b"
    } else {
      document.getElementById("home-navbar").style.borderBottom = "none"
    }
  }

  renderProjects() {
    return projects.map((project) => {
      return (
        <Project
        key={project.name}
        name={project.name}
        imageLink={project.imageLink}
        urlLink={project.urlLink}
        projectType={project.type}
        filterChoice={this.state.projectsDisplayed}
        />
      )
    })
  }

  handleAllChoiceClick = () => {
    this.setState({projectsDisplayed: "All"})
  }

  handleReactWebAppsChoiceClick = () => {
    this.setState({projectsDisplayed: "React Web Apps"})
  }

  handleWebsitesChoiceClick = () => {
    this.setState({projectsDisplayed: "Websites"})
  }

  render() {
    return (
      <div>
        <Introduction />
        <About />
        <div id="projects">
          <Header title="Projects" />
          <div className="projects-filter">
            <FilterChoice choice="All" handleChoiceClick={this.handleAllChoiceClick} projectsDisplayed={this.state.projectsDisplayed}/>
            <FilterChoice choice="React Web Apps" handleChoiceClick={this.handleReactWebAppsChoiceClick} projectsDisplayed={this.state.projectsDisplayed}/>
            <FilterChoice choice="Websites" handleChoiceClick={this.handleWebsitesChoiceClick} projectsDisplayed={this.state.projectsDisplayed}/>
          </div>
          <div className="row">
            {this.renderProjects()}
          </div>
        </div>
        <Contact />
        <Footer />
      </div>
    )
  }
}

export default App
