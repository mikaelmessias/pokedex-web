import { call, put, all } from 'redux-saga/effects';
import { axios as api } from '~/services/axios';
import {
  setLoading,
  setError,
  setAbilities
} from './actions';

export function* fetchAbilities(action) {
  yield put(setLoading(true));

  try {
    const names = action.payload;

    const responses = yield all(names.map((name) => (
      call(api.get, `/ability/${name}`))));

    const abilities = responses.map(({ data }) => {
      const effectEntries = data.effect_entries
        .filter((entry) => entry.language.name === 'en')
        .map(({ effect, short_effect }) => ({ effect, shortEffect: short_effect }));

      console.log(effectEntries);

      return {
        id: data.id,
        name: data.name,
        effectEntries: effectEntries
      };
    });

    yield put(setAbilities(abilities));
  } catch (err) {
    yield put(setError(true));
  } finally {
    yield put(setLoading(false));
  }
}
