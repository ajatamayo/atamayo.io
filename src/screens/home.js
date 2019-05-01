import React, { Fragment } from 'react';

import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';

import SmartphoneIcon from '@material-ui/icons/Smartphone';
import EmailIcon from '@material-ui/icons/Email';
import LocationOnIcon from '@material-ui/icons/LocationOn';

import { LinkedinIcon, UnsplashIcon } from '../components/icons';

const styles = {
  header: {
    paddingTop: 100,
  },
  link: {
    textDecoration: 'none',
  },
};

function Home(props) {
  const { classes } = props;

  return (
    <div className="home">
      <Typography component="h1" variant="h2" gutterBottom className={classes.header}>
        AJ Tamayo
      </Typography>

      <Typography variant="body1" gutterBottom>
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
                <a href="tel:+639985685747" className={classes.link}>(+63) 998 568 5747</a>
                <span>&nbsp;&middot;&nbsp;</span>
                <a href="tel:+639162455564" className={classes.link}>(+63) 916 245 5564</a>
              </Fragment>
            }
          />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <EmailIcon />
          </ListItemIcon>
          <ListItemText
            primary={<a href="mailto:aj@atamayo.io" className={classes.link}>aj@atamayo.io</a>}
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
            primary={<a href="https://unsplash.com/@ajatamayo" className={classes.link}>https://unsplash.com/@ajatamayo</a>}
          />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <LinkedinIcon />
          </ListItemIcon>
          <ListItemText
            primary={<a href="https://www.linkedin.com/in/ajatamayo" className={classes.link}>https://www.linkedin.com/in/ajatamayo</a>}
          />
        </ListItem>
      </List>
    </div>
  );
}

export default withStyles(styles)(Home);
