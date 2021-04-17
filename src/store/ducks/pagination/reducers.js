import * as t from './types';

const INITIAL_STATE = {
  currentPage: 1,
  offset: 0,
  limit: 20,
};

export default function reducer(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
    case t.SET_CURRENT_PAGE:
      return { ...state, currentPage: payload };
    case t.SET_OFFSET:
      return { ...state, offset: payload };
    case t.SET_LIMIT:
      return { ...state, limit: payload };
    default:
      return state;
  }
}
