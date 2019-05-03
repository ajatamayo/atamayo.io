import { all, call, put, takeLatest } from 'redux-saga/effects';
import { SUBMIT_INQUIRY_REQUEST } from '../actions/actionTypes';

import {
  submitInquirySuccess,
  submitInquiryFailure,
} from '../actions/contactActions';

import { submitInquiryService } from '../services/contact';

export function* submitInquiryRequestFlow(action) {
  try {
    const response = yield call(submitInquiryService, action.data);
    if (!response.data.success) {
      const { message } = response.data;
      yield put(submitInquiryFailure(message));
    }
    yield put(submitInquirySuccess());
  } catch (error) {
    yield put(submitInquiryFailure(error));
  }
}

export function* watchContactFlow() {
  yield all([
    takeLatest(SUBMIT_INQUIRY_REQUEST, submitInquiryRequestFlow),
  ]);
}

const contactSagas = [watchContactFlow()];

export default contactSagas;
