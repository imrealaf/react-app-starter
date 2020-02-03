import React, { Fragment } from 'react';

import './App.scss';

import Routes from './Routes';

const App = () => {
  return (
    <Fragment>
      <main id='main' role='main'>
        <Routes />
      </main>
    </Fragment>
  );
};

export default App;
