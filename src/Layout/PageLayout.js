import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from '../Components/Common/Header';
import Overview from '../Components/Overview';
import UserNodes from '../Components/UserNodes';

const PageLayout = props => {
  return (
    <div className="App">
      <main className="contentContainer">
        <Header />
        <div className="container-fluid">
          <div className="row">
            <Switch>
              <Route exact path="/users-skills/:token" component={Overview} />
              <Route exact path="/kanban/:token" component={Overview} />
            </Switch>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PageLayout;
