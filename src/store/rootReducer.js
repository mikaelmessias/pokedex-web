import { combineReducers } from 'redux';
import pagination from './ducks/pagination';
import pokemon from './ducks/pokemon';

export default combineReducers({
  pokemon,
  pagination,
});
