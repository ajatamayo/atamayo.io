import {
  SUBMIT_INQUIRY_REQUEST,
  SUBMIT_INQUIRY_SUCCESS,
  SUBMIT_INQUIRY_FAILURE,
} from './actionTypes';

export function submitInquiryRequest(data) {
  return { type: SUBMIT_INQUIRY_REQUEST, data };
}

export function submitInquirySuccess() {
  return { type: SUBMIT_INQUIRY_SUCCESS };
}

export function submitInquiryFailure(message) {
  return { type: SUBMIT_INQUIRY_FAILURE, message };
}
