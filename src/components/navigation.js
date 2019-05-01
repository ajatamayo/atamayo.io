import React, { Component } from 'react';
import { classNames } from 'react-extras';

import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import PersonIcon from '@material-ui/icons/Person';
import FolderSpecialIcon from '@material-ui/icons/FolderSpecial';
import WebIcon from '@material-ui/icons/Web';

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

class Navigation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 0,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event, value) {
    this.setState({ value });
  }

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <BottomNavigation
          value={value}
          onChange={this.handleChange}
          showLabels
          className={classes.nav}
        >
          <BottomNavigationAction label="Profile" icon={<PersonIcon />} classes={{ wrapper: classNames( classes.navAction, { [classes.selected]: this.state.value === 0 } ) }} />
          <BottomNavigationAction label="Portfolio" icon={<FolderSpecialIcon />} classes={{ wrapper: classNames( classes.navAction, { [classes.selected]: this.state.value === 1 } ) }} />
          <BottomNavigationAction label="Blog" icon={<WebIcon />} classes={{ wrapper: classNames( classes.navAction, { [classes.selected]: this.state.value === 2 } ) }} />
        </BottomNavigation>
      </div>
    );
  }
}

export default withStyles(styles)(Navigation);
