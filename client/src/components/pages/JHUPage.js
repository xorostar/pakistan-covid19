import React, { useEffect, useState } from 'react';
import moment from 'moment';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBiohazard,
  faSmileBeam,
  faSkull,
  faAmbulance
} from '@fortawesome/free-solid-svg-icons';
import Loader from '../layouts/Loader';

const JHUPage = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [stats, setStats] = useState(null);

  useEffect(() => {
    axios
      .get('/api/jhu-stats')
      .then(res => {
        setStats(res.data);
        setLoading(false);
      })
      .catch(err => {
        setError({
          message: err.response.data
        });
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

  if (error) {
    return (
      <h3
        className='text-center'
        style={{
          width: '75%',
          margin: 'auto',
          marginTop: '30px'
        }}
      >
        {error.message}
      </h3>
    );
  }

  return (
    <main className='jhu-page'>
      <div className='section-header'>
        <h3>Situation Updates from JHU Data Repository</h3>
        <small className='last-update'>
          <strong>Last Updated:</strong>{' '}
          {moment(new Date(stats.last_update)).format(
            'MMMM Do YYYY, h:mm:ss a'
          )}{' '}
          (UTC)
        </small>
      </div>
      <div className='stats jhu-stats'>
        <div className='bg-reddish-pink main-stat stat'>
          <h2 className='stat-label'>
            <FontAwesomeIcon icon={faBiohazard} />
            <span>Confirmed Cases</span>
          </h2>
          <h3 className='stat-count'>{stats.confirmed}</h3>
          <small style={{ textAlign: 'right', fontSize: '20px' }}>
            {stats.active} Active Cases
          </small>
        </div>
        <div className='stat stat-horizontal bg-green'>
          <h2 className='stat-label'>
            <FontAwesomeIcon icon={faSmileBeam} /> {` `}
            <span>Recovered</span>
          </h2>
          <h3 className='stat-count'>{stats.recovered}</h3>
          <small style={{ textAlign: 'right', fontSize: '20px' }}>
            {stats.fatalityRate}% Recovery Rate
          </small>
        </div>
        <div className='stat stat-horizontal bg-black'>
          <h2 className='stat-label'>
            <FontAwesomeIcon icon={faSkull} /> {` `}
            <span>Deaths</span>
          </h2>
          <h3 className='stat-count'>{stats.deaths}</h3>
          <small style={{ textAlign: 'right', fontSize: '20px' }}>
            {stats.fatalityRate}% Fatality Rate
          </small>
        </div>
        <div className='stat stat-horizontal bg-grey'>
          <h2 className='stat-label'>
            <FontAwesomeIcon icon={faAmbulance} /> {` `}
            <span>
              Cases <br /> Today
            </span>
          </h2>
          <h3 className='stat-count'>{stats.todayCases}</h3>
        </div>
        <div className='stat stat-horizontal bg-black'>
          <h2 className='stat-label'>
            <FontAwesomeIcon icon={faSkull} /> {` `}
            <span>
              Deaths <br /> Today
            </span>
          </h2>
          <h3 className='stat-count'>{stats.todayDeaths}</h3>
        </div>
      </div>
    </main>
  );
};

export default JHUPage;
