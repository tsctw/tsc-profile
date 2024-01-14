import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Tooltip } from 'react-tooltip';

export const SideMenu = () => {
  return (
    <div className="basis-1/4 flex flex-col text-slate-300 text-slate-400 bg-slate-900
        bg-gradient-to-tr from-slate-900 to-slate-600">
      <div className="h-1/2 flex flex-col justify-center items-center m-3 mt-5">
        <div className="border-2 rounded-full border-black border-solid relative">
          <StaticImage className="rounded-full" src="../images/frenchie01.jpeg" alt="profile img" width={200} height={200}></StaticImage>
        </div>
        <div className="mt-5">@tsctw</div>
      </div>
      <div className="h-1/2 m-3 flex flex-col justify-around items-center">
        <Link to="/">Home</Link>
        <Link to="/about">About Me</Link>
        <Link to="/resume">Resume</Link>
        <Link to="/projects">Projects</Link>
        <Link to="">Blog</Link>
        <div className="flex gap-4 text-xl">
          <Link to="https://www.linkedin.com/in/tao-sen-chang/" target="_blank">
            <FontAwesomeIcon icon={faLinkedin} />
          </Link>
          <Link to="https://github.com/tsctw" target="_blank">
            <FontAwesomeIcon icon={faGithub} />
          </Link>
          <a id="email">
            <Link to="">
              <FontAwesomeIcon icon={faEnvelope} />
            </Link>
          </a>
          <Tooltip anchorSelect="#email" clickable>
            <div>taosen.chang@gmail.com</div>
            <button>Copy</button>
          </Tooltip>
        </div>
      </div>
    </div>
  );
};