import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/layouts/Header';
import WorldOMeterPage from './components/pages/WorldOMeterPage';
import JHUPage from './components/pages/JHUPage';
import AboutPage from './components/pages/AboutPage';
import Footer from './components/layouts/Footer';

const App = () => {
  return (
    <React.Fragment>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={WorldOMeterPage} />
          <Route exact path='/jhu-data' component={JHUPage} />
          <Route exact path='/about' component={AboutPage} />
        </Switch>
        <Footer />
      </Router>
    </React.Fragment>
  );
};

export default App;
