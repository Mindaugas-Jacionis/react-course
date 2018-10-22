import * as types from './actionTypes';

const INITIAL_STATE = {
  sample: 0,
  data: [],
  fetching: false,
  error: null,
};

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case types.SAMPLE:
      return { ...state, sample: state.sample + 1 };

    case 'REQUEST':
      return { ...state, fetching: true };
    case 'SUCCESS':
      return { ...state, fetching: false, data: payload };
    case 'FAILURE':
      return { ...state, fetching: false, error: payload };
    default:
      return state;
  }
};
