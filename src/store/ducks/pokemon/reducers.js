import * as t from './types';

const INITIAL_STATE = {
  isLoading: false,
  isError: false,
  pokemon: null,
  pokemons: [],
  count: 0,
  pokemonId: 0,
};

export default function reducer(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
    case t.LOADING:
      return { ...state, isLoading: payload };
    case t.ERROR:
      return { ...state, isError: payload };
    case t.SET_POKEMON_LIST:
      return {
        ...state,
        pokemons: payload.pokemons,
        count: payload.count,
      };
    case t.SET_POKEMON:
      return { ...state, pokemon: payload };
    case t.FETCH_POKEMON:
      console.log(payload);
      return { ...state, pokemonId: payload };
    default:
      return state;
  }
}
