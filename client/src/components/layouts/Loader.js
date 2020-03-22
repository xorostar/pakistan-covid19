import React from 'react';
import coronavirus from '../../images/coronavirus.gif';

const Loader = () => {
  return (
    <div id='loader-container'>
      <img id='loader' src={coronavirus} alt='Loading...' />
    </div>
  );
};

export default Loader;
