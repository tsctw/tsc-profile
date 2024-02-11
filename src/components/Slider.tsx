import React from 'react';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

export const Slider = () => {
  return (
    <div className="flex gap-4 flex-col justify-around items-center h-100 w-16 bg-zinc-700 text-white rounded-t-full rounded-b-full p-5">
      <Link to="/"><FontAwesomeIcon icon={faChevronRight} /></Link>      
      <Link to="/"><FontAwesomeIcon icon={faChevronLeft} /></Link>
    </div>
  );
};