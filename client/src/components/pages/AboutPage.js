import React from 'react';
import coronavirus from '../../images/coronavirus.gif';

const AboutPage = () => {
  return (
    <React.Fragment>
      <div className='about-header'>
        <h3>About This App</h3>
        <p>
          <strong>Version: </strong> 2.0.0
        </p>
      </div>
      <div className='d-flex about'>
        <div className='left'>
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
            This app has relies on 2 different sources of data. These are as
            follows:
          </p>
          <ul className='sources'>
            <li>
              <a
                href='https://www.worldometers.info'
                rel='noopener noreferrer'
                target='_blank'
              >
                WordOMeters: www.worldometers.info
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
            All data is updated automatically. A big thanks to NovelCovid for
            providing JHU Data Repo and JavieraViles for WorldOMeter API. A big
            shoutout to them.
          </p>
          <p>
            I am planning to make the app open source very soon so anyone is
            welcome to contribute. The tech stack used for the application was
            Node JS, Express &amp; React.{' '}
          </p>
          <p>
            #corona #COVID2019 #covid19 #coronavirus #coronaapps #covid19apps
            #COVID19Pakistan #Coronavirus #Pakistan{' '}
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AboutPage;
