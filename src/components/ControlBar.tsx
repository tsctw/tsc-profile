import React from 'react';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faUser, faFolderOpen, faFileLines } from '@fortawesome/free-solid-svg-icons';
import { Tooltip } from 'react-tooltip';
import { useLocation } from '@reach/router';
import { Pages } from './utils/routers';

const lists = [
  {
    path: Pages.HOME,
    name: 'home',
    icon: faHouse,
    anchorSelect: '.home',
    displayName: 'Home'
  },
  {
    path: Pages.ABOUT,
    name: 'about',
    icon: faUser,
    anchorSelect: '.about',
    displayName: 'About'
  },
  {
    path: Pages.RESUME,
    name: 'resume',
    icon: faFileLines,
    anchorSelect: '.resume',
    displayName: 'Resume'
  },
  {
    path: Pages.PORTFILIO,
    name: 'portfilio',
    icon: faFolderOpen,
    anchorSelect: '.portfilio',
    displayName: 'Portfilio'
  },
];

export const ControlBar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className="flex gap-4 flex-col justify-around items-center h-100 w-16 bg-zinc-700 text-white rounded-t-full rounded-b-full p-5">
      {lists.map((list) =>
        <>
          <Link to={list.path} className={`${list.name} ${currentPath === list.path ? 'text-orange-500' : ''}`}><FontAwesomeIcon icon={list.icon} /></Link>
          <Tooltip anchorSelect={list.anchorSelect} place='left' className="text-sm">{list.displayName}</Tooltip>
        </>
      )}
    </div>
  );
};