import React, { Component } from 'react';
import { classNames } from 'react-extras';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import obstruction from 'obstruction';

import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import FolderSpecialIcon from '@material-ui/icons/FolderSpecial';
import PersonIcon from '@material-ui/icons/Person';

import { changeScreen } from '../actions/appActions';

const styles = {
  root: {
    maxWidth: 600,
    position: 'fixed',
    width: '100%',
    bottom: 0,
    boxShadow: '0 -3px 8px 0 rgba(0, 0, 0, 0.2)',
    marginLeft: -25,
    zIndex: 10,
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

export const SCREEN_PROFILE = 'profile';
export const SCREEN_PORTFOLIO = 'portfolio';
export const SCREEN_WORK_WITH_ME = 'workWithMe';

export const SCREENS = {
  [SCREEN_PROFILE]: {
    url: '/',
    icon: <PersonIcon />,
    label: 'Profile',
  },
  [SCREEN_PORTFOLIO]: {
    url: '/portfolio',
    icon: <FolderSpecialIcon />,
    label: 'Portfolio',
  },
  [SCREEN_WORK_WITH_ME]: {
    url: '/work-with-me',
    icon: <AssignmentTurnedInIcon />,
    label: 'Work with me!',
  },
};

class Navigation extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  componentWillMount() {
    const { location } = this.props;
    const initScreenKey = Object.keys(SCREENS).find(key => SCREENS[key].url === location.pathname);
    this.props.changeScreen(initScreenKey);
  }

  handleChange(event, value) {
    this.props.changeScreen(value);

    const { history } = this.props;
    history.push(SCREENS[value].url);
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
          {Object.keys(SCREENS).map(key => (
            <BottomNavigationAction
              key={key}
              label={SCREENS[key].label}
              icon={SCREENS[key].icon}
              value={key}
              classes={{
                wrapper: classNames( classes.navAction, { [classes.selected]: activeScreen === key } )
              }}
            />
          ))}
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
