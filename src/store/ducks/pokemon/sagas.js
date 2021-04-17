import { call, put, all, select } from 'redux-saga/effects';

import { axios as api } from '@Services/axios';

import {
  setLoading,
  setError,
  setPokemonList,
} from './actions';

export function* fetchPokemonDetails(list) {
  const responses = yield all(list.map(({ name }) => (
    call(api.get, `/pokemon/${name}`)))
  );

  const pokemons = responses.map(({ data }, index) => {
    const { id, types, sprites } = data;

    let backgroundColor = types[0].type.name;

    if (backgroundColor === 'normal' && types.length > 1) {
      backgroundColor = types[1].type.name;
    }

    return {
      id,
      name: list[index].name,
      backgroundColor: backgroundColor,
      cardImage: sprites.other['official-artwork'].front_default,
      backImage: sprites.back_default,
      frontImage: sprites.front_default,
      weight: data.weight,
      height: data.height,
      type: types.map(({ type: { name } }) => name),
    };
  });

  return pokemons;
}

export function* fetchPokemons() {
  yield put(setLoading(true));

  try {
    const { offset, limit } = yield select((state) => state.pagination);
    const query = `/pokemon/?limit=${limit}&offset=${offset}`;

    const { data: list } = yield call(api.get, query);
    const { count, results } = list;

    const pokemons = yield fetchPokemonDetails(results);

    yield put(setPokemonList({ count, pokemons }));
  } catch (err) {
    yield put(setError(true));
  } finally {
    yield put(setLoading(false));
  }
}
