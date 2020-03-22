import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Loader from '../layouts/Loader';

const WorldOMeterPage = () => {
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState(null);

  useEffect(() => {
    axios
      .get('https://coronavirus-19-api.herokuapp.com/countries/pakistan')
      .then(res => {
        setStats(res.data);
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
    <main>
      <div className='stats'>
        <div className='bg-reddish-pink main-stat stat'>
          <h2 className='stat-label'>Confirmed Cases</h2>
          <h3 className='stat-count'>{stats.cases}</h3>
          <small style={{ textAlign: 'right', fontSize: '20px' }}>
            {stats.active} Active Cases
          </small>
        </div>
        <div className='stat bg-green'>
          <h2 className='stat-label'>Recovered</h2>
          <h3 className='stat-count'>{stats.recovered}</h3>
        </div>
        <div className='stat bg-purple'>
          <h2 className='stat-label'>Critical</h2>
          <h3 className='stat-count'>{stats.critical}</h3>
        </div>
        <div className='stat bg-black'>
          <h2 className='stat-label'>Deaths</h2>
          <h3 className='stat-count'>{stats.deaths}</h3>
        </div>
        <div className='stat bg-grey'>
          <h2 className='stat-label'>
            Cases <br /> (24 HRS)
          </h2>
          <h3 className='stat-count'>{stats.todayCases}</h3>
        </div>
        <div className='stat bg-black'>
          <h2 className='stat-label'>
            Deaths <br />
            (24 HRS)
          </h2>
          <h3 className='stat-count'>{stats.todayDeaths}</h3>
        </div>
        <div className='stat bg-grey'>
          <h2 className='stat-label'>
            Cases Per <br /> Million
          </h2>
          <h3 className='stat-count'>{stats.casesPerOneMillion}</h3>
        </div>
      </div>
    </main>
  );
};

export default WorldOMeterPage;
