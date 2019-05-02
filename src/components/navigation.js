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

const SIDEBAR_WIDTH_MD = 200;
const SIDEBAR_WIDTH_LG = 300;
const PRIMARY_COLOR = '#1a237e';

const styles = theme => ({
  root: {
    position: 'fixed',
    width: '100%',
    bottom: 0,
    boxShadow: '0 -3px 8px 0 rgba(0, 0, 0, 0.2)',
    marginLeft: -25,
    zIndex: 10,

    [theme.breakpoints.up('md')]: {
      position: 'relative',
      marginLeft: 0,
      width: SIDEBAR_WIDTH_MD,
    },

    [theme.breakpoints.up('lg')]: {
      width: SIDEBAR_WIDTH_LG,
    },
  },
  nav: {
    [theme.breakpoints.down('sm')]: {
      backgroundColor: PRIMARY_COLOR,
    },

    [theme.breakpoints.up('md')]: {
      flexDirection: 'column',
      height: 'auto',
      position: 'fixed',
      width: SIDEBAR_WIDTH_MD,
      top: SIDEBAR_WIDTH_MD,
    },

    [theme.breakpoints.up('lg')]: {
      width: SIDEBAR_WIDTH_LG,
      top: SIDEBAR_WIDTH_LG,
    },
  },
  navButton: {
    [theme.breakpoints.down('sm')]: {
      paddingLeft: 0,
      paddingRight: 0,
    },

    [theme.breakpoints.up('md')]: {
      maxWidth: 'none',
      padding: '11px 24px 10px',
    },

    [theme.breakpoints.up('lg')]: {
      paddingLeft: 32,
      paddingRight: 32,
    },
  },
  navAction: {
    [theme.breakpoints.down('sm')]: {
      color: 'white',
      opacity: 0.5,
    },

    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'normal',
    },
  },
  selected: {
    [theme.breakpoints.down('sm')]: {
      opacity: 1,
    },
  },
  icon: {
    [theme.breakpoints.up('md')]: {
      marginRight: 24,
    },

    [theme.breakpoints.up('lg')]: {
      marginRight: 32,
    },
  },
  navButtonLabel: {
    [theme.breakpoints.up('md')]: {
      fontSize: '1rem',
    },
  },
  navButtonSelected: {
    [theme.breakpoints.up('md')]: {
      transition: 'background-color 700ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
      backgroundColor: 'rgba(0, 0, 0, 0.05)',
      paddingTop: '11px !important',

      '& svg': {
        '& + span': {
          paddingTop: '0 !important',
          backgroundColor: 'transparent',
        },
      },
    },
  },
  me: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },

    color: 'white',
    backgroundColor: PRIMARY_COLOR,
    height: SIDEBAR_WIDTH_MD,
    width: SIDEBAR_WIDTH_MD - (24 * 2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'center',
    padding: '0 24px',
    position: 'fixed',

    [theme.breakpoints.up('lg')]: {
      height: SIDEBAR_WIDTH_LG,
      width: SIDEBAR_WIDTH_LG - (32 * 2),
      padding: '0 32px',
    },

    '& h1': {
      margin: 0,
      fontSize: '0.9rem',
      fontWeight: 400,
      lineHeight: '0.9rem',
    },

    '& h2': {
      margin: 0,
      fontSize: '1.7rem',
      fontWeight: 400,
      lineHeight: '2.4rem',
    },
  },
});

export const SCREEN_PROFILE = 'profile';
export const SCREEN_PORTFOLIO = 'portfolio';
export const SCREEN_WORK_WITH_ME = 'workWithMe';

export const SCREENS = {
  [SCREEN_PROFILE]: {
    url: '/',
    icon: props => <PersonIcon {...props} />,
    label: 'Profile',
  },
  [SCREEN_PORTFOLIO]: {
    url: '/portfolio',
    icon: props => <FolderSpecialIcon {...props} />,
    label: 'Portfolio',
  },
  [SCREEN_WORK_WITH_ME]: {
    url: '/work-with-me',
    icon: props => <AssignmentTurnedInIcon {...props} />,
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
        <div className={classes.me}>
          <h2>AJ <strong>Tamayo</strong></h2>
          <h1>Software Engineer</h1>
        </div>
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
              icon={SCREENS[key].icon({ classes: { root: classes.icon } })}
              value={key}
              classes={{
                root: classes.navButton,
                wrapper: classNames( classes.navAction, { [classes.selected]: activeScreen === key } ),
                label: classes.navButtonLabel,
                selected: classes.navButtonSelected,
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
