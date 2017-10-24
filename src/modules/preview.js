import {createAction, handleActions} from 'redux-actions';
import update from 'react-addons-update';

// action type
const CREATE = 'preview/CREATE';
const SELECT_BIG_CATEGORY = 'preview/SELECT_BIG_CATEGORY';


// action creators
export const create = createAction(CREATE); // 
export const selectBigCategory = createAction(SELECT_BIG_CATEGORY); // bigCategory

// initial states
const initialState={
  'selectedBigCategory': 'Roofing',
  'categories':['Roofing', 'Exterior', 'Structure', 'Interior', 'Electrical', 'Plumbing', 'Cooling', 'Heating']
}

// reducers
export default handleActions({
  [SELECT_BIG_CATEGORY]: (state, action) => {
  	const {bigCategory} = action.payload;
  	return update(state, {
      'selectedBigCategory': {$set: bigCategory}
    });
  }
}, initialState);
