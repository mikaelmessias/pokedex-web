import * as t from './types';

export const setCurrentPage = (state) => ({
  type: t.SET_CURRENT_PAGE,
  payload: state,
});

export const setOffset = (state) => ({
  type: t.SET_OFFSET,
  payload: state,
});

export const setLimit = (state) => ({
  type: t.SET_LIMIT,
  payload: state,
});
