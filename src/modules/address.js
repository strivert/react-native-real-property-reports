import {createAction, handleActions} from 'redux-actions';
import update from 'react-addons-update';

// action type
const CREATE = 'address/CREATE';
const REMOVE = 'address/REMOVE';
const UPDATE_ADDRESS = 'address/UPDATE_ADDRESS';
const SET_ADDRESS_INDEX = 'address/SET_ADDRESS_INDEX';

// action creators
export const create = createAction(CREATE); // reportName
export const remove = createAction(REMOVE); // 
export const updateAddress = createAction(UPDATE_ADDRESS); // updateAddressObject
export const setAddressIndex = createAction(SET_ADDRESS_INDEX); // index

// seed state
const seed = {
  reportName: '',
  firstName: '',
  lastName: '',
  address1: '',
  address2: '',
  city: '',
  state: '',
  zip: '',
  date: '',
  realtor1: '',
  realtor2: '',
  ud1: '',	// inspection fee
  ud2: '',	// (212) 555-5555
  ud3: '',	// email
  ud4: '',	// weather
  ud5: ''		// direction
}

// initial states
const initialState = {
  selectedAddressIndex: 0,
  address: [
    {
      reportName: '123 Sample Street',
      firstName: 'Samual',
      lastName: 'Sam',
      address1: '123 Sample Street f drff',
      address2: 'qqq',
      city: 'Everytown',
      state: 'USA',
      zip: '55555',
      date: 'May 30, 2016',
      realtor1: 'fjwerwe',
      realtor2: 'kljslkjlkj',
      ud1: '$ 500 + Tax',  // inspection fee
      ud2: '(212) 555-5555',  // 
      ud3: 'iii@iii.com',  // email
      ud4: 'Sunny',  // weather
      ud5: 'North'   // direction
    },
    {
      reportName: 'WIND-876 Bloor st',
      firstName: 'Jeryy',
      lastName: 'Tom',
      address1: 'Wind stree',
      address2: 'vvv',
      city: 'si city',
      state: 'uuusa',
      zip: '8989',
      date: 'Jun 30, 2016',
      realtor1: 'xcvxcv',
      realtor2: 'e serf',
      ud1: '$ 900 + Tax',  // inspection fee
      ud2: '(212) 555-3232',  // 
      ud3: 'asdf@asdf.com',  // email
      ud4: 'Cloudy',  // weather
      ud5: 'West'   // direction
    },
    {
      reportName: 'Harry St',
      firstName: 'Harry',
      lastName: 'Westman',
      address1: 'Harry address',
      address2: 'vvv',
      city: 'harry city',
      state: 'us',
      zip: '332234',
      date: 'Jun 20, 2012',
      realtor1: 'vc',
      realtor2: 'e serf',
      ud1: '$ 700 + Tax',  // inspection fee
      ud2: '(212) 555-3232',  // 
      ud3: 'asdf@asdf.com',  // email
      ud4: 'Cloudy',  // weather
      ud5: 'West'   // direction
    }
  ]
};

// reducers
export default handleActions({
  [CREATE]: (state, action) => {
    let updateState = Object.assign({}, seed);
    updateState['reportName'] = action.payload; // reportName
    return update(state, {
      address: {
        [state.address.length]: {$set: updateState}
      }
    });
  },

  [REMOVE]: (state, action) => {
    return update(state, {
      address: {
        $splice: [[state.selectedAddressIndex, 1]]  // index
      },
      selectedAddressIndex: {$set: 0}
    });
  },

  [UPDATE_ADDRESS]: (state, action) => {
    let updateObject = Object.assign({}, action.payload);
    return update(state, {
      address: {
        [state.selectedAddressIndex]: {$set: updateObject}
      }
    });
  },

  [SET_ADDRESS_INDEX]: (state, action) => {
    return update(state, {
      selectedAddressIndex: {$set: action.payload}  // index
    });
  }
}, initialState);
