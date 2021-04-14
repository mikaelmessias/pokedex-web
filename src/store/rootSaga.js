import { takeLatest, all } from 'redux-saga/effects';

import * as PokemonSagas from './ducks/pokemon/sagas';
import * as PokemonTypes from './ducks/pokemon/types';

export default function* rootSaga() {
  return yield all([
    takeLatest(
      PokemonTypes.FETCH_POKEMON_LIST,
      PokemonSagas.fetchPokemons,
    ),
    takeLatest(
      PokemonTypes.FETCH_NEXT_PAGE,
      PokemonSagas.fetchPokemonsNextPage,
    ),
    takeLatest(
      PokemonTypes.FETCH_PREV_PAGE,
      PokemonSagas.fetchPokemonsPrevPage,
    ),
    takeLatest(
      PokemonTypes.FETCH_ONE_POKEMON,
      PokemonSagas.fetchPokemon,
    ),
  ]);
}
