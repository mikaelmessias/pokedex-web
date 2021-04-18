import * as t from './types';

export const setLoading = (state) => ({
  type: t.LOADING,
  payload: state,
});

export const setError = (state) => ({
  type: t.ERROR,
  payload: state,
});

export const setPokemonList = (state) => ({
  type: t.SET_POKEMON_LIST,
  payload: state,
});

export const setPokemon = (state) => ({
  type: t.SET_POKEMON,
  payload: state,
});

export const fetchPokemonList = () => ({
  type: t.FETCH_POKEMON_LIST,
});

export const fetchPokemon = (state) => ({
  type: t.FETCH_POKEMON,
  payload: state,
});
