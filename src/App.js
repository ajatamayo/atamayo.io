import React from 'react';
import HttpsRedirect from 'react-https-redirect';
import {
  Route,
  Switch,
  withRouter,
} from 'react-router-dom';
import { Sidebar } from './components';
import {
  Blog,
  Home,
} from './screens';
import './App.css';

function App() {
  return (
    <HttpsRedirect>
      <div className="app">
        <Sidebar />
        <Switch>
          <Route exact path="/" render={ownProps => <Home {...ownProps} />} />
          <Route exact path="/blog" render={ownProps => <Blog {...ownProps} />} />
        </Switch>
      </div>
    </HttpsRedirect>
  );
}

export default withRouter(App);
