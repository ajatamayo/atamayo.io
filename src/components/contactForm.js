import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { classNames } from 'react-extras';
import { withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';

const LABEL_LINE_HEIGHT = 18;

const styles = {
  container: {
    marginTop: 12,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  formControl: {
    margin: '0 0 12px',
  },
  fullWidth: {
    width: '100%',
    maxWidth: 500,
  },
  multilineInput: {
    minHeight: 63,
  },
  label: {
    paddingRight: 28,
  },
  labelTwoLines: {
    paddingTop: LABEL_LINE_HEIGHT,
  },
  labelThreeLines: {
    paddingTop: LABEL_LINE_HEIGHT * 2,
  },
  labelFourLines: {
    paddingTop: LABEL_LINE_HEIGHT * 3,
  },
  labelFiveLines: {
    paddingTop: LABEL_LINE_HEIGHT * 4,
  },
  input: {
    minWidth: 250,
  },
};

class ContactForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      goal: '',
      existing: '',
      timeline: '',
    };
  }

  componentDidMount() {
    this.forceUpdate();
  }

  handleNameChange = event => {
    this.setState({ name: event.target.value });
  }

  handleEmailChange = event => {
    this.setState({ email: event.target.value });
  }

  handleGoalChange = event => {
    this.setState({ goal: event.target.value });
  }

  handleExistingChange = event => {
    this.setState({ existing: event.target.value });
  }

  handleTimelineChange = event => {
    this.setState({ timeline: event.target.value });
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.container}>
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel
            ref={ref => {
              this.nameLabelRef = ReactDOM.findDOMNode(ref);
            }}
            htmlFor="form-name"
            classes={{ root: classes.label }}
          >
            Your name
          </InputLabel>
          <OutlinedInput
            id="form-name"
            value={this.state.name}
            onChange={this.handleNameChange}
            labelWidth={this.nameLabelRef ? this.nameLabelRef.offsetWidth : 0}
            classes={{ root: classes.input }}
          />
        </FormControl>

        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel
            ref={ref => {
              this.emailLabelRef = ReactDOM.findDOMNode(ref);
            }}
            htmlFor="form-email"
            classes={{ root: classes.label }}
          >
            Your email
          </InputLabel>
          <OutlinedInput
            id="form-email"
            value={this.state.email}
            onChange={this.handleEmailChange}
            labelWidth={this.emailLabelRef ? this.nameLabelRef.offsetWidth : 0}
            classes={{ root: classes.input }}
          />
        </FormControl>

        <FormControl variant="outlined" className={classNames(classes.formControl, classes.fullWidth)}>
          <InputLabel
            ref={ref => {
              this.goalLabelRef = ReactDOM.findDOMNode(ref);
            }}
            htmlFor="form-goal"
            classes={{ root: classes.label }}
          >
            What do you want your website or app to accomplish?
          </InputLabel>
          <OutlinedInput
            id="form-goal"
            value={this.state.goal}
            onChange={this.handleGoalChange}
            labelWidth={this.goalLabelRef ? this.goalLabelRef.offsetWidth : 0}
            aria-describedby="goal-helper-text"
            multiline
            classes={{
              inputMultiline: classNames(
                classes.multilineInput,
                { [classes.labelTwoLines]: this.goalLabelRef ? this.goalLabelRef.offsetHeight / LABEL_LINE_HEIGHT === 2 : false },
                { [classes.labelThreeLines]: this.goalLabelRef ? this.goalLabelRef.offsetHeight / LABEL_LINE_HEIGHT === 3 : false },
                { [classes.labelFourLines]: this.goalLabelRef ? this.goalLabelRef.offsetHeight / LABEL_LINE_HEIGHT === 4 : false },
                { [classes.labelFiveLines]: this.goalLabelRef ? this.goalLabelRef.offsetHeight / LABEL_LINE_HEIGHT === 5 : false },
              ),
              root: classes.input,
            }}
          />
          <FormHelperText id="goal-helper-text">Help me understand your goals for this project.</FormHelperText>
        </FormControl>

        <FormControl variant="outlined" className={classNames(classes.formControl, classes.fullWidth)}>
          <InputLabel
            ref={ref => {
              this.existingLabelRef = ReactDOM.findDOMNode(ref);
            }}
            htmlFor="form-existing"
            classes={{ root: classes.label }}
          >
            Do you currently have a website or app? If so, what isn't working for you? What do you love about it?
          </InputLabel>
          <OutlinedInput
            id="form-existing"
            value={this.state.existing}
            onChange={this.handleExistingChange}
            labelWidth={this.existingLabelRef ? this.existingLabelRef.offsetWidth : 0}
            aria-describedby="existing-helper-text"
            multiline
            classes={{
              inputMultiline: classNames(
                classes.multilineInput,
                { [classes.labelTwoLines]: this.existingLabelRef ? this.existingLabelRef.offsetHeight / LABEL_LINE_HEIGHT === 2 : false },
                { [classes.labelThreeLines]: this.existingLabelRef ? this.existingLabelRef.offsetHeight / LABEL_LINE_HEIGHT === 3 : false },
                { [classes.labelFourLines]: this.existingLabelRef ? this.existingLabelRef.offsetHeight / LABEL_LINE_HEIGHT === 4 : false },
                { [classes.labelFiveLines]: this.existingLabelRef ? this.existingLabelRef.offsetHeight / LABEL_LINE_HEIGHT === 5 : false },
              ),
              root: classes.input,
            }}
          />
          <FormHelperText id="existing-helper-text">If you don't have one, what 3 websites or apps do you love?</FormHelperText>
        </FormControl>

        <FormControl variant="outlined" className={classNames(classes.formControl, classes.fullWidth)}>
          <InputLabel
            ref={ref => {
              this.timelineLabelRef = ReactDOM.findDOMNode(ref);
            }}
            htmlFor="form-timeline"
            classes={{ root: classes.label }}
          >
            What's your timeline?
          </InputLabel>
          <OutlinedInput
            id="form-timeline"
            value={this.state.timeline}
            onChange={this.handleTimelineChange}
            labelWidth={this.timelineLabelRef ? this.timelineLabelRef.offsetWidth : 0}
            multiline
            classes={{
              inputMultiline: classes.multilineInput,
              root: classes.input,
            }}
          />
        </FormControl>
      </div>
    );
  }
}

ContactForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ContactForm);
