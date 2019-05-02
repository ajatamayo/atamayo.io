import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';

import SmartphoneIcon from '@material-ui/icons/Smartphone';
import EmailIcon from '@material-ui/icons/Email';
import LocationOnIcon from '@material-ui/icons/LocationOn';

import { changeScreen } from '../actions/appActions';
import { LinkedinIcon, UnsplashIcon } from '../components/icons';

const styles = {
  buttonLink: {
    border: 'none',
    padding: 0,
    margin: 0,
    fontFamily: 'inherit',
    fontSize: '1em',
    color: 'rgb(0, 0, 238)',
    cursor: 'pointer',
  },
};

class Home extends Component {
  constructor(props) {
    super(props);

    this.goToPortfolio = this.goToPortfolio.bind(this);
  }

  goToPortfolio() {
    this.props.changeScreen(1);

    const { history } = this.props;
    history.push('/portfolio');
  }

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Typography component="h1" variant="h2">
          AJ Tamayo
        </Typography>

        <Typography variant="body2">
          I make websites and mobile apps. Hire me!
        </Typography>

        <List dense>
          <ListItem>
            <ListItemIcon>
              <SmartphoneIcon />
            </ListItemIcon>
            <ListItemText
              primary={
                <Fragment>
                  <a href="tel:+639985685747">(+63) 998 568 5747</a>
                  <span>&nbsp;&middot;&nbsp;</span>
                  <a href="tel:+639162455564">(+63) 916 245 5564</a>
                </Fragment>
              }
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <EmailIcon />
            </ListItemIcon>
            <ListItemText
              primary={<a href="mailto:aj@atamayo.io">aj@atamayo.io</a>}
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <LocationOnIcon />
            </ListItemIcon>
            <ListItemText
              primary="Makati, Metro Manila, PH"
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <UnsplashIcon />
            </ListItemIcon>
            <ListItemText
              primary={<a href="https://unsplash.com/@ajatamayo">https://unsplash.com/@ajatamayo</a>}
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <LinkedinIcon />
            </ListItemIcon>
            <ListItemText
              primary={<a href="https://www.linkedin.com/in/ajatamayo">https://www.linkedin.com/in/ajatamayo</a>}
            />
          </ListItem>
        </List>

        <Typography variant="body2">
          Hi! My name is AJ and I'm currently working as a Full Stack Developer over at <a href="https://qwikwire.com/">Qwikwire</a>.
          I graduated <em>cum laude</em> from the University of the Philippines with a Bachelor of Science in Electronics and Communications Engineering, but I ultimately fell in love with coding when I got my first job at <a href="https://icannhas.com/">icannhas</a>.
        </Typography>
        <Typography variant="body2">
          Since 2012, I've been developing websites and apps for various clients. And for {new Date().getFullYear() - 2016} years now, I've been doing freelance work too.
        </Typography>
        <Typography variant="body2">
          Check out my <button type="button" onClick={this.goToPortfolio} className={classes.buttonLink}>portfolio</button>!
        </Typography>
      </div>
    );
  }
}

const mapDispatchToProps = {
  changeScreen,
};

export default withRouter(connect(null, mapDispatchToProps)(withStyles(styles)(Home)));
