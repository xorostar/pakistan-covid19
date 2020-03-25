import React from 'react';

const PreventionPage = () => {
  return (
    <main>
      <h3 style={{ textTransform: 'none', textAlign: 'center' }}>
        We will update this page soon with resources related to COVID-19
        prevention, here. For now here is a quick resource guide from the W.H.O
        (World Health Organization) on how to prevent and protect ourself from
        acquiring the virus.
      </h3>
      <br />
      <iframe
        src='https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public'
        width='100%'
        style={{ height: '100vh' }}
        frameBorder='0'
      ></iframe>
    </main>
  );
};

export default PreventionPage;
