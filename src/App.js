import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PageLayout from './Layout/PageLayout';

import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={PageLayout} />
    </Switch>
  </BrowserRouter>
);

export default App;
