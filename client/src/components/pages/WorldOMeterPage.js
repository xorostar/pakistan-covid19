import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBiohazard,
  faSmileBeam,
  faFrown,
  faSkull,
  faAmbulance
} from '@fortawesome/free-solid-svg-icons';

import Loader from '../layouts/Loader';

const WorldOMeterPage = () => {
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState(null);

  useEffect(() => {
    axios
      .get('https://coronavirus-19-api.herokuapp.com/countries/pakistan')
      .then(res => {
        const data = res.data;
        data.fatalityRate = ((data.deaths / data.cases) * 100).toPrecision(2);
        data.recoveryRate = ((data.recovered / data.cases) * 100).toPrecision(
          2
        );
        setStats(data);
        setLoading(false);
      })
      .catch(err => {
        setLoading(false);
      });
    // eslint-disable-next-line
  }, []);

  if (loading) {
    document.body.classList.add('loading');
    return <Loader />;
  } else {
    document.body.classList.remove('loading');
  }

  return (
    <main className='world-o-meter-page'>
      <div className='section-header'>
        <h3>Situation Updates from WordOMeters</h3>
      </div>
      <div className='stats'>
        <div className='bg-reddish-pink main-stat stat'>
          <h2 className='stat-label'>
            <FontAwesomeIcon icon={faBiohazard} />
            <span>Confirmed Cases</span>
          </h2>
          <h3 className='stat-count'>{stats.cases}</h3>
          <small style={{ textAlign: 'right', fontSize: '20px' }}>
            {stats.active} Active Cases
          </small>
        </div>
        <div className='stat bg-green'>
          <h2 className='stat-label'>
            <FontAwesomeIcon icon={faSmileBeam} /> {` `}
            <span>Recovered</span>
          </h2>
          <h3 className='stat-count'>{stats.recovered}</h3>
          <small style={{ textAlign: 'right', fontSize: '20px' }}>
            {stats.recoveryRate}% Recovery Rate
          </small>
        </div>
        <div className='stat bg-purple'>
          <h2 className='stat-label'>
            <FontAwesomeIcon icon={faFrown} /> {` `}
            <span>Critical</span>
          </h2>
          <h3 className='stat-count'>{stats.critical}</h3>
        </div>
        <div className='stat bg-black'>
          <h2 className='stat-label'>
            <FontAwesomeIcon icon={faSkull} /> {` `}
            <span>Deaths</span>
          </h2>
          <h3 className='stat-count'>{stats.deaths}</h3>
          <small style={{ textAlign: 'right', fontSize: '20px' }}>
            {stats.fatalityRate}% Death Rate
          </small>
        </div>
        <div className='stat bg-grey'>
          <h2 className='stat-label'>
            <FontAwesomeIcon icon={faAmbulance} /> {` `}
            <span>
              Cases <br /> Today
            </span>
          </h2>
          <h3 className='stat-count'>{stats.todayCases}</h3>
        </div>
        <div className='stat bg-grey'>
          <h2 className='stat-label'>
            <FontAwesomeIcon icon={faAmbulance} /> {` `}
            <span>
              Cases Per <br /> Million
            </span>
          </h2>
          <h3 className='stat-count'>{stats.casesPerOneMillion}</h3>
        </div>
        <div className='stat bg-black'>
          <h2 className='stat-label'>
            <FontAwesomeIcon icon={faSkull} /> {` `}
            <span>
              Deaths <br />
              Today
            </span>
          </h2>
          <h3 className='stat-count'>{stats.todayDeaths}</h3>
        </div>
      </div>
    </main>
  );
};

export default WorldOMeterPage;
