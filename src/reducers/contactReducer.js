import {
  SUBMIT_INQUIRY_REQUEST,
  SUBMIT_INQUIRY_SUCCESS,
  SUBMIT_INQUIRY_FAILURE,
} from '../actions/actionTypes';

const initialState = {
  isSending: null,
  failed: false,
  sent: false,
  message: '',
};

function contactReducer(state = initialState, action) {
  switch (action.type) {

  case SUBMIT_INQUIRY_REQUEST:
    return {
      ...state,
      isSending: true,
      failed: false,
    };

  case SUBMIT_INQUIRY_SUCCESS:
    return {
      ...state,
      isSending: false,
      sent: true,
    };

  case SUBMIT_INQUIRY_FAILURE:
    return {
      ...state,
      isSending: false,
      failed: true,
      message: action.message,
    };

  default:
    return state;
  }
}

export default contactReducer;
