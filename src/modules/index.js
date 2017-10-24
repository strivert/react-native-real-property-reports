import { combineReducers } from 'redux';

import address from './address';
import report from './report';
import reportSeed from './reportSeed';
import preview from './preview';

export default combineReducers({
  address,
  report,
  reportSeed,
  preview
});
