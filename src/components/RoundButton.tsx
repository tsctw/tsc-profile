import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'gatsby';

export const RoundButton = ({icon, to}: {icon: IconDefinition, to: string}) => {
  return (
    <button className="button">
      <div className="button-circle">
        <Link to={to} target="_blank">
          <FontAwesomeIcon icon={icon} />
        </Link>
      </div>
    </button>
  );
};