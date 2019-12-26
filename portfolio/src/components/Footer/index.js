import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import LinkedInLogo from "./contact-icons-03.png";
import GmailLogo from "./contact-icons-02.png";
import GithubLogo from "./contact-icons-01.png";

function Footer() {
  return (
    <footer className="footer">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link
            to="https://www.linkedin.com/in/emma-stotz/"
          >
            <img src={LinkedInLogo} alt="linkedin" className="footer-icon"/>
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="mailto:stotz.emma@gmail.com"
          >
            <img src={GmailLogo} alt="gmail" className="footer-icon"/>
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="https://github.com/emmastotz"
          >
            <img src={GithubLogo} alt="github" className="footer-icon"/>
          </Link>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
