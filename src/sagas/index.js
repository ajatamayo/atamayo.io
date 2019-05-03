import { all } from 'redux-saga/effects';

import contactSagas from './contactSagas';

export default function* rootSaga() {
  yield all([...contactSagas]);
}
