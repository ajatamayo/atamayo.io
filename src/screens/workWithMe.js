import React, { Component, Fragment } from 'react';

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import CakeIcon from '@material-ui/icons/Cake';
import DescriptionIcon from '@material-ui/icons/Description';
import SentimentSatisfiedAltIcon from '@material-ui/icons/SentimentSatisfiedAlt';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';

import { ContactForm } from '../components';

const styles = {
  icon: {
    color: 'rgba(0, 0, 0, 0.87)',
  },
  text: {
    fontSize: '1rem',
  },
};

class WorkWithMe extends Component {
  render() {
    const LIST = [
      {
        key: 'goal',
        icon: <CakeIcon />,
        text: 'First, I\'ll need to understand what your goal is. To help start this conversation, there\'s a short form down below which you can answer.',
      },
      {
        key: 'meet',
        icon: <SentimentSatisfiedAltIcon />,
        text: 'Next, we\'ll meet online (or maybe in person if geography permits us!) to get to understand the other better.',
      },
      {
        key: 'proposal',
        icon: <DescriptionIcon />,
        text: 'Then, I\'ll send you a proposal detailing what to expect and when to expect them, a breakdown of what it\'s going to cost, how we\'ll monitor the project\'s progress, etc.'
      },
      {
        key: 'agreement',
        icon: <ThumbUpIcon />,
        text: 'And finally, when we reach an agreement, we start the project!',
      },
    ];

    const { classes } = this.props;

    return (
      <Fragment>
        <Typography component="h1" variant="h2">
          Work with me!
        </Typography>

        <Typography variant="body2">
          Here's what to expect when we work together.
        </Typography>

        <List dense>
          {LIST.map(item => (
            <ListItem key={item.key}>
              <ListItemIcon classes={{ root: classes.icon }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.text} classes={{ root: classes.text }} />
            </ListItem>
          ))}
        </List>

        <Typography variant="body2">
          Here's the form:
        </Typography>

        <ContactForm />
      </Fragment>
    );
  }
}

export default withStyles(styles)(WorkWithMe);
