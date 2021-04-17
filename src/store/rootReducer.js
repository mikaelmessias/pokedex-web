import { combineReducers } from 'redux';
import pokemon from './ducks/pokemon';
import pagination from './ducks/pagination';

export default combineReducers({
  pokemon,
  pagination,
});
