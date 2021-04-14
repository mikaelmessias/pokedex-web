import * as t from './types';

const INITIAL_STATE = {
  isLoading: false,
  pokemons: [],
  count: 0,
  next: '',
  previous: '',
  pokemonId: 0,
  pokemon: null,
};

export default function reducer(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
    case t.LOADING:
      return { ...state, isLoading: payload };
    case t.ERROR:
      return { ...state, error: payload };
    case t.SET_POKEMON_LIST:
      return {
        ...state,
        pokemons: payload.results,
        count: payload.count,
        previous: payload.previous,
        next: payload.next,
      };
    case t.SET_POKEMON_ID:
      return { ...state, pokemonId: payload };
    case t.SET_POKEMON:
      return { ...state, pokemon: payload };
    default:
      return state;
  }
}
