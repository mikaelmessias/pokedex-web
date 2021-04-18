import * as t from './types';

const INITIAL_STATE = {
  isLoading: false,
  isError: false,
  abilities: [],
  abilitiyNames: [],
};

export default function reducer(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
    case t.LOADING:
      return { ...state, isLoading: payload };
    case t.ERROR:
      return { ...state, isError: payload };
    case t.FETCH_ABILITIES:
      return { ...state, abilitiyNames: payload };
    case t.SET_HABILITIES:
      return { ...state, abilities: payload };
    default:
      return state;
  }
}
