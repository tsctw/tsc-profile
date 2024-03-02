import React, { useContext } from 'react';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faUser, faFolderOpen, faFileLines } from '@fortawesome/free-solid-svg-icons';
import { faSun, faMoon } from '@fortawesome/free-regular-svg-icons';
import { Tooltip } from 'react-tooltip';
import { useLocation } from '@reach/router';
import { Pages } from './utils/routers';
import { ModeTheme, ModeType, ThemeContext } from '../hooks/hooks';

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

  const { mode, setMode }: ModeType = useContext(ThemeContext);

  const toggleTheme = () => {
    if (mode === ModeTheme.LIGHT) {
      document.documentElement.classList.add(ModeTheme.DARK);
      setMode(ModeTheme.DARK);
    } else {
      document.documentElement.classList.remove(ModeTheme.DARK);
      setMode(ModeTheme.LIGHT);
    }
  };

  const showingThemeIcon = () => {
    if (mode === ModeTheme.LIGHT) {
      return faMoon;
    }
    return faSun;
  };

  const showingThemeTooltip = () => {
    if (mode === ModeTheme.LIGHT) {
      return 'Toggle dark mode';
    }
    return 'Toggle light mode';
  };


  return (
    <div className="flex gap-4 flex-col justify-around items-center h-100 w-16 bg-zinc-700 text-white rounded-t-full rounded-b-full p-5">
      {lists.map((list, key) =>
        <div key={key}>
          <Link to={list.path} className={`${list.name} ${currentPath === list.path ? 'text-orange-500' : ''}`}>
            <FontAwesomeIcon icon={list.icon} />
          </Link>
          <Tooltip anchorSelect={list.anchorSelect} place='left' style={{ fontSize: '14px' }}>{list.displayName}</Tooltip>
        </div>
      )}
      <button className="theme" onClick={toggleTheme}>
        <FontAwesomeIcon icon={showingThemeIcon()} />
      </button>
      <Tooltip anchorSelect=".theme" place='left' style={{ fontSize: '14px' }}>{showingThemeTooltip()}</Tooltip>
    </div>
  );
};