import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { classNames } from 'react-extras';
import { connect } from 'react-redux';
import obstruction from 'obstruction';

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Typography from '@material-ui/core/Typography';

import SendIcon from '@material-ui/icons/Send';

import { submitInquiryRequest } from '../actions/contactActions';

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
  input: {
    minWidth: 250,
  },
  sendButton: {
    width: 140,
  },
  sendIcon: {
    marginLeft: 8,
    transition: 'fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, transform 400ms cubic-bezier(0.6, -0.28, 0.74, 0.05), opacity 200ms ease 400ms',
  },
  sendIconSending: {
    transform: 'translateX(60px)',
    opacity: 0,
  },
  sendIconFailed: {
    opacity: 1,
    transition: 'fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, opacity 200ms ease',
  },
  errorMessage: {
    margin: 0,

    '&::before': {
      content: '"* "',
    },
  },
};

class ContactForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      message: '',
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

  handleMessageChange = event => {
    this.setState({ message: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();
    if (this.props.sent) return;
    this.props.submitInquiryRequest(this.state);
  }

  render() {
    const { classes } = this.props;

    return (
      <form className={classes.container} autoComplete="off" method="POST" onSubmit={this.handleSubmit}>
        <FormControl variant="outlined" required className={classes.formControl}>
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
            disabled={this.props.isSending}
          />
        </FormControl>

        <FormControl variant="outlined" required className={classes.formControl}>
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
            disabled={this.props.isSending}
            type="email"
          />
        </FormControl>

        <FormControl variant="outlined" required className={classNames(classes.formControl, classes.fullWidth)}>
          <InputLabel
            ref={ref => {
              this.messageLabelRef = ReactDOM.findDOMNode(ref);
            }}
            htmlFor="form-message"
            classes={{ root: classes.label }}
          >
            Your message
          </InputLabel>
          <OutlinedInput
            id="form-message"
            value={this.state.message}
            onChange={this.handleMessageChange}
            labelWidth={this.messageLabelRef ? this.messageLabelRef.offsetWidth : 0}
            aria-describedby="message-helper-text"
            multiline
            classes={{
              inputMultiline: classes.multilineInput,
              root: classes.input,
            }}
            disabled={this.props.isSending}
          />
          <FormHelperText id="message-helper-text">
            Help me understand your goals for this project. Some guide questions for you:<br />
            <br />
            • What do you want your website/app to accomplish?<br />
            • Do currently have a website/app? What do you love/hate about it?<br />
            <br />
            Or maybe, just say hi! :)
          </FormHelperText>
        </FormControl>

        {this.props.failed && (
          <Typography variant="body2" color="error" className={classes.errorMessage}>
            {this.props.message}
          </Typography>
        )}

        <Button
          variant="contained"
          color="primary"
          className={classes.sendButton}
          type="submit">
          {this.props.sent ? 'Sent!' : 'Send'}
          {!this.props.sent && (
            <SendIcon
              className={classNames(
                classes.sendIcon,
                { [classes.sendIconSending]: this.props.isSending },
                { [classes.sendIconFailed]: this.props.failed },
              )}
            />
          )}
        </Button>
      </form>
    );
  }
}

ContactForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = obstruction({
  isSending: 'contact.isSending',
  failed: 'contact.failed',
  sent: 'contact.sent',
  message: 'contact.message',
});

const mapDispatchToProps = {
  submitInquiryRequest,
};

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(ContactForm));
