import React from "react";
import "./style.css";
import LinkedInLogo from "./contact-icons-03.png";
import GmailLogo from "./contact-icons-02.png";
import GithubLogo from "./contact-icons-01.png";

function Footer() {
  return (
    <footer className="footer">
      <ul className="nav">
        <li className="nav-item">
          <a 
            href="https://www.linkedin.com/in/emma-stotz/" 
            id="linkedin"
          >
            <img 
              src={LinkedInLogo} 
              alt="linkedin" 
              className="footer-icon"
            />
          </a>    
        </li>
        <li className="nav-item">
          <a 
            href="mailto:stotz.emma@gmail.com" 
            id="email"
          >
            <img 
              src={GmailLogo} 
              alt="gmail" 
              className="footer-icon"
            />
          </a>
        </li>
        <li className="nav-item">
          <a 
            href="https://github.com/emmastotz?tab=repositories" 
            id="github"
          >
            <img 
              src={GithubLogo}
              alt="github" 
              className="footer-icon"/>
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
