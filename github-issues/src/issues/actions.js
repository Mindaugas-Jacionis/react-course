import { RSAA } from 'redux-api-middleware';
import * as types from './actionTypes';
import { API_DOMAIN } from '../constants';

export const sample = () => ({ type: types.SAMPLE });

export const fetchIssues = () => ({
  [RSAA]: {
    endpoint: `${API_DOMAIN}/repos/reduxjs/redux/issues`,
    method: 'GET',
    types: ['REQUEST', 'SUCCESS', 'FAILURE'],
  },
});

// https://api.github.com/repos/reduxjs/redux/issues
