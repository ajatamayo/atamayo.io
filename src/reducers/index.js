import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import app from './appReducer';
import contact from './contactReducer';

export default (history) => combineReducers({
  router: connectRouter(history),
  app,
  contact,
});
