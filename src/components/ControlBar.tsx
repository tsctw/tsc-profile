import React from 'react';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faUser, faFolderOpen, faBlog, faFileLines } from '@fortawesome/free-solid-svg-icons';
import { Tooltip } from 'react-tooltip';

export const ControlBar = () => {
  return (
    <div className="flex gap-4 flex-col justify-around items-center h-100 w-16 bg-zinc-700 text-white rounded-t-full rounded-b-full p-5">
      <Link to="/" className="home"><FontAwesomeIcon icon={faHouse} /></Link>
      <Link to="/about" className="about"><FontAwesomeIcon icon={faUser} /></Link>
      <Link to="/resume" className="resume"><FontAwesomeIcon icon={faFileLines} /></Link>
      <Link to="/portfilio" className="portfilio"><FontAwesomeIcon icon={faFolderOpen} /></Link>
      <Link to="" className="blog"><FontAwesomeIcon icon={faBlog} /></Link>

      <Tooltip anchorSelect=".home" place='left' >Home</Tooltip>
      <Tooltip anchorSelect=".about" place='left' >About Me</Tooltip>
      <Tooltip anchorSelect=".resume" place='left' >Resume</Tooltip>
      <Tooltip anchorSelect=".portfilio" place='left' >Portfilio</Tooltip>
      <Tooltip anchorSelect=".blog" place='left' >Blog</Tooltip>
    </div>
  );
};