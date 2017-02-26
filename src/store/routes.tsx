import * as React from 'react';
const { IndexRoute, Route } = require('react-router');

import App from '../containers/app';
import AboutPage from '../containers/about-page';
import TestPage from '../containers/test-page';
import CounterPage from '../containers/counter-page';


export default (
  <Route path="/" component={ App }>
    <IndexRoute component={ CounterPage }/>
    <Route path="test" component={ TestPage }/>
    <Route path="about" component={ AboutPage }/>
  </Route>
);
