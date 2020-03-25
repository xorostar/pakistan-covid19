import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer>
      <small
        style={{
          fontFamily: 'Montserrat, sans-serif',
          fontSize: '10px',
          marginBottom: '10px',
          display: 'block'
        }}
      >
        All Sources: www.worldometers.info, World Health Organization (WHO)
        &amp; John Hopkins University (JHU)
      </small>
      Made with <FontAwesomeIcon icon={faHeart} color='#FF6E6E' /> by {` `}
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
