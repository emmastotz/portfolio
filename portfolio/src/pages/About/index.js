import React from "react";
import Jumbotron from "../../components/Jumbotron";
import Picture from "./portfolio-picture.png";
import "./style.css";

function About() {
  return (
    <div>
      <Jumbotron>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h4>about me</h4>
            <hr></hr>
            <img src={Picture} alt="portfolio" className="portfolio-picture"/>
            <p className="left-align">
              Proficient with HTML5, CSS3, JavaScript, jQuery, Java, Bootstrap, Express.js, React.js, Node.js, MongoDB, and MySQL.
            </p>
            <p className="left-align">
              5+ years of experience in graphic design and brand/social media marketing.
            </p>
            <p className="left-align">
              Developed in areas of organization, planning and maintaining deadlines and competing priorities. Eager to learn. Ability to juggle various schedules, and enrich interpersonal relationships. Adept at setting and achieving goals, managing time, and analyzing and solving problems.
            </p>
            <p className="left-align">
              Seeking to continue my professional development and utilize my knowledge in marketing and design to affect positive change on a global scale.
            </p>
            <hr></hr>
          </div>
        </div>
      </div>
      </Jumbotron>
    </div>
  );
}

export default About;