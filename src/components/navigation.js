import React, { Component } from 'react';
import { classNames } from 'react-extras';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import obstruction from 'obstruction';

import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import PersonIcon from '@material-ui/icons/Person';
import FolderSpecialIcon from '@material-ui/icons/FolderSpecial';
import WebIcon from '@material-ui/icons/Web';

import { changeScreen } from '../actions/appActions';

const styles = {
  root: {
    maxWidth: 600,
    position: 'fixed',
    width: '100%',
    bottom: 0,
    boxShadow: '0 -3px 8px 0 rgba(0, 0, 0, 0.2)',
    marginLeft: -25,
  },
  nav: {
    backgroundColor: '#1a237e',
  },
  navAction: {
    color: 'white',
    opacity: 0.5,
  },
  selected: {
    opacity: 1,
  },
};

const URLS = [
  '/',
  '/portfolio',
  '/blog',
];

class Navigation extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  componentWillMount() {
    const { location } = this.props;
    this.props.changeScreen(URLS.indexOf(location.pathname));
  }

  handleChange(event, value) {
    this.props.changeScreen(value);

    const { history } = this.props;
    history.push(URLS[value]);
  }

  render() {
    const { classes, activeScreen } = this.props;

    return (
      <div className={classes.root}>
        <BottomNavigation
          value={activeScreen}
          onChange={this.handleChange}
          showLabels
          className={classes.nav}
        >
          <BottomNavigationAction label="Profile" icon={<PersonIcon />} classes={{ wrapper: classNames( classes.navAction, { [classes.selected]: activeScreen === 0 } ) }} />
          <BottomNavigationAction label="Portfolio" icon={<FolderSpecialIcon />} classes={{ wrapper: classNames( classes.navAction, { [classes.selected]: activeScreen === 1 } ) }} />
          <BottomNavigationAction label="Blog" icon={<WebIcon />} classes={{ wrapper: classNames( classes.navAction, { [classes.selected]: activeScreen === 2 } ) }} />
        </BottomNavigation>
      </div>
    );
  }
}

const mapStateToProps = obstruction({
  activeScreen: 'app.activeScreen',
});

const mapDispatchToProps = {
  changeScreen,
};

export default withRouter(withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(Navigation)));
