import { call, put, select } from 'redux-saga/effects';

import axios from 'axios';

import {
  setLoading,
  setError,
  setPokemonList,
  setPokemon,
} from './actions';

export function* fetchPokemons() {
  yield put(setLoading(true));

  try {
    const { data } = yield call(axios.get, 'https://pokeapi.co/api/v2/pokemon');

    yield put(setPokemonList(data));
  } catch (err) {
    yield put(setError(true));
  } finally {
    yield put(setLoading(false));
  }
}

export function* fetchPokemonsNextPage() {
  yield put(setLoading(true));

  try {
    const { next } = yield select((state) => state.pokemon);
    const { data } = yield call(axios.get, next);

    yield put(setPokemonList(data));
  } catch (err) {
    yield put(setError(true));
  } finally {
    yield put(setLoading(false));
  }
}

export function* fetchPokemonsPrevPage() {
  yield put(setLoading(true));

  try {
    const { previous } = yield select((state) => state.pokemon);
    const { data } = yield call(axios.get, previous);

    yield put(setPokemonList(data));
  } catch (err) {
    yield put(setError(true));
  } finally {
    yield put(setLoading(false));
  }
}

export function* fetchPokemon(action) {
  yield put(setLoading(true));

  try {
    const { pokemonId } = action.payload;
    const { data } = yield call(axios.get, `https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
    yield put(setPokemon(data));
  } catch (err) {
    yield put(setError(true));
  } finally {
    yield put(setLoading(false));
  }
}
