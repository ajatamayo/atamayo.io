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

const styles = theme => ({
  root: {
    minHeight: 'calc(100vh - 127px)',
    margin: '0 auto',
    padding: '0 25px 127px',

    [theme.breakpoints.up('md')]: {
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'row-reverse',
      padding: 0,
    },

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
  main: {
    [theme.breakpoints.up('md')]: {
      flex: 1,
      padding: '0 25px',
    },
  },
  mainWrapper: {
    maxWidth: 800,

    [theme.breakpoints.up('lg')]: {
      paddingTop: 50,
    },
  },
});

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <HttpsRedirect disabled>
        <div className={classes.root}>
          <div className={classes.main}>
            <div className={classes.mainWrapper}>
              <Switch>
                <Route exact path="/" render={ownProps => <Home {...ownProps} />} />
                <Route exact path="/work-with-me" render={ownProps => <WorkWithMe {...ownProps} />} />
                <Route exact path="/portfolio" render={ownProps => <Portfolio {...ownProps} />} />
              </Switch>
            </div>
          </div>
          <Navigation />
        </div>
      </HttpsRedirect>
    );
  }
}

export default withRouter(withStyles(styles)(App));
