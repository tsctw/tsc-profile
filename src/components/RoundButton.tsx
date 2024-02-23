import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'gatsby';

type RoundButtonProps = {icon: IconDefinition, to: string, onClick?: () => void};

export const RoundButton = ({icon, to, onClick}: RoundButtonProps) => {
  return (
    <button className="round-button" onClick={onClick}>
      <div className="round-button-circle">
        <Link to={to} target="_blank">
          <FontAwesomeIcon icon={icon} />
        </Link>
      </div>
    </button>
  );
};