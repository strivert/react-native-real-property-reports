import { combineReducers } from 'redux';

import address from './address';
import report from './report';

export default combineReducers({
  address,
  report
});
