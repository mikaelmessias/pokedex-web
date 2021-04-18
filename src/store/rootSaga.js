import { takeLatest, all } from 'redux-saga/effects';
import * as AbilitiesSagas from './ducks/abilities/sagas';
import * as AbilitiesTypes from './ducks/abilities/types';
import * as PokemonSagas from './ducks/pokemon/sagas';
import * as PokemonTypes from './ducks/pokemon/types';

export default function* rootSaga() {
  return yield all([
    takeLatest(
      PokemonTypes.FETCH_POKEMON_LIST,
      PokemonSagas.fetchPokemons,
    ),
    takeLatest(
      PokemonTypes.FETCH_POKEMON,
      PokemonSagas.fetchPokemon,
    ),
    takeLatest(
      AbilitiesTypes.FETCH_ABILITIES,
      AbilitiesSagas.fetchAbilities,
    ),
  ]);
}
