import { CHANGE_SCREEN } from '../actions/actionTypes';

const initialState = {
  activeScreen: null,
};

function appReducer(state = initialState, action) {
  switch (action.type) {

  case CHANGE_SCREEN:
    return {
      ...state,
      activeScreen: action.screen,
    };

  default:
    return state;
  }
}

export default appReducer;
