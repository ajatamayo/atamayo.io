import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import store, { history } from './store';
import './index.css';
import App from './App';
import { ScrollToTop } from './components';
import * as serviceWorker from './serviceWorker';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const THEME = createMuiTheme({
  typography: {
    fontFamily: '"Mukta Mahee", Helvetica, Arial, sans-serif',
    fontSize: 16,
    fontWeightRegular: 400,
    fontWeightMedium: 700,
    useNextVariants: true,

    h2: {
      paddingTop: 71,
      marginBottom: '0.35em',
    },
    h6: {
      marginTop: 20,
    },
    body2: {
      marginTop: '1.5em',
      marginBottom: '0.5em',
    },
  },
  breakpoints: {
    values: {
      md: 768,
      lg: 960,
    },
  },
});

ReactDOM.render(
  <MuiThemeProvider theme={THEME}>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <ScrollToTop>
          <App />
        </ScrollToTop>
      </ConnectedRouter>
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
