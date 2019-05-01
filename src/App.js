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
  Blog,
  Home,
  Portfolio,
} from './screens';

import bgImage from './images/background.jpg';

const styles = {
  root: {
    minHeight: 'calc(100vh - 56px)',
    maxWidth: '600px',
    margin: '0 auto',
    padding: '0 25px 56px',

    backgroundImage: `url(${bgImage})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center right',
    backgroundAttachment: 'fixed',
  },
};

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <HttpsRedirect>
        <div className={classes.root}>
          <Switch>
            <Route exact path="/" render={ownProps => <Home {...ownProps} />} />
            <Route exact path="/blog" render={ownProps => <Blog {...ownProps} />} />
            <Route exact path="/portfolio" render={ownProps => <Portfolio {...ownProps} />} />
          </Switch>
          <Navigation />
        </div>
      </HttpsRedirect>
    );
  }
}

export default withRouter(withStyles(styles)(App));
