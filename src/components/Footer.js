import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FullScreen from './FullScreen'
import {
  faGithub,
  faLinkedinIn,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";

const socials = [
  {
    icon: faGithub,
    url: "https://github.com/hamadullah16",
  },
  {
    icon: faLinkedinIn,
    url: "https://www.linkedin.com/in/hamadullah16",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com/users/21260359/hamad",
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div>
      <FullScreen color={"dark"}>
        <div className='container text-light '>
          <section className='row justify-content-center p-5 footerIcon'>
          {socials.map(item => (
            <a key={item.url} href={item.url} className="col navItem IconsBox grey p-2 text-center rounded" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={item.icon} size="2x" />
            </a>
          ))}
          </section>
          <section className='row'>
            <article className='col'>
              <p className='text-center greyText'>&copy; Hamad - {currentYear}</p>
            </article>
          </section>

        </div>
      </FullScreen>
    </div>
  )
}
