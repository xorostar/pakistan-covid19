import React, { useEffect, useState } from 'react';
import moment from 'moment';
import axios from 'axios';
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
      <small className='last-update'>
        <strong>Last Updated:</strong>{' '}
        {moment(new Date(stats.last_update)).format('MMMM Do YYYY, h:mm:ss a')}{' '}
        (UTC)
      </small>
      <div className='stats jhu-stats'>
        <div className='bg-reddish-pink main-stat stat'>
          <h2 className='stat-label'>Confirmed Cases</h2>
          <h3 className='stat-count'>{stats.confirmed}</h3>
          <small style={{ textAlign: 'right', fontSize: '20px' }}>
            {stats.activeCases} Active Cases
          </small>
        </div>
        <div className='stat stat-horizontal bg-green'>
          <h2 className='stat-label'>Recovered</h2>
          <h3 className='stat-count'>{stats.recovered}</h3>
        </div>
        <div className='stat stat-horizontal bg-black'>
          <h2 className='stat-label'>Deaths</h2>
          <h3 className='stat-count'>{stats.deaths}</h3>
        </div>
        <div className='stat stat-horizontal bg-grey'>
          <h2 className='stat-label'>
            Cases <br /> (24 HRS)
          </h2>
          <h3 className='stat-count'>{stats.todayCases}</h3>
        </div>
        <div className='stat stat-horizontal bg-black'>
          <h2 className='stat-label'>
            Deaths <br />
            (24 HRS)
          </h2>
          <h3 className='stat-count'>{stats.todayDeaths}</h3>
        </div>
      </div>
    </main>
  );
};

export default JHUPage;
