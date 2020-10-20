import { SHOW_ALERT, HIDE_ALERT } from './types';

const initialSate = {
  alert: null,
};
export const appReducer = (state = initialSate, action) => {
  switch (action.type) {
    case SHOW_ALERT:
      return { ...state, alert: action.payload };
    case HIDE_ALERT:
      return { ...state, alert: null };
    default:
      return state;
  }
};
