import React, { Component } from 'react';
import HttpsRedirect from 'react-https-redirect';
import {
  Route,
  Switch,
  withRouter,
} from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';

import { Navigation } from './components';
import {
  Home,
  Portfolio,
  WorkWithMe,
} from './screens';

import bgImage from './images/background.jpg';

const styles = {
  root: {
    minHeight: 'calc(100vh - 156px)',
    maxWidth: '767px',
    margin: '0 auto',
    padding: '0 25px 156px',

    '&::before': {
      content: '""',
      display: 'block',
      position: 'fixed',
      left: 0,
      top: 0,
      width: '100%',
      height: '100%',
      zIndex: -10,
      background: `url(${bgImage}) no-repeat center center`,
      backgroundSize: 'cover',
    },
  },
};

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <HttpsRedirect disabled>
        <div className={classes.root}>
          <Switch>
            <Route exact path="/" render={ownProps => <Home {...ownProps} />} />
            <Route exact path="/work-with-me" render={ownProps => <WorkWithMe {...ownProps} />} />
            <Route exact path="/portfolio" render={ownProps => <Portfolio {...ownProps} />} />
          </Switch>
          <Navigation />
        </div>
      </HttpsRedirect>
    );
  }
}

export default withRouter(withStyles(styles)(App));
