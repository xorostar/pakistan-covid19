import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer>
      Made with <FontAwesomeIcon icon={faHeart} /> by {` `}
      <a
        href='https://www.aswadali.me'
        target='_blank'
        rel='noopener noreferrer'
      >
        Aswad Ali
      </a>
    </footer>
  );
};

export default Footer;
