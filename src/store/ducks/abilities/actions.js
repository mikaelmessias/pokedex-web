import * as t from './types';

export const setLoading = (state) => ({
  type: t.LOADING,
  payload: state,
});

export const setError = (state) => ({
  type: t.ERROR,
  payload: state,
});

export const fetchAbilities = (state) => ({
  type: t.FETCH_ABILITIES,
  payload: state,
});

export const setAbilities = (state) => ({
  type: t.SET_HABILITIES,
  payload: state,
});
