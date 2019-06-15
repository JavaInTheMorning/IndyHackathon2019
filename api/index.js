import { combineReducers } from 'redux';
import trackApi from './tracks';
import serviceApi from './services';

export default combineReducers({
  trackApi,
  serviceApi,
});
