import { takeLatest, all } from 'redux-saga/effects';
import * as PokemonSagas from './ducks/pokemon/sagas';
import * as PokemonTypes from './ducks/pokemon/types';

export default function* rootSaga() {
  return yield all([
    takeLatest(
      PokemonTypes.FETCH_POKEMON_LIST,
      PokemonSagas.fetchPokemons,
    ),
  ]);
}
