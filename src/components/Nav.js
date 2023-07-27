import React from "react";
import { Link } from "react-scroll"
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
            <a key={item.url} href={item.url} className="navItem" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={item.icon} size="2x" />
            </a>
          ))}

        </div>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto">
            <Link className="navLink" activeClass="active" to="home" spy={true} smooth={false} offset={-70} duration={500}>
              Home
            </Link>
            <Link className="navLink" activeClass="active" to="projects" spy={true} smooth={false} offset={10} duration={500}>
              Projects
            </Link>
            <Link className="navLink" activeClass="active" to="contact" spy={true} smooth={false} offset={10} duration={500}>
              Contact
            </Link>

          </div>
        </div>
      </div>
    </nav>
  )
}

export default Nav
