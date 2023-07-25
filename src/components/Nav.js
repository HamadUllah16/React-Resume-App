import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";

const socials = [
  {
    icon: faGithub,
    url: "https://github.com/hamadullah16",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/hamadullah16",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com/users/21260359/hamad",
  },
];


function Nav() {
  return (

    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow">
      <div className="container">
        <div className="navbar-brand">
          {socials.map(item => (
            <a key={item.url} href={item.url} className="navItem">
              <FontAwesomeIcon icon={item.icon} size="2x" />
            </a>
          ))}

        </div>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto">
            <a className="nav-link" href="/" aria-current="page">Home</a>
            <a className="nav-link" href="/projects">Projects</a>
            <a className="nav-link" href="/contact">Contact Me</a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Nav
