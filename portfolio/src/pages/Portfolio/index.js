import React, { Component, Link } from "react";
import projects from "../../projects.json";
import Jumbotron from "../../components/Jumbotron";
import Card from "../../components/Card";

class Portfolio extends Component {
  state = {
    projects,
    id: ""
  };

  handleClick = id => {
    this.setState({ id });
    // link to the project
  };

  render() {
    return (
      <Jumbotron>
        <div className="row">
          {this.state.projects.map(project => (
            <div className="col-sm-4">
              <h4>{project.title}</h4>
              <h6>{project.description}</h6>
              <Card
                key = {project.id}
                id = {project.id}
                image = {project.image}
              />
              <button className="btn btn-secondary">
                <a href={project.link}>
                  View Project
                </a>
              </button>
            </div>
          ))}
        </div>
      </Jumbotron>
    );
  }
}

export default Portfolio;
