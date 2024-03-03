import React from 'react';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { useLocation } from '@reach/router';
import { Pages, routers } from './utils/routers';

export const Slider = () => {
  const location = useLocation();
  const currentPath = location.pathname as Pages;

  return (
    <div className="flex gap-4 flex-col justify-around items-center 
      h-100 w-16 bg-zinc-700 text-white rounded-t-full rounded-b-full p-5">
      <Link className="hover:text-orange-500" to={`${routers[currentPath].next}`}>
        <FontAwesomeIcon icon={faChevronRight} />
      </Link>
      <Link className="hover:text-orange-500" to={`${routers[currentPath].prev}`}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </Link>
    </div>
  );
};