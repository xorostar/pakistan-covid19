import React from 'react';
import coronavirus from '../../images/coronavirus.gif';

const AboutPage = () => {
  return (
    <main>
      <div className='about-header'>
        <h3>About This App</h3>
        <p>
          <strong>Version: </strong> 2.0.0
        </p>
      </div>
      <div className='d-flex about'>
        <div
          className='left'
          style={{ overflow: 'hidden', marginBottom: '10px' }}
        >
          <img
            style={{ marginBottom: '15px' }}
            src={coronavirus}
            alt=''
            width='100%'
          />
        </div>
        <div className='right'>
          <h3 style={{ marginTop: '0px' }}>Pakistan Covid 19 Data</h3>
          <p>
            Build with ❤ by {` `}
            <a
              href='https://www.aswadali.me'
              target='_blank'
              rel='noopener noreferrer'
            >
              Aswad Ali
            </a>{' '}
          </p>
          <p>
            This app relies on Novel Coronavirus (COVID-19) data provided by the
            following data sources:
          </p>
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
            <strong>Disclaimer:</strong> <br /> This website relies upon
            publicly available data from multiple sources, that do not always
            agree. We hereby disclaim any and all representations and warranties
            with respect to the Website, including accuracy, fitness for use,
            and merchantability.
          </p>
        </div>
      </div>
    </main>
  );
};

export default AboutPage;
