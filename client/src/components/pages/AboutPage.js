import React from 'react';
import coronavirus from '../../images/coronavirus.gif';

const AboutPage = () => {
  return (
    <main>
      <div className='section-header'>
        <h3>About This Web App</h3>
        <p>
          <strong>Version: </strong> 2.2.0
        </p>
      </div>
      <div className='d-flex about'>
        <div
          className='left'
          style={{ overflow: 'hidden', marginBottom: '10px', minWidth: '30vw' }}
        >
          <img
            style={{
              objectFit: 'cover',
              marginBottom: '15px',
              height: '100%'
            }}
            src={coronavirus}
            alt=''
            width='100%'
          />
        </div>
        <div className='right'>
          <h3 style={{ marginTop: '0px' }}>Pakistan Covid 19 Data</h3>
          <p>
            This web app was developed by{' '}
            <a
              href='https://www.aswadali.me'
              target='_blank'
              rel='noopener noreferrer'
            >
              Aswad Ali
            </a>
            , a student at University of South Asia, Lahore.{' '}
          </p>
          <p>
            The goal of this project is to present data in a simple, accurate
            and timely way to raise awareness about the impact of COVID-19 in
            Pakistan.
          </p>

          <p>This app relies on data from the following sources:</p>
          <ul className='sources'>
            <li>
              <a
                href='https://www.worldometers.info'
                rel='noopener noreferrer'
                target='_blank'
              >
                WordOMeters: www.worldometers.info (API by JavieraViles)
              </a>
            </li>
            <li>
              <a
                href='https://github.com/CSSEGISandData/COVID-19'
                rel='noopener noreferrer'
                target='_blank'
              >
                JHU Data: 2019 Novel Coronavirus COVID-19 (2019-nCoV) Data
                Repository by Johns Hopkins CSSE
              </a>
            </li>
          </ul>
          <p>
            All data is updated automatically. A big thanks to {` `}
            <a
              href='https://github.com/javieraviles/covidAPI'
              rel='noopener noreferrer'
              target='_blank'
            >
              CSSEGISandData
            </a>{' '}
            for providing data collected by John Hopkins University (JHU) and{' '}
            {` `}
            <a
              href='https://github.com/javieraviles/covidAPI'
              rel='noopener noreferrer'
              target='_blank'
            >
              JavieraViles
            </a>{' '}
            {` `}
            for WorldOMeter API. A big shoutout to them.
          </p>
          <p>
            <p>
              Comments, recommendations, and corrections are welcome. Please
              reach out to{' '}
              <a href='mailto:aswad@aswadali.me'>aswad@aswadali.me</a>
            </p>
            <strong>Disclaimer:</strong> <br /> This website relies upon
            publicly available data from multiple sources, that do not always
            agree. We hereby disclaim any and all representations and warranties
            with respect to the Website, including accuracy or fitness for use
          </p>
        </div>
      </div>
    </main>
  );
};

export default AboutPage;
