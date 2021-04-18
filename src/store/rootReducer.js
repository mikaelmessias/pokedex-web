import { combineReducers } from 'redux';
import abilities from './ducks/abilities';
import pagination from './ducks/pagination';
import pokemon from './ducks/pokemon';

export default combineReducers({
  pokemon,
  pagination,
  abilities
});
