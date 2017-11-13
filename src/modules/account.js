import {createAction, handleActions} from 'redux-actions';
import update from 'react-addons-update';

// action type
const CREATE = 'account/CREATE';
const UPDATE_ACCOUNT = 'account/UPDATE_ACCOUNT';

const DEL_IMAGE = 'account/DEL_IMAGE';
const SAVE_IMAGE = 'account/SAVE_IMAGE';
const ADD_IMAGE = 'account/ADD_IMAGE';


// action creators
export const create = createAction(CREATE); // reportName
export const updateAccount = createAction(UPDATE_ACCOUNT); // updateAddressObject
export const delImage = createAction(DEL_IMAGE); // 
export const saveImage = createAction(SAVE_IMAGE); // imageIndex, res
export const addImage = createAction(ADD_IMAGE); // res

// seed state
const seed = {
  userEmail: '',
  firstName: '',
  lastName: '',
  workPhone: '',
  homePhone: '',
  cellPhone: '',
  companyName: '',
  employeeName: '',
  Address: '',
  city: '',
  stateProvince: '',
  zipCode: '',
  licenseType: '',
  licenseNumber: '',
  standardOfInspection: '',
  legal: '',
  isnUserName: '',
  isnPasswd: '',
  isnCompanyKey: '',
  isFlorida: false
}

// initial states
const initialState = {
  account: [
    {
      userEmail: '',
      firstName: '',
      lastName: '',
      workPhone: '',
      homePhone: '',
      cellPhone: '',
      companyName: '',
      employeeName: '',
      Address: '',
      city: '',
      stateProvince: '',
      zipCode: '',
      licenseType: '',
      licenseNumber: '',
      standardOfInspection: '',
      legal: '',
      isnUserName: '',
      isnPasswd: '',
      isnCompanyKey: '',
      isFlorida: false,
      isnUserName: '',
      isnPasswd: '',
      isnCompanyKey: '',
      images: []
    }
  ]
};

// reducers
export default handleActions({
  [CREATE]: (state, action) => {
    const {title} = action.payload;
    let newSeed = Object.assign({}, seed);
    newSeed.reportName = title;   

    return update(state, {
      account: { $push: [newSeed]}
    });
  },

  [UPDATE_ACCOUNT]: (state, action) => {
    let updateObject = Object.assign({}, action.payload);
    return update(state, {
      account: {
        [0]: {$set: updateObject}
      }
    });
  },

  [DEL_IMAGE]: (state, action) => {
    const {imageIndex} = action.payload;
    
    // return updateState;
    return update(state, {
      account: {
        [0]: {
          images: {
            $splice: [[imageIndex, 1]]
          }
        }
      }
    });
  },
  [SAVE_IMAGE]: (state, action) => {
    const {imageIndex, res} = action.payload;
    
    return update(state, {
      account: {
        [0]: {
          images: {
            // [imageIndex]: {
            [0]: {
              drawImage: {$set: res}
            }
          }
        }
      }
    });
  },
  [ADD_IMAGE]: (state, action) => {
    const {res} = action.payload;
    /*
    return update(state, {
      address: {
        [selectedAddressIndex]: {
          images: {
            $push: [{
              'backImage': res,
              'drawImage': ''
            }]            
          }
        }
      }
    });
    */
    if(state.account[0]['images'][0]){
      return update(state, {
        account: {
          [0]: {
            images: {
              [0]: {
                'backImage': {$set: res},
                'drawImage': {$set: ''},
              }
            }
          }
        }
      });
    } else {
      return update(state, {
        account: {
          [0]: {
            images: {
              $push: [{
                'backImage': res,
                'drawImage': ''
              }]            
            }
          }
        }
      });
    }
      
  }
}, initialState);
