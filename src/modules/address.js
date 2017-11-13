import {createAction, handleActions} from 'redux-actions';
import update from 'react-addons-update';

// action type
const CREATE = 'address/CREATE';
const REMOVE = 'address/REMOVE';
const UPDATE_ADDRESS = 'address/UPDATE_ADDRESS';
const SET_ADDRESS_INDEX = 'address/SET_ADDRESS_INDEX';

const DEL_IMAGE = 'address/DEL_IMAGE';
const SAVE_IMAGE = 'address/SAVE_IMAGE';
const ADD_IMAGE = 'address/ADD_IMAGE';

const DEL_SIGNATURE = 'address/DEL_SIGNATURE';
const SAVE_SIGNATURE = 'address/SAVE_SIGNATURE';

const SAVE_NEW = 'address/SAVE_NEW';

const DEL_REPORT_EMAIL = 'address/DEL_REPORT_EMAIL';
const ADD_REPORT_EMAIL = 'address/ADD_REPORT_EMAIL';

// action creators
export const create = createAction(CREATE); // reportName
export const remove = createAction(REMOVE); // 
export const updateAddress = createAction(UPDATE_ADDRESS); // updateAddressObject
export const setAddressIndex = createAction(SET_ADDRESS_INDEX); // index
export const delImage = createAction(DEL_IMAGE); // 
export const saveImage = createAction(SAVE_IMAGE); // imageIndex, res
export const addImage = createAction(ADD_IMAGE); // res
export const delSignature = createAction(DEL_SIGNATURE); // 
export const saveSignature = createAction(SAVE_SIGNATURE); // 
export const saveNew = createAction(SAVE_NEW); // 
export const delReportEmail = createAction(DEL_REPORT_EMAIL); // 
export const addReportEmail = createAction(ADD_REPORT_EMAIL); // 

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
  ud5: '',	// direction
  images: [],
  reportEmails: [],
  inspectorSignature: '',
  clientSignature: ''
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
      ud5: 'North',  // direction,
      images: [],
      reportEmails: [],
      inspectorSignature: '',
      clientSignature: ''
    }/*,
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
      ud5: 'West',  // direction,
      images: [        
      ],
      inspectorSignature: '',
      clientSignature: ''
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
      ud5: 'South',  // direction,
      images: [
      ],
      inspectorSignature: '',
      clientSignature: ''
    }*/
  ]
};

// reducers
export default handleActions({
  [CREATE]: (state, action) => {
    const {title} = action.payload;
    let newSeed = Object.assign({}, seed);
    newSeed.reportName = title;   
    newSeed.address1 = title;

    return update(state, {
      address: { $push: [newSeed]}
    });
  },

  [REMOVE]: (state, action) => {
    if ((state.address.length-1) == state.selectedAddressIndex) {
      return update(state, {
        address: {
          $splice: [[state.selectedAddressIndex, 1]]  // index
        },
        selectedAddressIndex: {$set: 0}
      });  
    } else {
      return update(state, {
        address: {
          $splice: [[state.selectedAddressIndex, 1]]  // index
        }
      });
    }
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
  },
  [DEL_REPORT_EMAIL]: (state, action) => {
    const {index} = action.payload;
    const {selectedAddressIndex} = state;
    
    // return updateState;
    return update(state, {
      address: {
        [selectedAddressIndex]: {
          reportEmails: {
            $splice: [[index, 1]]
          }
        }
      }
    });
  },
  [ADD_REPORT_EMAIL]: (state, action) => {
    const {email} = action.payload;
    const {selectedAddressIndex} = state;

    return update(state, {
      address: {
        [selectedAddressIndex]: {
          reportEmails: {
            $push: [email]            
          }
        }
      }
    });
  },
  [DEL_IMAGE]: (state, action) => {
    const {imageIndex} = action.payload;
    const {selectedAddressIndex} = state;
    
    // return updateState;
    return update(state, {
      address: {
        [selectedAddressIndex]: {
          images: {
            $splice: [[imageIndex, 1]]
          }
        }
      }
    });
  },
  [SAVE_IMAGE]: (state, action) => {
    const {imageIndex, res} = action.payload;
    const {selectedAddressIndex} = state;
    
    return update(state, {
      address: {
        [selectedAddressIndex]: {
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
    const {selectedAddressIndex} = state;
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
    if(state.address[selectedAddressIndex]['images'][0]){
      return update(state, {
        address: {
          [selectedAddressIndex]: {
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
    }
      
  },
  [SAVE_SIGNATURE]: (state, action) => {
    const {type, res} = action.payload;
    const {selectedAddressIndex} = state;

    if (type == 'inspector') {
      return update(state, {
        address: {
          [selectedAddressIndex]: {
            inspectorSignature: {$set: res}
          }
        }
      });
    } else {
      return update(state, {
        address: {
          [selectedAddressIndex]: {
            clientSignature: {$set: res}
          }
        }
      });
    }

    
  },
  [DEL_SIGNATURE]: (state, action) => {
    const {type} = action.payload;
    const {selectedAddressIndex} = state;
    if (type == 'inspector') {
      return update(state, {
        address: {
          [selectedAddressIndex]: {
            inspectorSignature: {$set: ''}
          }
        }
      });
    } else {
      return update(state, {
        address: {
          [selectedAddressIndex]: {
            clientSignature: {$set: ''}
          }
        }
      });
    }
  }
}, initialState);
