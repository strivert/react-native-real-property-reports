import {createAction, handleActions} from 'redux-actions';
import update from 'react-addons-update';

// action type
const SAVE_REPORTSEED = 'reportSeed/SAVE_REPORTSEED';

// action creators
export const saveReportSeed = createAction(SAVE_REPORTSEED); // 

// initial states
const initialState = {
};

// reducers
export default handleActions({
  [SAVE_REPORTSEED]: (state, action) => {
  	const {sectionObj} = action.payload;
    return sectionObj;
  }
}, initialState);
