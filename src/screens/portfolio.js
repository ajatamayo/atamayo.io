import React, { Fragment } from 'react';

import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';

import imgAqwire from '../images/projects/aqwire.jpg';
import imgElearning from '../images/projects/elearning.jpg'
import imgGeoportal from '../images/projects/geoportal.jpg';
import imgIlovebdj from '../images/projects/ilovebdj.jpg';
import imgNatalac from '../images/projects/natalac.jpg';
import imgPia from '../images/projects/pia.jpg';
import imgRevlon from '../images/projects/revlon.jpg';
import imgVuewin from '../images/projects/vuewin.jpg';

const styles = {
  linkLabel: {
    verticalAlign: 'top',
    marginRight: 3,
  },
  icon: {
    fontSize: 14,
    height: '22px',
  },
  firstParagraph: {
    marginTop: 0,
  },
};

const PROJECTS = [
  {
    title: 'AQWIRE',
    image: imgAqwire,
    description: [
      'AQWIRE is a marketplace designed to handle international property transactions from hotel bookings to residential and commercial real estate rental and purchases.',
      'Currently working as the senior developer on the project.',
      'Amazon AWS, Compass, SASS, Ant Design, Google Analytics, HTML, Node.js, ReactJS, Heroku, MongoDB, Photoshop, Figma',
    ],
    link: 'https://beta.aqwire.io',
  },
  {
    title: 'Natalac',
    image: imgNatalac,
    description: [
      'This project showcases information about Natalac, the country\'s very first malunggay capsule proven to increase breastmilk supply production.',
      'WordPress, PHP, MySQL, Linode, Nginx, Google Analytics, Google Tag Manager, Material Design',
    ],
    link: 'https://www.natalacbreastfeeding.com',
  },
  {
    title: 'Privacy Impact Assessment tool',
    image: imgPia,
    description: [
      'This application collects information on how sensitive information is stored, passed, and collected, and gives recommendations on how to address any issues based on the Data Privacy Act of 2012.',
      'Worked as the sole software developer with experts on the subject matter to gather information to build the application.',
      'Python, Django, Material Design, PostgreSQL, Nginx, Linode, Google Analytics, jQuery',
    ],
  },
  {
    title: 'Vuewin',
    image: imgVuewin,
    description: [
      'Vuewin is a mobile application that lets you view ads and get chances to win prizes such as cash (100k Php), cars, motorcycles, laptops, plane trips among others.',
      'Lead a team of 6 developers as the lead software developer. Primarily took care of the API server, but also contributed with mobile development on Android and iOS.',
      'Android (Java), iOS (Objective-C), Python, Django, Django Rest Framework, Celery, Foundation, Bower, MySQL, Amazon AWS (EC2, Elastic Beanstalk), RabbitMQ',
    ],
  },
  {
    title: 'Revlon',
    image: imgRevlon,
    description: [
      'An e-commerce shop for Revlon.',
      'WordPress, PHP, WooCommerce, PayPal, Dragonpay, MySQL, Linode, Nginx, SCSS, Compass',
    ],
  },
  {
    title: 'Manila Observatory',
    image: imgGeoportal,
    description: [
      'The Geomatics for Environment and Development Program of the Manila Observatory provides a Geoportal that gives the public free access to their maps in JPEG and PDF format.',
      'WordPress, PHP, MySQL, Linode, Nginx, Google Analytics, Google Tag Manager, SCSS, Compass',
    ],
    link: 'http://mapsanddata.observatory.ph',
  },
  {
    title: 'ilovebdj.com',
    image: imgIlovebdj,
    description: [
      'ilovebdj.com is an avenue for women to share their stories and inspire other women in a positive and accepting commmunity. This site also features an e-commerce shop.',
      'WordPress, PHP, WooCommerce, PayPal, Dragonpay, MySQL, Linode, Nginx, SCSS, Compass',
    ],
    link: 'https://ilovebdj.com',
  },
  {
    title: 'NHCP\'s e-learning website',
    image: imgElearning,
    description: [
      'The National Historical Commission of the Philippines\' e-learning website showcases interactive stories, coloring activities, and quizzes that highlights stories about Rizal, Mabini, Bonifacio and other important historical events.',
      'Worked with a number of artists to make cute animations and colorful visuals.',
      'Python, Django, PostgreSQL, jQuery, Nginx, Linode',
    ],
  },
];

function Portfolio(props) {
  const { classes } = props;

  return (
    <Fragment>
      <Typography component="h1" variant="h2">
        Some of my work
      </Typography>

      {PROJECTS.map(project => (
        <Fragment key={project.title}>
          <Typography component="h2" variant="h6" gutterBottom>
            {project.title}
          </Typography>

          <div style={{ padding: '12px 0' }}>
            <Grid container spacing={24}>
              <Grid item xs={12} md={6}>
                <Card className={classes.card}>
                  <CardMedia component="img" alt={project.title} image={project.image} title={project.title} />
                </Card>
              </Grid>
              <Grid item xs={12} md={6}>
                {project.description.map((text, index) => (
                  <Typography key={`${project.title}${index}`} variant="body2" className={classes.firstParagraph}>
                    {text}
                  </Typography>
                ))}
                {project.link && (
                  <Typography variant="body2">
                    <a href={project.link} target="_blank" rel="noopener noreferrer"><span className={classes.linkLabel}>visit website</span><OpenInNewIcon className={classes.icon} /></a>
                  </Typography>
                )}
              </Grid>
            </Grid>
          </div>
        </Fragment>
      ))}
    </Fragment>
  );
}

export default withStyles(styles)(Portfolio);
