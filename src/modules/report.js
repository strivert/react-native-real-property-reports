import {createAction, handleActions} from 'redux-actions';
import update from 'react-addons-update';

// action type
const CREATE_CATEGORY = 'report/CREATE_CATEGORY';
const REMOVE_CATEGORY = 'report/REMOVE_CATEGORY';
const HIGHLIGHT_SELECT_CATEGORY = 'report/HIGHLIGHT_SELECT_CATEGORY';

const CREATE_ITEM = 'report/CREATE_ITEM';
const UPDATE_ITEM = 'report/UPDATE_ITEM';
const SELECT_ITEM = 'report/SELECT_ITEM';
const DEL_ITEM = 'report/DEL_ITEM';	
const SELECT_DETAIL_ITEM = 'report/SELECT_DETAIL_ITEM';  

const CREATE_DETAIL_ITEM = 'report/CREATE_DETAIL_ITEM';
const UPDATE_DETAIL_ITEM = 'report/UPDATE_DETAIL_ITEM';
const DEL_DETAIL_ITEM = 'report/DEL_DETAIL_ITEM';
const HIGHLIGHT_SELECT_END_ITEM = 'report/HIGHLIGHT_SELECT_END_ITEM';

const SELECT_BIG_CATEGORY = 'report/SELECT_BIG_CATEGORY';

const UPDATE_LOCATION = 'report/UPDATE_LOCATION';
const UPDATE_FLOOR = 'report/UPDATE_FLOOR';
const UPDATE_LIFE = 'report/UPDATE_LIFE';
const UPDATE_COST = 'report/UPDATE_COST';

const SET_ALL_REPORT = 'report/SET_ALL_REPORT';

const DEL_IMAGE = 'report/DEL_IMAGE';
const SAVE_IMAGE = 'report/SAVE_IMAGE';
const ADD_IMAGE = 'report/ADD_IMAGE';

const SAVE_SECTION_NOTE = 'report/SAVE_SECTION_NOTE';
const DEL_SECTION_NOTE = 'report/DEL_SECTION_NOTE';

const SAVE_CATEGORY_NOTE = 'report/SAVE_CATEGORY_NOTE';
const DEL_CATEGORY_NOTE = 'report/DEL_CATEGORY_NOTE';

const SET_LIMITATION = 'report/SET_LIMITATION';
const SET_HIGHLIGHT = 'report/SET_HIGHLIGHT';

const CREATE_PARENT_REPORT = 'report/CREATE_PARENT_REPORT';

// action creators
export const createCategory = createAction(CREATE_CATEGORY); // listIndex, listSubIndex, label, copiedObject(child:Roofing->Roofing->[3])
export const removeCategory = createAction(REMOVE_CATEGORY); // listIndex, listSubIndex
export const selectItem = createAction(SELECT_ITEM);  // listIndex, listSubIndex, selectedArray
export const selectDetailItem = createAction(SELECT_DETAIL_ITEM);  // listIndex, listSubIndex, selectedGoDetailItemIndex, selectedArray
export const createItem = createAction(CREATE_ITEM);  // listIndex, listSubIndex, copiedObject(parent:Roofing->Roofing)
export const updateItem = createAction(UPDATE_ITEM);  //
export const delItem = createAction(DEL_ITEM);  //

export const createDetailItem = createAction(CREATE_DETAIL_ITEM);
export const updateDetailItem = createAction(UPDATE_DETAIL_ITEM);
export const delDetailItem = createAction(DEL_DETAIL_ITEM);

export const selectBigCategory = createAction(SELECT_BIG_CATEGORY); // bigCategory

export const updateLocation = createAction(UPDATE_LOCATION); // listIndex, listSubIndex, location
export const updateFloor = createAction(UPDATE_FLOOR); // listIndex, listSubIndex, floor
export const updateLife = createAction(UPDATE_LIFE); // listIndex, listSubIndex, life
export const updateCost = createAction(UPDATE_COST); // listIndex, listSubIndex, cost

export const setAllReport = createAction(SET_ALL_REPORT); // sectionObj, length

export const delImage = createAction(DEL_IMAGE); // listIndex, listSubIndex, imageIndex
export const saveImage = createAction(SAVE_IMAGE); // listIndex, listSubIndex, imageIndex, res
export const addImage = createAction(ADD_IMAGE); // listIndex, listSubIndex, res

export const saveSectionNote = createAction(SAVE_SECTION_NOTE); // selectedBigCategory, sectionNote
export const delSectionNote = createAction(DEL_SECTION_NOTE); // selectedBigCategory

export const saveCategoryNote = createAction(SAVE_CATEGORY_NOTE); // listIndex, listSubIndex, categoryNote
export const delCategoryNote = createAction(DEL_CATEGORY_NOTE); // listIndex, listSubIndex

export const setLimitation = createAction(SET_LIMITATION); // 
export const setHighlight = createAction(SET_HIGHLIGHT); // 
export const createParentReport = createAction(CREATE_PARENT_REPORT); // 

/*
let SQLite = require('react-native-sqlite-storage')


function openCB() {

}

function errorCB() {
}

function composeSectionName(sectionName) {
  let temp = sectionName.toLowerCase();
  return temp.charAt(0).toUpperCase() + temp.slice(1);
}

let sectionObj = {Roofing:{}, Exterior:{}, Structure:{}, Interior:{}, Electrical:{}, Plumbing:{}, Cooling:{}, Heating:{}};

let db = SQLite.openDatabase({name: 'test.db', createFromLocation: "~FortReport.db", location: 'Library'}, ()=>{
  console.log(sectionObj);
}, ()=>{

});
db.transaction((tx) => {
  tx.executeSql('SELECT * FROM FR_CATEGORY_NAMES', [], (tx, results) => {
      
      var len = results.rows.length;
      for (let i = 0; i < len; i++) {
        let row = results.rows.item(i);
        let sectionName = composeSectionName(row.CN_SECTION);
        
        if (!(sectionName in sectionObj)) {
          sectionObj[sectionName] = {};
        }

        if (!sectionObj[sectionName].hasOwnProperty(row.CN_GROUP)) {
          sectionObj[sectionName][row.CN_GROUP] = [];
        }

        let sItem = {
          name: row.CN_CATEGORY,
          state: "0",
          data: [],
          endData: [],
          location: '',
          floor: '',
          life: '',
          cost: ''
        }
        
        tx.executeSql('SELECT * FROM FR_ITEM_SELECTIONS where IS_SECTION="'+sectionName+'" and IS_CATEGORY="'+row.CN_CATEGORY+'"', [], (tx, resultss) => {
          let lenn = resultss.rows.length;
          for (let ii = 0; ii < len; ii++) {
            let roww = resultss.rows.item(ii);

            if (roww) {
              if ( roww.IS_ITEM === "Description" ) {
                sItem.data.push({
                  name: roww.IS_SELECTION,
                  selected: '0',
                  endDataSelected: [],
                  default: true
                });
              } else if (roww.IS_ITEM === "Observation") {
                sItem.endData.push({
                  name: roww.IS_SELECTION
                });
              }
            }
          }
          sectionObj[sectionName][row.CN_GROUP].push(sItem);  

          if( i==154){
            console.log(sectionObj);
          }
          
        });
        
      }
    });    
});
*/


const initialState={
  // 'selectedBigCategory': 'Roofing'
}

/*
const initialState={
  'selectedBigCategory': 'Roofing',
  'Roofing': {
    'Roofing': [
      {
        name: 'Sloped(roof)',
        state: "0",
        data:[
          {
            name: 'Asphalt shingles',
            selected: '0',
            endDataSelected: [],
            default: true
          },          
          {
            name: 'Wood shingles / shakes',
            selected: '0',
            endDataSelected: [],
            default: true
          },          
          {
            name: 'Concrete / Clay tiles',
            selected: '0',
            endDataSelected: [],
            default: true
          },          
          {
            name: 'Slate',
            selected: '0',
            endDataSelected: [],
            default: true
          },          
          {
            name: 'Plastic / Fiberglass',
            selected: '0',
            endDataSelected: [],
            default: true
          },          
          {
            name: 'Metal',
            selected: '0',
            endDataSelected: [],
            default: true
          },          
          {
            name: 'One layer noted',
            selected: '0',
            endDataSelected: [],
            default: true
          },          
          {
            name: 'Two plus layers noted',
            selected: '0',
            endDataSelected: [],
            default: true
          },          
          {
            name: 'Vendor advises of a recent upgrade',
            selected: '0',
            endDataSelected: [],
            default: true
          },          
          {
            name: 'Low slope',
            selected: '0',
            endDataSelected: [],
            default: true
          }
        ],
        endData: [
          {name: 'In good shape'},
          {name: 'In relatively good shape'},
          {name: 'Initial signs of wear beginning to show'},
          {name: 'Nearing the end of natural life expectancy'},
          {name: 'Fragile requiring near future replacement'},
          {name: 'Very old requiring immediate replacement'},
          {name: 'Shrinkage showing cracking/clawing or curling'},
          {name: 'Wind/Wildlife damage with some torn tabs'},
          {name: 'Leaking'},
          {name: 'Poor installation practices'},
          {name: 'Moss and organics accelerate deterioration'},
          {name: 'Suspect moisture penetrating the building envelope'},
          {name: 'Evaluate further and repair'},
          {name: 'Repairs required to avoid leaking'},
          {name: 'Keep trees & bushes trimmed away to prevent wind damage'},
          {name: 'Re-install using appropriate roofing system'},
          {name: 'Insurance companies may not consider insurability'}
        ],
        location: '',
        floor: '',
        life: '',
        cost: ''
      },

      {
        name: 'Flat(roof)',
        state: "0",
        data:[
          {
            name: 'Built-up inverted with tar & gravel',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Roll roofing rubberized membrane',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Single ply',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Vendor advises of a recent upgrade',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Flat roofing materials should be used on a Low slope',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Low slope: Shingle use inappropriate in this application',
            selected: '0',
            endDataSelected: [],
            default: true
          }
        ],
        endData: [
          {name: 'In good shape'},
          {name: 'In relatively good shape'},
          {name: 'Nearing the end of natural life expectancy'},
          {name: 'Fragile requiring near future replacement'},
          {name: 'Very old requiring immediate replacement'},
          {name: 'Shrinkage showing cracking/clawing or curling'},
          {name: 'Alligatoring and blistering indicate advanced wear'},
          {name: 'Gravel or ballast is wearing thin exposing membrane'},
          {name: 'Drainage is poor causing ponding and organics'},
          {name: 'Equipment pads or sleepers are pooryly installed'},
          {name: 'Low slopes should not use shingles'},
          {name: 'Suspect moisture penetrating the building envelope'},
          {name: 'Repairs required to avoid leaking'},
          {name: 'Install appropriate materials'},
          {name: 'Re-install using appropriate roofing system'},
          {name: 'Insurance companies may not consider insurability'},
          {name: 'Condominium corporations responsibility'},
          {name: 'Initial signs of wear beginning to show'}
        ],
        location: '',
        floor: '',
        life: '',
        cost: ''
      },
      {
        name: 'Dormer(roof)',
        state: "0",
        data:[
          {
            name: 'Asphalt',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Wood shingles / shakes',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Concrete / Clay tiles',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Slate',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Plastic / Fiberglass',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Metal',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Copper',
            selected: '0',
            endDataSelected: [],
            default: true
          }
        ],
        endData: [
          {name: 'In good shape'},
          {name: 'In relatively good shape'},
          {name: 'Initial signs of wear beginning to show'},
          {name: 'Fragile requiring near future replacement'},
          {name: 'Very old requiring immediate replacement'},
          {name: 'Shrinkage showing cracking/clawing or curling'},
          {name: 'Wind/Wildlife damage with some tabs torn'},
          {name: 'Poor installation practices'},
          {name: 'Suspect moisture penetrating the building envelope'},
          {name: 'Repairs required to avoid leaking'}
        ],
        location: '',
        floor: '',
        life: '',
        cost: ''
      },
      {
        name: 'Bay(roof)',
        state: "0",
        data:[
          {
            name: 'Asphalt',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Wood shingles / shakes',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Concrete / Clay tiles',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Slate',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Plastic / Fiberglass',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Metal',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Copper',
            selected: '0',
            endDataSelected: [],
            default: true
          }
        ],
        endData: [
          {name: 'In good shape'},
          {name: 'In relatively good shape'},
          {name: 'Initial signs of wear beginning to show'},
          {name: 'Fragile requiring near future replacement'},
          {name: 'Very old requiring immediate replacement'},
          {name: 'Shrinkage showing cracking/clawing or curling'},
          {name: 'Wind/Wildlife damage with some tabs torn'},
          {name: 'Poor installation practices'},
          {name: 'Suspect moisture penetrating the building envelope'},
          {name: 'Repairs required to avoid leaking'}
        ],
        location: '',
        floor: '',
        life: '',
        cost: ''
      },
      {
        name: 'Porch(roof)',
        state: "0",
        data:[
          {
            name: 'Asphalt',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Wood shingles / shakes',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Concrete / Clay tiles',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Slate',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Plastic / Fiberglass',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Metal',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Copper',
            selected: '0',
            endDataSelected: [],
            default: true
          }
        ],
        endData: [
          {name: 'In good shape'},
          {name: 'In relatively good shape'},
          {name: 'Initial signs of wear beginning to show'},
          {name: 'Fragile requiring near future replacement'},
          {name: 'Very old requiring immediate replacement'},
          {name: 'Shrinkage showing cracking/clawing or curling'},
          {name: 'Wind/Wildlife damage with some tabs torn'},
          {name: 'Poor installation practices'},
          {name: 'Repairs required to avoid leaking'}
        ],
        location: '',
        floor: '',
        life: '',
        cost: ''
      }


    ],
    'Flashings': [
      {
        name: 'Valley(flashing)',
        state: "0",
        data:[
          {
            name: 'Metal open valley',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Asphalt strip open valley',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Closed valley',
            selected: '0',
            endDataSelected: [],
            default: true
          }
        ],
        endData: [
          {name: 'In good shape'},
          {name: 'In relatively good shape'},
          {name: 'Minor cracking indicate initial signs of wear'},
          {name: 'More advanced wear than remaining roof'},
          {name: 'Existing corrosion / holes indicate advanced wear'},
          {name: 'Poor installation practices'},                    
          {name: 'Suspect moisture penetrating the building envelope'},
          {name: 'Repairs required to avoid leaking'}
        ],
        location: '',
        floor: '',
        life: '',
        cost: ''
      },
      {
        name: 'Hips & Ridges(flashing)',
        state: "0",
        data:[
          {
            name: 'Typical',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Elevated ridge vent',
            selected: '0',
            endDataSelected: [],
            default: true
          }
        ],
        endData: [
          {name: 'In good shape'},
          {name: 'In relatively good shape'},
          {name: 'Minor cracking indicate initial signs of wear'},
          {name: 'Major cracking / splitting are signs of advanced wear'},
          {name: 'Poor installation practices'},
          {name: 'Repairs required to avoid leaking'}
        ],
        location: '',
        floor: '',
        life: '',
        cost: ''
      },
      {
        name: 'Wall, Flat, Gutter(flashing)',
        state: "0",
        data:[
          {
            name: 'Gutter from sloped roof',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Facia from sloped roof',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Flat roof from sloped roof',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Wall flashing to a sloped roof',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Bay window underside',
            selected: '0',
            endDataSelected: [],
            default: true
          }
        ],
        endData: [
          {name: 'Caulking has lost elasticity and is beginning to crack'},
          {name: 'Caulking is brittle and showing major cracking'},
          {name: 'Caulking is missing'},
          {name: 'Metal is warped and will or has become loose'},
          {name: 'Metal has minor deterioration with corrosion and holes'},
          {name: 'Major deterioration'},
          {name: 'Drip edge installation is inadequate'},
          {name: 'Drip edge is missing'},
          {name: 'Drip edge required to extend shrinking shingles to gutter'},
          {name: 'Ice shielding is missing'},
          {name: 'Ice shielding installation is inadequate'},
          {name: 'Counter-flashing installation is inadequate'},
          {name: 'Counter-flashing is missing'},
          {name: 'Evaluate further & repair'},
          {name: 'Suspect moisture penetrating the building envelope'},
        ],
        location: '',
        floor: '',
        life: '',
        cost: ''
      },
      {
        name: 'Parapet/Cap(flashing)',
        state: "0",
        data:[
          {
            name: 'Metal',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Asphalt',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Tar',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Pre-cast concrete',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Natural stone',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Masonry',
            selected: '0',
            endDataSelected: [],
            default: true
          }
        ],
        endData: [
          {name: 'Minor cracking'},
          {name: 'Poor installation'},
          {name: 'Repairs'}
        ],
        location: '',
        floor: '',
        life: '',
        cost: ''
      },
      {
        name: 'Dormer(flashing)',
        state: "0",
        data:[
          {
            name: 'Wood siding',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Wood shingle siding',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Metal siding',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Vinyl siding',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Stucco siding',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Asphalt shingle siding',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Insulbrick / asphalt siding',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Asbestos tile siding',
            selected: '0',
            endDataSelected: [],
            default: true
          }
        ],
        endData: [
          {name: 'Minor cracking'},
          {name: 'Poor installation'},
          {name: 'Repairs'}
        ],
        location: '',
        floor: '',
        life: '',
        cost: ''
      },
      {
        name: 'Vents/Vent Pipe(flashing)',
        state: "0",
        data:[
          {
            name: 'Roof vent',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Turbine roof vent',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Ridge vent',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Plumbing waste vant',
            selected: '0',
            endDataSelected: [],
            default: true
          }
        ],
        endData: [
          {name: 'Minor cracking'},
          {name: 'Poor installation'},
          {name: 'Repairs'}
        ],
        location: '',
        floor: '',
        life: '',
        cost: ''
      },
      {
        name: 'Skylight(flashing)',
        state: "0",
        data:[
          {
            name: 'Flush mount',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'High neck curb mount',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Multi-Paneled vault',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Solarium panels',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Roof access hatch',
            selected: '0',
            endDataSelected: [],
            default: true
          }
        ],
        endData: [
          {name: 'Minor cracking'},
          {name: 'Poor installation'},
          {name: 'Repairs'}
        ],
        location: '',
        floor: '',
        life: '',
        cost: ''
      },
      {
        name: 'Chimney(flashing)',
        state: "0",
        data:[
          {
            name: 'Masonry',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Chinmney saddle',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Metal',
            selected: '0',
            endDataSelected: [],
            default: true
          }
        ],
        endData: [
          {name: 'Minor cracking'},
          {name: 'Poor installation'},
          {name: 'Repairs'}
        ],
        location: '',
        floor: '',
        life: '',
        cost: ''
      }
    ],
    'Chimneys': [
      {
        name: 'Chimney',
        state: "0",
        data:[
          {
            name: 'Masonry',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Chimney saddle',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Metal',
            selected: '0',
            endDataSelected: [],
            default: true
          }
        ],
        endData: [
          {name: 'Minor cracking'},
          {name: 'Poor installation'},
          {name: 'Repairs'}
        ],
        location: '',
        floor: '',
        life: '',
        cost: ''
      }
    ]
  },
  'Exterior': {
    'Gutters & Downspouts': [
      {
        name: 'Gutters & Downspouts',
        state: "0",
        data:[
          {
            name: 'Below grade gutter discharge',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Above grade gutter discharge',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Alumnium',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Galvanized Steel',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Copper',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Plastic',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Built-in gutter system',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Flat roof with scuppers',
            selected: '0',
            endDataSelected: [],
            default: true
          }
        ],
        endData: [
          {name: 'In good shape'},
          {name: 'Recently updated gutters'},
          {name: 'Discharge clearance needs improvement'}
        ],
        location: '',
        floor: '',
        life: '',
        cost: ''
      },
      {
        name: 'Soffit & Facia',
        state: "0",
        data:[
          {
            name: 'Wood',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Aluminum',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Galvanized steel',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'open Facia',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'open Soffit',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Trim',
            selected: '0',
            endDataSelected: [],
            default: true
          }
        ],
        endData: [
          {name: 'Recently updated'},
          {name: 'In relatively good shape'},
          {name: 'Print & small repairs are needed'}
        ],
        location: '',
        floor: '',
        life: '',
        cost: ''
      }
    ],
    'Walls': [
      {
        name: 'Main(walls)',
        state: "0",
        data:[
          {
            name: 'Brick masonry',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Block masonry',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Stone',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Stucco',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Stucco with wood trim',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Wood siding',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Wood shingles',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Plywood/hardboard',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Board&batten',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Metal siding',
            selected: '0',
            endDataSelected: [],
            default: true
          }
        ],
        endData: [
          {name: 'In good shape'},
          {name: 'Recently updated gutters'},
          {name: 'Discharge clearance needs improvement'}
        ],
        location: '',
        floor: '',
        life: '',
        cost: ''
      },
      {
        name: 'Foundation(walls)',
        state: "0",
        data:[
          {
            name: 'Brick',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Block masonry',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Stone',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Cement parging over base material',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Wall siding exte3nds down to grade',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Foamboard',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Painted concrete',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Laminated with artificial stone',
            selected: '0',
            endDataSelected: [],
            default: true
          }
        ],
        endData: [
          {name: 'Recently updated'},
          {name: 'In relatively good shape'},
          {name: 'Print & small repairs are needed'}
        ],
        location: '',
        floor: '',
        life: '',
        cost: ''
      },
      {
        name: 'Retaining(walls)',
        state: "0",
        data:[
          {
            name: 'Brick',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Block masonry',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Stone',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Gabion basket',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Corrugated metal',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Wood',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Missing',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Sea wall',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Concrete',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Planter / Sill cap',
            selected: '0',
            endDataSelected: [],
            default: true
          }
        ],
        endData: [
          {name: 'Recently updated'},
          {name: 'In relatively good shape'},
          {name: 'Print & small repairs are needed'}
        ],
        location: '',
        floor: '',
        life: '',
        cost: ''
      }
    ],
    'Windows & Doors': [
      {
        name: 'Windows',
        state: "0",
        data:[
          {
            name: 'Fixed',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Operable',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Bay or Bow',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Solarium',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Garden',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Skylight',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Clerestory',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Type / Material / Glazing are found in the "interior" section',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Retrofitted with old wood frames clad over in metal',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Appear to be in relatively good shape',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'New Windows installed in original wood frame',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Maintained poorly',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Sills',
            selected: '0',
            endDataSelected: [],
            default: true
          }
        ],
        endData: [
          {name: 'In good shape'},
          {name: 'Recently updated gutters'},
          {name: 'Discharge clearance needs improvement'}
        ],
        location: '',
        floor: '',
        life: '',
        cost: ''
      },
      {
        name: 'Doors',
        state: "0",
        data:[
          {
            name: 'Hinged',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Storm',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'French doors',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Sliding doors',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Wood',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Vinyl',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Metal',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Glass',
            selected: '0',
            endDataSelected: [],
            default: true
          }
        ],
        endData: [
          {name: 'Recently updated'},
          {name: 'In relatively good shape'},
          {name: 'Print & small repairs are needed'}
        ],
        location: '',
        floor: '',
        life: '',
        cost: ''
      },
      {
        name: 'Basement walkout',
        state: "0",
        data:[
          {
            name: 'Brick steps',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Stone steps',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Metal steps',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Wood steps',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Wood',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Vinyl',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Metal',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Glass',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Concrete steps',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Door',
            selected: '0',
            endDataSelected: [],
            default: true
          }
        ],
        endData: [
          {name: 'Recently updated'},
          {name: 'In relatively good shape'},
          {name: 'Print & small repairs are needed'}
        ],
        location: '',
        floor: '',
        life: '',
        cost: ''
      }
    ],
    'Porch, Deck & Patio': [
      {
        name: 'Porch & Deck',
        state: "0",
        data:[
          {
            name: 'Wood',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Plastic composite decking with wood framing',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Stone',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Concrete',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Metal',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Composite',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Masonry',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Treehouse',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'None',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Columns',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Planter',
            selected: '0',
            endDataSelected: [],
            default: true
          }
        ],
        endData: [
          {name: 'In good shape'},
          {name: 'Recently updated gutters'},
          {name: 'Discharge clearance needs improvement'}
        ],
        location: '',
        floor: '',
        life: '',
        cost: ''
      },
      {
        name: 'Railings',
        state: "0",
        data:[
          {
            name: 'Metal',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Wood',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Plastic',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Glass',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Stone',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Masonry',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Missing',
            selected: '0',
            endDataSelected: [],
            default: true
          }
        ],
        endData: [
          {name: 'Recently updated'},
          {name: 'In relatively good shape'},
          {name: 'Print & small repairs are needed'}
        ],
        location: '',
        floor: '',
        life: '',
        cost: ''
      },
      {
        name: 'Patio',
        state: "0",
        data:[
          {
            name: 'Stone',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Brick masonry',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Concrete',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Concrete tile',
            selected: '0',
            endDataSelected: [],
            default: true
          }
        ],
        endData: [
          {name: 'Recently updated'},
          {name: 'In relatively good shape'},
          {name: 'Print & small repairs are needed'}
        ],
        location: '',
        floor: '',
        life: '',
        cost: ''
      },
      {
        name: 'Sidewalks',
        state: "0",
        data:[
          {
            name: 'Stone',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Brick masonry',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Asphalt',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Concrete',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Stairs',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Wood',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Concrete tile',
            selected: '0',
            endDataSelected: [],
            default: true
          }
        ],
        endData: [
          {name: 'Recently updated'},
          {name: 'In relatively good shape'},
          {name: 'Print & small repairs are needed'}
        ],
        location: '',
        floor: '',
        life: '',
        cost: ''
      },
      {
        name: 'Stair',
        state: "0",
        data:[
          {
            name: 'Concrete (formed)',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Concrete (precast)',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Wood',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Stone',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Stone Veneer',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Tile Veneer',
            selected: '0',
            endDataSelected: [],
            default: true
          }
        ],
        endData: [
          {name: 'Recently updated'},
          {name: 'In relatively good shape'},
          {name: 'Print & small repairs are needed'}
        ],
        location: '',
        floor: '',
        life: '',
        cost: ''
      }
    ],
    'Parking': [
      {
        name: 'Garage',
        state: "0",
        data:[
          {
            name: 'Concrete floor',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Structural floor',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Cantilevered',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Gravel floor',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Dirt floor',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Asphalt floor',
            selected: '0',
            endDataSelected: [],
            default: true
          }
        ],
        endData: [
          {name: 'In good shape'},
          {name: 'Recently updated gutters'},
          {name: 'Discharge clearance needs improvement'}
        ],
        location: '',
        floor: '',
        life: '',
        cost: ''
      },
      {
        name: 'Garage Door',
        state: "0",
        data:[
          {
            name: 'Wood',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Vinyl',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Metal',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Glass',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Composite',
            selected: '0',
            endDataSelected: [],
            default: true
          }
        ],
        endData: [
          {name: 'Recently updated'},
          {name: 'In relatively good shape'},
          {name: 'Print & small repairs are needed'}
        ],
        location: '',
        floor: '',
        life: '',
        cost: ''
      },
      {
        name: 'Detached Garage',
        state: "0",
        data:[
          {
            name: 'Wood frame with siding',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Block masonry',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Brick veneer wood frame',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Metal',
            selected: '0',
            endDataSelected: [],
            default: true
          }
        ],
        endData: [
          {name: 'Recently updated'},
          {name: 'In relatively good shape'},
          {name: 'Print & small repairs are needed'}
        ],
        location: '',
        floor: '',
        life: '',
        cost: ''
      },
      {
        name: 'Driveway',
        state: "0",
        data:[
          {
            name: 'Asphalt',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Brick / Masonry',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Concrete',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Stone',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Gravel',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Parking pad',
            selected: '0',
            endDataSelected: [],
            default: true
          }
        ],
        endData: [
          {name: 'Recently updated'},
          {name: 'In relatively good shape'},
          {name: 'Print & small repairs are needed'}
        ],
        location: '',
        floor: '',
        life: '',
        cost: ''
      }
    ],
    'Grounds': [
      {
        name: 'Lot Grading',
        state: "0",
        data:[
          {
            name: 'Generally flat',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Slopes away from structure',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Slopes towards structure',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Ravine with a rear walk-out',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Reverse ravine sloping towards front',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Inaccessible due to snow',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Incomplete',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Sprinkler system',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Rear ravine with level / flat frontage',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Trees / Foilage',
            selected: '0',
            endDataSelected: [],
            default: true
          }
        ],
        endData: [
          {name: 'In good shape'},
          {name: 'Recently updated gutters'},
          {name: 'Discharge clearance needs improvement'}
        ],
        location: '',
        floor: '',
        life: '',
        cost: ''
      },
      {
        name: 'Window wells',
        state: "0",
        data:[
          {
            name: 'Generally flat',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Slopes away from structure',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Slopes towards structure',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Ravine with a rear walk-out',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Reverse ravine sloping towards front',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Wood retainer',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Metal retainer',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Stone / Masonry retainer',
            selected: '0',
            endDataSelected: [],
            default: true
          }
        ],
        endData: [
          {name: 'Recently updated'},
          {name: 'In relatively good shape'},
          {name: 'Print & small repairs are needed'}
        ],
        location: '',
        floor: '',
        life: '',
        cost: ''
      },
      {
        name: 'Fences',
        state: "0",
        data:[
          {
            name: 'Wood',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Metal',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Plastic',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Stone',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Masonry',
            selected: '0',
            endDataSelected: [],
            default: true
          }
        ],
        endData: [
          {name: 'Recently updated'},
          {name: 'In relatively good shape'},
          {name: 'Print & small repairs are needed'}
        ],
        location: '',
        floor: '',
        life: '',
        cost: ''
      },
      {
        name: 'Pool',
        state: "0",
        data:[
          {
            name: 'In-ground',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'In-ground concrete',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'In-ground liner',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'In-ground pre-manufactured',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Above ground',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Above ground permanant(fixed)',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Above ground pre-manufactured',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Fountain / Pond',
            selected: '0',
            endDataSelected: [],
            default: true
          }
        ],
        endData: [
          {name: 'Recently updated'},
          {name: 'In relatively good shape'},
          {name: 'Print & small repairs are needed'}
        ],
        location: '',
        floor: '',
        life: '',
        cost: ''
      },
      {
        name: 'Shed/Out Buildings',
        state: "0",
        data:[
          {
            name: 'Wood',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Metal',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Glass',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Open frame',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Closed frame',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Attached to main structure',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Stand Alone',
            selected: '0',
            endDataSelected: [],
            default: true
          }
        ],
        endData: [
          {name: 'Recently updated'},
          {name: 'In relatively good shape'},
          {name: 'Print & small repairs are needed'}
        ],
        location: '',
        floor: '',
        life: '',
        cost: ''
      }
    ]
  },
  'Structure': {
    'Foundations': [
      {
        name: 'Foundations Overview',
        state: "0",
        data:[
          {
            name: 'Poured concrete',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Masonry block',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Hollow masonry block',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Brick',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Stone',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Piers / posts',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Grade beams',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Wood',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Condominium corporations responsibility - Not inspected',
            selected: '0',
            endDataSelected: [],
            default: true
          }
        ],
        endData: [
          {name: 'In good shape'},
          {name: 'Recently updated gutters'},
          {name: 'Discharge clearance needs improvement'}
        ],
        location: '',
        floor: '',
        life: '',
        cost: ''
      },
      {
        name: 'Footings',
        state: "0",
        data:[
          {
            name: 'Masonry',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Brick',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Concrete',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Wood',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Steel',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Stone',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Missing',
            selected: '0',
            endDataSelected: [],
            default: true
          }
        ],
        endData: [
          {name: 'Recently updated'},
          {name: 'In relatively good shape'},
          {name: 'Print & small repairs are needed'}
        ],
        location: '',
        floor: '',
        life: '',
        cost: ''
      },
      {
        name: 'Basement/Crawl space',
        state: "0",
        data:[
          {
            name: 'Concrete slab-on-grade',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Open earth',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Concrete crawl space',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Open earth crawl space',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Gravel',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Crawl space area is inaccessible',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Slab-on-grade construction. No basement',
            selected: '0',
            endDataSelected: [],
            default: true
          }
        ],
        endData: [
          {name: 'Recently updated'},
          {name: 'In relatively good shape'},
          {name: 'Print & small repairs are needed'}
        ],
        location: '',
        floor: '',
        life: '',
        cost: ''
      },
      {
        name: 'Leakage',
        state: "0",
        data:[
          {
            name: 'Efflorescence',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Stains',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Water',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Silt',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Peeling paint',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Delaminating drywall/wood panel',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Loose tiles',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Prior repairs',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Mildew/mold',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Odors',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Elevated moisture readings',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Monitor for any ongoing activity',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Repair accordingly',
            selected: '0',
            endDataSelected: [],
            default: true
          }
        ],
        endData: [
          {name: 'Recently updated'},
          {name: 'In relatively good shape'},
          {name: 'Print & small repairs are needed'}
        ],
        location: '',
        floor: '',
        life: '',
        cost: ''
      },
      {
        name: 'crack(s) noted',
        state: "0",
        data:[
          {
            name: 'Vertical crack',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Horizontal crack',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Transitional old to new building joint',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Masonry step crack',
            selected: '0',
            endDataSelected: [],
            default: true
          }
        ],
        endData: [
          {name: 'Recently updated'},
          {name: 'In relatively good shape'},
          {name: 'Print & small repairs are needed'}
        ],
        location: '',
        floor: '',
        life: '',
        cost: ''
      },
      {
        name: 'Cold cellar / cantina',
        state: "0",
        data:[
          {
            name: 'Efflorescence',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Stains',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Water',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Silt',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Peeling paint',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Loose tiles',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Prior repairs',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Mildew/mold',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Odors',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'In relatively good shape',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Poor thermal division',
            selected: '0',
            endDataSelected: [],
            default: true
          }
        ],
        endData: [
          {name: 'Recently updated'},
          {name: 'In relatively good shape'},
          {name: 'Print & small repairs are needed'}
        ],
        location: '',
        floor: '',
        life: '',
        cost: ''
      }
    ],
    'Framing': [
      {
        name: 'Floor (framing)',
        state: "0",
        data:[
          {
            name: 'Joists',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Trusses',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Concrete',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Metal',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Older sub-structure exists beneath renovations',
            selected: '0',
            endDataSelected: [],
            default: true
          }
        ],
        endData: [
          {name: 'In good shape'},
          {name: 'Recently updated gutters'},
          {name: 'Discharge clearance needs improvement'}
        ],
        location: '',
        floor: '',
        life: '',
        cost: ''
      },
      {
        name: 'Sills (framing)',
        state: "0",
        data:[
          {
            name: 'Wood',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Composite',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Missing',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Exterior grading',
            selected: '0',
            endDataSelected: [],
            default: true
          }
        ],
        endData: [
          {name: 'Recently updated'},
          {name: 'In relatively good shape'},
          {name: 'Print & small repairs are needed'}
        ],
        location: '',
        floor: '',
        life: '',
        cost: ''
      },
      {
        name: 'Beams (framing)',
        state: "0",
        data:[
          {
            name: 'Wood',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Steel',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Laminated wood',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Unknown-covered',
            selected: '0',
            endDataSelected: [],
            default: true
          }
        ],
        endData: [
          {name: 'Recently updated'},
          {name: 'In relatively good shape'},
          {name: 'Print & small repairs are needed'}
        ],
        location: '',
        floor: '',
        life: '',
        cost: ''
      },
      {
        name: 'Columns/Posts (framing)',
        state: "0",
        data:[
          {
            name: 'Wood',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Combined/multiple wood',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Steel',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Brick masonry',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Block masonry',
            selected: '0',
            endDataSelected: [],
            default: true
          }
        ],
        endData: [
          {name: 'Recently updated'},
          {name: 'In relatively good shape'},
          {name: 'Print & small repairs are needed'}
        ],
        location: '',
        floor: '',
        life: '',
        cost: ''
      },
      {
        name: 'Joists / Trusses (framing)',
        state: "0",
        data:[
          {
            name: 'Wood',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Steel',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Laminated wood',
            selected: '0',
            endDataSelected: [],
            default: true
          }
        ],
        endData: [
          {name: 'Recently updated'},
          {name: 'In relatively good shape'},
          {name: 'Print & small repairs are needed'}
        ],
        location: '',
        floor: '',
        life: '',
        cost: ''
      },
      {
        name: 'Sub-flooring (framing)',
        state: "0",
        data:[
          {
            name: 'Wood',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Steel metal decking',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Concrete',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Plastics used',
            selected: '0',
            endDataSelected: [],
            default: true
          }
        ],
        endData: [
          {name: 'Recently updated'},
          {name: 'In relatively good shape'},
          {name: 'Print & small repairs are needed'}
        ],
        location: '',
        floor: '',
        life: '',
        cost: ''
      },
      {
        name: 'Stairwell (framing)',
        state: "0",
        data:[
          {
            name: 'Wood',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Wood / Metal hybrid',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Metal',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Masonry/Stone',
            selected: '0',
            endDataSelected: [],
            default: true
          }
        ],
        endData: [
          {name: 'Recently updated'},
          {name: 'In relatively good shape'},
          {name: 'Print & small repairs are needed'}
        ],
        location: '',
        floor: '',
        life: '',
        cost: ''
      },
      {
        name: 'Cantilevers (framing)',
        state: "0",
        data:[
          {
            name: 'Wood',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Metal',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Concrete',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Removed requiring repair at wall entry',
            selected: '0',
            endDataSelected: [],
            default: true
          }
        ],
        endData: [
          {name: 'Recently updated'},
          {name: 'In relatively good shape'},
          {name: 'Print & small repairs are needed'}
        ],
        location: '',
        floor: '',
        life: '',
        cost: ''
      }
    ],
    'Walls': [
      {
        name: 'Walls - Overview',
        state: "0",
        data:[
          {
            name: 'Wood frame with Brick veneer',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Wood frame with Siding',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Solid masonry',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Solid stone',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Natural Log',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Post & Beam',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Brick veneer with adjacent siding',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Wood frame with faux masonry or stone',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Wood frame with stone veneer',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Precast formed panels',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'ICF insulated concrete form',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Condominium corporations responsibility - Not inspected',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Columns / Posts',
            selected: '0',
            endDataSelected: [],
            default: true
          }
        ],
        endData: [
          {name: 'In good shape'},
          {name: 'Recently updated gutters'},
          {name: 'Discharge clearance needs improvement'}
        ],
        location: '',
        floor: '',
        life: '',
        cost: ''
      },
      {
        name: 'Solid Masonry Wall',
        state: "0",
        data:[
          {
            name: 'Brick & Block',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Clay brick',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Concrete brick',
            selected: '0',
            endDataSelected: [],
            default: true
          }
        ],
        endData: [
          {name: 'Recently updated'},
          {name: 'In relatively good shape'},
          {name: 'Print & small repairs are needed'}
        ],
        location: '',
        floor: '',
        life: '',
        cost: ''
      },
      {
        name: 'Brick Veneer Wall',
        state: "0",
        data:[
          {
            name: 'Brick & framework',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Clay brick',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Concrete brick',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Columns / posts',
            selected: '0',
            endDataSelected: [],
            default: true
          }
        ],
        endData: [
          {name: 'Recently updated'},
          {name: 'In relatively good shape'},
          {name: 'Print & small repairs are needed'}
        ],
        location: '',
        floor: '',
        life: '',
        cost: ''
      },
      {
        name: 'Framework Wall',
        state: "0",
        data:[
          {
            name: 'Wood',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Metal',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Straw',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Unknown',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Columns / Posts',
            selected: '0',
            endDataSelected: [],
            default: true
          }
        ],
        endData: [
          {name: 'Recently updated'},
          {name: 'In relatively good shape'},
          {name: 'Print & small repairs are needed'}
        ],
        location: '',
        floor: '',
        life: '',
        cost: ''
      },
      {
        name: 'Log Post & Beam',
        state: "0",
        data:[
          {
            name: 'Wood',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Metal',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Straw',
            selected: '0',
            endDataSelected: [],
            default: true
          }
        ],
        endData: [
          {name: 'Recently updated'},
          {name: 'In relatively good shape'},
          {name: 'Print & small repairs are needed'}
        ],
        location: '',
        floor: '',
        life: '',
        cost: ''
      },
      {
        name: 'Lintels / Arches',
        state: "0",
        data:[
          {
            name: 'Wood',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Metal',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Masonry',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Stone',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Sills',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Archway',
            selected: '0',
            endDataSelected: [],
            default: true
          }
        ],
        endData: [
          {name: 'Recently updated'},
          {name: 'In relatively good shape'},
          {name: 'Print & small repairs are needed'}
        ],
        location: '',
        floor: '',
        life: '',
        cost: ''
      }
    ],
    'Roofing': [
      {
        name: 'Roof Rafters',
        state: "0",
        data:[
          {
            name: 'Wood',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Metal',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Trusses',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Open Web Joists',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'No access to attic or roof structure',
            selected: '0',
            endDataSelected: [],
            default: true
          }
        ],
        endData: [
          {name: 'In good shape'},
          {name: 'Recently updated gutters'},
          {name: 'Discharge clearance needs improvement'}
        ],
        location: '',
        floor: '',
        life: '',
        cost: ''
      },
      {
        name: 'Roof Trusses',
        state: "0",
        data:[
          {
            name: 'Wood',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Metal',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Trusses',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Open Web Joists',
            selected: '0',
            endDataSelected: [],
            default: true
          }
        ],
        endData: [
          {name: 'Recently updated'},
          {name: 'In relatively good shape'},
          {name: 'Print & small repairs are needed'}
        ],
        location: '',
        floor: '',
        life: '',
        cost: ''
      },
      {
        name: 'Roof Sheathing',
        state: "0",
        data:[
          {
            name: 'Plywood',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Particleboard',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Solid spaced planks',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Spaced planks',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Metal',
            selected: '0',
            endDataSelected: [],
            default: true
          }
        ],
        endData: [
          {name: 'Recently updated'},
          {name: 'In relatively good shape'},
          {name: 'Print & small repairs are needed'}
        ],
        location: '',
        floor: '',
        life: '',
        cost: ''
      },
      {
        name: 'Party (divide) Walls',
        state: "0",
        data:[
          {
            name: 'Masonry',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Wood',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Wood (with Drywall)',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'No separations between attics',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Concrete',
            selected: '0',
            endDataSelected: [],
            default: true
          }
        ],
        endData: [
          {name: 'Recently updated'},
          {name: 'In relatively good shape'},
          {name: 'Print & small repairs are needed'}
        ],
        location: '',
        floor: '',
        life: '',
        cost: ''
      },
      {
        name: 'Knee Walls',
        state: "0",
        data:[
          {
            name: 'Wood',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Metal',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Masonry',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Inaccessible',
            selected: '0',
            endDataSelected: [],
            default: true
          }
        ],
        endData: [
          {name: 'Recently updated'},
          {name: 'In relatively good shape'},
          {name: 'Print & small repairs are needed'}
        ],
        location: '',
        floor: '',
        life: '',
        cost: ''
      }
    ]
  },
  'Interior': {
    'Finishes': [
      {
        name: 'Floors',
        state: "0",
        data:[
          {
            name: 'Hardwood',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Softwood',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Carpet',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Resilient / Laminate',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Ceramic tile',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Marble / Stone',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Concrete',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Other',
            selected: '0',
            endDataSelected: [],
            default: true
          }
        ],
        endData: [
          {name: 'In good shape'},
          {name: 'Recently updated gutters'},
          {name: 'Discharge clearance needs improvement'}
        ],
        location: '',
        floor: '',
        life: '',
        cost: ''
      },
      {
        name: 'Walls',
        state: "0",
        data:[
          {
            name: 'Drywall / Plaster',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Wood panelling',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Brick / Stone',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Concrete',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Other',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Baseboard',
            selected: '0',
            endDataSelected: [],
            default: true
          }
        ],
        endData: [
          {name: 'Recently updated'},
          {name: 'In relatively good shape'},
          {name: 'Print & small repairs are needed'}
        ],
        location: '',
        floor: '',
        life: '',
        cost: ''
      },
      {
        name: 'Ceilings',
        state: "0",
        data:[
          {
            name: 'Drywall / Plaster',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Acoustic tile',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Wood',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Concrete',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Metal',
            selected: '0',
            endDataSelected: [],
            default: true
          }
        ],
        endData: [
          {name: 'In good shape'},
          {name: 'Recently updated gutters'},
          {name: 'Discharge clearance needs improvement'}
        ],
        location: '',
        floor: '',
        life: '',
        cost: ''
      },
      {
        name: 'Doors',
        state: "0",
        data:[
          {
            name: 'Interior',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Cold cellar or Cantina',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Sliding glass',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Storm',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Garage man door',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Exterior',
            selected: '0',
            endDataSelected: [],
            default: true
          }
        ],
        endData: [
          {name: 'In good shape'},
          {name: 'Recently updated gutters'},
          {name: 'Discharge clearance needs improvement'}
        ],
        location: '',
        floor: '',
        life: '',
        cost: ''
      },
      {
        name: 'Cabinetry / Counter',
        state: "0",
        data:[
          {
            name: 'Wood cabinet',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Composite cabinet',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Metal cabinet',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Wood counter',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Composite counter',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Concrete counter',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Glass counter',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Granite/Marble counter',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Kitchen',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Washroom',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Utility',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Exterior',
            selected: '0',
            endDataSelected: [],
            default: true
          }
        ],
        endData: [
          {name: 'In good shape'},
          {name: 'Recently updated gutters'},
          {name: 'Discharge clearance needs improvement'}
        ],
        location: '',
        floor: '',
        life: '',
        cost: ''
      }
    ],
    'Stairs': [
      {
        name: 'Stairs',
        state: "0",
        data:[
          {
            name: 'Wood',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Metal',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Concrete',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Masonry/Stone',
            selected: '0',
            endDataSelected: [],
            default: true
          }
        ],
        endData: [
          {name: 'In good shape'},
          {name: 'Recently updated gutters'},
          {name: 'Discharge clearance needs improvement'}
        ],
        location: '',
        floor: '',
        life: '',
        cost: ''
      },
      {
        name: 'Railing',
        state: "0",
        data:[
          {
            name: 'Wood',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Glass',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Metal',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Missing',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Metal/glass combination',
            selected: '0',
            endDataSelected: [],
            default: true
          }
        ],
        endData: [
          {name: 'Recently updated'},
          {name: 'In relatively good shape'},
          {name: 'Print & small repairs are needed'}
        ],
        location: '',
        floor: '',
        life: '',
        cost: ''
      }
    ],
    'Windows': [
      {
        name: 'Windows Overview',
        state: "0",
        data:[
          {
            name: 'Wood',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Vinyl',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Metal',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Fibreglass',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Wood core with a Metal or Vinyl exterior',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Fixed',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Casement',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Double Hung',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Sliding',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Awning',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Jalousie',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Single glazed',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Double glazed',
            selected: '0',
            endDataSelected: [],
            default: true
          }
        ],
        endData: [
          {name: 'In good shape'},
          {name: 'Recently updated gutters'},
          {name: 'Discharge clearance needs improvement'}
        ],
        location: '',
        floor: '',
        life: '',
        cost: ''
      },
      {
        name: 'Window Type / Material',
        state: "0",
        data:[
          {
            name: 'Casement',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Sliding',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Double hung',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Awning',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Jalousie',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Fixed',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Wood',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Vinyl',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Metal',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Fiberglass',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Wood core with Metal or Vinyl exterior',
            selected: '0',
            endDataSelected: [],
            default: true
          }
        ],
        endData: [
          {name: 'Recently updated'},
          {name: 'In relatively good shape'},
          {name: 'Print & small repairs are needed'}
        ],
        location: '',
        floor: '',
        life: '',
        cost: ''
      },
      {
        name: 'Window Glazing',
        state: "0",
        data:[
          {
            name: 'Single',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Double',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Triple',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Storms',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Window & Storm',
            selected: '0',
            endDataSelected: [],
            default: true
          }
        ],
        endData: [
          {name: 'In good shape'},
          {name: 'Recently updated gutters'},
          {name: 'Discharge clearance needs improvement'}
        ],
        location: '',
        floor: '',
        life: '',
        cost: ''
      },
      {
        name: 'Skylight/Solarium',
        state: "0",
        data:[
          {
            name: 'Leaking',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Fixed skylight',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Operable skylight',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Solarium',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Condensation',
            selected: '0',
            endDataSelected: [],
            default: true
          }
        ],
        endData: [
          {name: 'In good shape'},
          {name: 'Recently updated gutters'},
          {name: 'Discharge clearance needs improvement'}
        ],
        location: '',
        floor: '',
        life: '',
        cost: ''
      }
    ],
    'Insulation': [
      {
        name: 'Attic Insulation',
        state: "0",
        data:[
          {
            name: 'Glass fibre',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Mineral wool',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Cellulose',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Spray foam',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Vermiculite',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Rigid board',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Wood shavings',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'No access to attic space(s)',
            selected: '0',
            endDataSelected: [],
            default: true
          }
        ],
        endData: [
          {name: 'In good shape'},
          {name: 'Recently updated gutters'},
          {name: 'Discharge clearance needs improvement'}
        ],
        location: '',
        floor: '',
        life: '',
        cost: ''
      },
      {
        name: 'Basement Insulation',
        state: "0",
        data:[
          {
            name: 'Batt',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Foam',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Board',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Generally missing throughout',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Missing',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Crawl space',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Inadequate',
            selected: '0',
            endDataSelected: [],
            default: true
          }
        ],
        endData: [
          {name: 'Recently updated'},
          {name: 'In relatively good shape'},
          {name: 'Print & small repairs are needed'}
        ],
        location: '',
        floor: '',
        life: '',
        cost: ''
      },
      {
        name: 'Wall Insulation',
        state: "0",
        data:[
          {
            name: 'Missing',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Glass fibre',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Mineral wool',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Cellulose',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Spray foam',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Vermiculite',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Rigid board',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Wood shavings',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Inaadequate',
            selected: '0',
            endDataSelected: [],
            default: true
          }
        ],
        endData: [
          {name: 'Recently updated'},
          {name: 'In relatively good shape'},
          {name: 'Print & small repairs are needed'}
        ],
        location: '',
        floor: '',
        life: '',
        cost: ''
      }
    ],
    'Venitlation & Moisture Barrier': [
      {
        name: 'Attic Venting',
        state: "0",
        data:[
          {
            name: 'Roof vent',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Soffit vent',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Facia vent',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Gable vent',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Ridge vent',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Power vent',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Inadequate',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'In good shape',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Poor connections',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Cathedral',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'General throughout',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'No access to attic spaces',
            selected: '0',
            endDataSelected: [],
            default: true
          }
        ],
        endData: [
          {name: 'In good shape'},
          {name: 'Recently updated gutters'},
          {name: 'Discharge clearance needs improvement'}
        ],
        location: '',
        floor: '',
        life: '',
        cost: ''
      },
      {
        name: 'Basement Venting',
        state: "0",
        data:[
          {
            name: 'Basement',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Crawl space',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Inadequate',
            selected: '0',
            endDataSelected: [],
            default: true
          }
        ],
        endData: [
          {name: 'Recently updated'},
          {name: 'In relatively good shape'},
          {name: 'Print & small repairs are needed'}
        ],
        location: '',
        floor: '',
        life: '',
        cost: ''
      }
    ],
    'Safety & Appliances': [
      {
        name: 'Safety System',
        state: "0",
        data:[
          {
            name: 'Smoke detectors',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Carbon monoxide detectors',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Heat sensors',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Sprinkler system',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Missing',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Fire separation is inadequate',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Electrical surge protector',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Fire shutters',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Fire escape',
            selected: '0',
            endDataSelected: [],
            default: true
          }
        ],
        endData: [
          {name: 'In good shape'},
          {name: 'Recently updated gutters'},
          {name: 'Discharge clearance needs improvement'}
        ],
        location: '',
        floor: '',
        life: '',
        cost: ''
      },
      {
        name: 'Appliances',
        state: "0",
        data:[
          {
            name: 'Stove',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Refrigerator',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Dishwasher',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Wall Oven',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Stove Exhaust Fan',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Central Vacuum',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Clothes Washer',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Clothes Dryer',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Microwave-Built-in',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Wine cooler',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Freezer',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Elevator',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Not tested',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Missing',
            selected: '0',
            endDataSelected: [],
            default: true
          }
        ],
        endData: [
          {name: 'Recently updated'},
          {name: 'In relatively good shape'},
          {name: 'Print & small repairs are needed'}
        ],
        location: '',
        floor: '',
        life: '',
        cost: ''
      }
    ],
    'Rooms': [
      {
        name: 'Kitchen',
        state: "0",
        data:[
          {
            name: 'Countertops',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Cabinets (Upper)',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Cabinets (Lower)',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Skins',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Faucet',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Hardware',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Floor',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Wall',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Ceiling',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Backsplash',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Electrical',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Plumbing',
            selected: '0',
            endDataSelected: [],
            default: true
          }
        ],
        endData: [
          {name: 'In good shape'},
          {name: 'Recently updated gutters'},
          {name: 'Discharge clearance needs improvement'}
        ],
        location: '',
        floor: '',
        life: '',
        cost: ''
      },
      {
        name: 'Washroom',
        state: "0",
        data:[
          {
            name: 'Countertops',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Cabinets (Upper)',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Cabinets (Lower)',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Skins',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Faucet',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Hardware',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Bath Tub',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Tile Enclosure',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Toilet',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Floor',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Wall',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Ceiling',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Electrical',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Plumbing',
            selected: '0',
            endDataSelected: [],
            default: true
          }
        ],
        endData: [
          {name: 'Recently updated'},
          {name: 'In relatively good shape'},
          {name: 'Print & small repairs are needed'}
        ],
        location: '',
        floor: '',
        life: '',
        cost: ''
      },
      {
        name: 'Bedroom',
        state: "0",
        data:[
          {
            name: 'Floor',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Walls',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Ceiling',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Closet',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Door',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Hardware',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Window',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Trim',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Electrical',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Plumbing',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Floor',
            selected: '0',
            endDataSelected: [],
            default: true
          }
        ],
        endData: [
          {name: 'Recently updated'},
          {name: 'In relatively good shape'},
          {name: 'Print & small repairs are needed'}
        ],
        location: '',
        floor: '',
        life: '',
        cost: ''
      },
      {
        name: 'Living / Familiy',
        state: "0",
        data:[
          {
            name: 'Floor',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Walls',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Ceiling',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Closet',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Door',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Hardware',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Window',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Trim',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Electrical',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Plumbing',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Study',
            selected: '0',
            endDataSelected: [],
            default: true
          }
        ],
        endData: [
          {name: 'Recently updated'},
          {name: 'In relatively good shape'},
          {name: 'Print & small repairs are needed'}
        ],
        location: '',
        floor: '',
        life: '',
        cost: ''
      },
      {
        name: 'Utility',
        state: "0",
        data:[
          {
            name: 'Floor',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Walls',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Ceiling',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Closet',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Door',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Hardware',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Window',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Trim',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Electrical',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Plumbing',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Laundry',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Foyer',
            selected: '0',
            endDataSelected: [],
            default: true
          }
        ],
        endData: [
          {name: 'Recently updated'},
          {name: 'In relatively good shape'},
          {name: 'Print & small repairs are needed'}
        ],
        location: '',
        floor: '',
        life: '',
        cost: ''
      }
    ]
  },
  'Electrical': {
    'Distribution': [
      {
        name: 'Branch Wiring',
        state: "0",
        data:[
          {
            name: 'Fuese (Main disconnect)',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Breaker(Main disconnect)',
            selected: '0',
            endDataSelected: [],
            default: true
          }
        ],
        endData: [
          {name: 'In good shape'},
          {name: 'Recently updated gutters'},
          {name: 'Discharge clearance needs improvement'}
        ],
        location: '',
        floor: '',
        life: '',
        cost: ''
      },
      {
        name: 'Knob & Tube',
        state: "0",
        data:[
          {
            name: 'Activity',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Activitiy in majority of structure',
            selected: '0',
            endDataSelected: [],
            default: true
          }
        ],
        endData: [
          {name: 'Recently updated'},
          {name: 'In relatively good shape'},
          {name: 'Print & small repairs are needed'}
        ],
        location: '',
        floor: '',
        life: '',
        cost: ''
      },
      {
        name: 'Aluminum',
        state: "0",
        data:[
          {
            name: 'Activity',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Activitiy in majority of structure',
            selected: '0',
            endDataSelected: [],
            default: true
          }
        ],
        endData: [
          {name: 'Recently updated'},
          {name: 'In relatively good shape'},
          {name: 'Print & small repairs are needed'}
        ],
        location: '',
        floor: '',
        life: '',
        cost: ''
      }
    ],
    'Guttersss': [
      {
        name: 'Gutters',
        state: "0",
        data:[
          {
            name: 'Below grade gutter',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Above grade gutter discharge',
            selected: '0',
            endDataSelected: [],
            default: true
          }
        ],
        endData: [
          {name: 'In good shape'},
          {name: 'Recently updated gutters'},
          {name: 'Discharge clearance needs improvement'}
        ],
        location: '',
        floor: '',
        life: '',
        cost: ''
      },
      {
        name: 'Soffit & Facia',
        state: "0",
        data:[
          {
            name: 'Wood',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Aluminum',
            selected: '0',
            endDataSelected: [],
            default: true
          }
        ],
        endData: [
          {name: 'Recently updated'},
          {name: 'In relatively good shape'},
          {name: 'Print & small repairs are needed'}
        ],
        location: '',
        floor: '',
        life: '',
        cost: ''
      }
    ]
  },
  'Plumbing': {
    'Gutters': [
      {
        name: 'Gutters',
        state: "0",
        data:[
          {
            name: 'Below grade gutter',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Above grade gutter discharge',
            selected: '0',
            endDataSelected: [],
            default: true
          }
        ],
        endData: [
          {name: 'In good shape'},
          {name: 'Recently updated gutters'},
          {name: 'Discharge clearance needs improvement'}
        ],
        location: '',
        floor: '',
        life: '',
        cost: ''
      },
      {
        name: 'Soffit & Facia',
        state: "0",
        data:[
          {
            name: 'Wood',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Aluminum',
            selected: '0',
            endDataSelected: [],
            default: true
          }
        ],
        endData: [
          {name: 'Recently updated'},
          {name: 'In relatively good shape'},
          {name: 'Print & small repairs are needed'}
        ],
        location: '',
        floor: '',
        life: '',
        cost: ''
      }
    ],
    'Guttersss': [
      {
        name: 'Gutters',
        state: "0",
        data:[
          {
            name: 'Below grade gutter',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Above grade gutter discharge',
            selected: '0',
            endDataSelected: [],
            default: true
          }
        ],
        endData: [
          {name: 'In good shape'},
          {name: 'Recently updated gutters'},
          {name: 'Discharge clearance needs improvement'}
        ],
        location: '',
        floor: '',
        life: '',
        cost: ''
      },
      {
        name: 'Soffit & Facia',
        state: "0",
        data:[
          {
            name: 'Wood',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Aluminum',
            selected: '0',
            endDataSelected: [],
            default: true
          }
        ],
        endData: [
          {name: 'Recently updated'},
          {name: 'In relatively good shape'},
          {name: 'Print & small repairs are needed'}
        ],
        location: '',
        floor: '',
        life: '',
        cost: ''
      }
    ]
  },
  'Cooling': {
    'Gutters': [
      {
        name: 'Gutters',
        state: "0",
        data:[
          {
            name: 'Below grade gutter',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Above grade gutter discharge',
            selected: '0',
            endDataSelected: [],
            default: true
          }
        ],
        endData: [
          {name: 'In good shape'},
          {name: 'Recently updated gutters'},
          {name: 'Discharge clearance needs improvement'}
        ],
        location: '',
        floor: '',
        life: '',
        cost: ''
      },
      {
        name: 'Soffit & Facia',
        state: "0",
        data:[
          {
            name: 'Wood',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Aluminum',
            selected: '0',
            endDataSelected: [],
            default: true
          }
        ],
        endData: [
          {name: 'Recently updated'},
          {name: 'In relatively good shape'},
          {name: 'Print & small repairs are needed'}
        ],
        location: '',
        floor: '',
        life: '',
        cost: ''
      }
    ],
    'Guttersss': [
      {
        name: 'Gutters',
        state: "0",
        data:[
          {
            name: 'Below grade gutter',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Above grade gutter discharge',
            selected: '0',
            endDataSelected: [],
            default: true
          }
        ],
        endData: [
          {name: 'In good shape'},
          {name: 'Recently updated gutters'},
          {name: 'Discharge clearance needs improvement'}
        ],
        location: '',
        floor: '',
        life: '',
        cost: ''
      },
      {
        name: 'Soffit & Facia',
        state: "0",
        data:[
          {
            name: 'Wood',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Aluminum',
            selected: '0',
            endDataSelected: [],
            default: true
          }
        ],
        endData: [
          {name: 'Recently updated'},
          {name: 'In relatively good shape'},
          {name: 'Print & small repairs are needed'}
        ],
        location: '',
        floor: '',
        life: '',
        cost: ''
      }
    ]
  },
  'Heating': {
    'Gutters': [
      {
        name: 'Gutters',
        state: "0",
        data:[
          {
            name: 'Below grade gutter',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Above grade gutter discharge',
            selected: '0',
            endDataSelected: [],
            default: true
          }
        ],
        endData: [
          {name: 'In good shape'},
          {name: 'Recently updated gutters'},
          {name: 'Discharge clearance needs improvement'}
        ],
        location: '',
        floor: '',
        life: '',
        cost: ''
      },
      {
        name: 'Soffit & Facia',
        state: "0",
        data:[
          {
            name: 'Wood',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Aluminum',
            selected: '0',
            endDataSelected: [],
            default: true
          }
        ],
        endData: [
          {name: 'Recently updated'},
          {name: 'In relatively good shape'},
          {name: 'Print & small repairs are needed'}
        ],
        location: '',
        floor: '',
        life: '',
        cost: ''
      }
    ],
    'Guttersss': [
      {
        name: 'Gutters',
        state: "0",
        data:[
          {
            name: 'Below grade gutter',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Above grade gutter discharge',
            selected: '0',
            endDataSelected: [],
            default: true
          }
        ],
        endData: [
          {name: 'In good shape'},
          {name: 'Recently updated gutters'},
          {name: 'Discharge clearance needs improvement'}
        ],
        location: '',
        floor: '',
        life: '',
        cost: ''
      },
      {
        name: 'Soffit & Facia',
        state: "0",
        data:[
          {
            name: 'Wood',
            selected: '0',
            endDataSelected: [],
            default: true
          },
          {
            name: 'Aluminum',
            selected: '0',
            endDataSelected: [],
            default: true
          }
        ],
        endData: [
          {name: 'Recently updated'},
          {name: 'In relatively good shape'},
          {name: 'Print & small repairs are needed'}
        ],
        location: '',
        floor: '',
        life: '',
        cost: ''
      }
    ]
  }
}
*/

// reducers
export default handleActions({
  [CREATE_CATEGORY]: (state, action) => { // listIndex, listSubIndex, label, copiedObject
    const {selectedAddressIndex, listIndex, listSubIndex, label, copiedObject} = action.payload;
    let updateState = Object.assign({}, state);
    const selectedBigCategory = updateState.reportData[selectedAddressIndex].selectedBigCategory;
    let changeJson = {};
    
    let count = 0; let selectedCount = 0;
    for(var k in updateState.reportData[selectedAddressIndex][selectedBigCategory]) {
      if ( count == listIndex) {
        if( !changeJson.hasOwnProperty(k) ) {
          changeJson[k] = {};
        }
        // updateState.reportData[selectedAddressIndex][selectedBigCategory][k].push(copiedObject);
        changeJson[k] = {$push: [copiedObject]};
      }
      count++;
    }

    // return updateState;

    return update(state, {
      'reportData': {
        [selectedAddressIndex]: {
          [`${selectedBigCategory}`]: changeJson
        }
      }      
    });

  },

  [REMOVE_CATEGORY]: (state, action) => { // listIndex, listSubIndex
    const {selectedAddressIndex, listIndex, listSubIndex} = action.payload;
    let updateState = Object.assign({}, state);
    const selectedBigCategory = updateState.reportData[selectedAddressIndex].selectedBigCategory;
    let changeJson = {};

    let count = 0; let selectedCount = 0;
    for(var k in updateState.reportData[selectedAddressIndex][selectedBigCategory]) {
      if ( count == listIndex) {
        if( !changeJson.hasOwnProperty(k) ) {
          changeJson[k] = {};
        }
        // updateState.reportData[selectedAddressIndex][selectedBigCategory][k].splice(listSubIndex, 1);
        changeJson[k] = {$splice: [[listSubIndex, 1]]};
      }
      count++;
    }

    // return updateState;

    return update(state, {
      'reportData': {
        [selectedAddressIndex]: {
          [`${selectedBigCategory}`]: changeJson
        }
      }      
    });

  },

  [HIGHLIGHT_SELECT_CATEGORY]: (state, action) => {
    return state;
  },
  [CREATE_PARENT_REPORT]: (state,action) => {    
    const {oneReport} = action.payload;
    return update(state, {
      'reportData': {
         $push: [oneReport] 
      }      
    });
  },
  [CREATE_ITEM]: (state, action) => {
    const{ selectedAddressIndex, listIndex, listSubIndex, newValue} = action.payload;    
    let updateState = Object.assign({}, state);
    let changeJson = {};

    const selectedBigCategory = updateState.reportData[selectedAddressIndex].selectedBigCategory;
    // console.log(selectedAddressIndex, selectedBigCategory);
    
    let count = 0; let selectedCount = 0;
    for(var k in updateState.reportData[selectedAddressIndex][selectedBigCategory]) {
      if ( count == listIndex) {        
        changeJson[k] = {};
        changeJson[k][listSubIndex] = {'data':{
          $push:[{
            name: newValue,
            selected: '0',
            endDataSelected: [],
            default: false
          }] 
        }};        
      }
      count++;
    }
    // console.log(changeJson);
    return update(state, {
      'reportData': {
        [selectedAddressIndex]: {
          [`${selectedBigCategory}`]: changeJson
        }
      }      
    });
    /*
    const{ selectedAddressIndex, listIndex, listSubIndex, copiedObject} = action.payload;
    let updateState = Object.assign({}, state);
    const selectedBigCategory = updateState.reportData[selectedAddressIndex].selectedBigCategory;
    
    let count = 0; let selectedCount = 0;
    for(var k in updateState.reportData[selectedAddressIndex][selectedBigCategory]) {
      if ( count == listIndex) {
        // updateState.reportData[selectedAddressIndex][selectedBigCategory][k] = Object.assign({}, copiedObject);
        console.log("----------------");
        console.log(updateState.reportData[selectedAddressIndex][selectedBigCategory][k]);
        console.log("***************");
      }
      count++;
    }

    return updateState;
    */
  },

  [UPDATE_ITEM]: (state, action) => {
    const {selectedAddressIndex, listIndex, listSubIndex, selectedGoEditItemIndex, newValue} = action.payload;
    // console.log(selectedArray);
    let updateState = Object.assign({}, state);
    let changeJson = {};
    const selectedBigCategory = updateState.reportData[selectedAddressIndex].selectedBigCategory;

    let count = 0; 
    for(var k in updateState.reportData[selectedAddressIndex][selectedBigCategory]) {
      if ( count == listIndex) {
        if( !changeJson.hasOwnProperty(k) ) {
          changeJson[k] = {};
          changeJson[k][listSubIndex] = {'data':{}};
        }
        
        updateState.reportData[selectedAddressIndex][selectedBigCategory][k][listSubIndex].data.map((item, index)=>{
          if (selectedGoEditItemIndex == index) {
            if( !changeJson[k][listSubIndex]['data'].hasOwnProperty(index) ) {
              changeJson[k][listSubIndex]['data'][index] = {};
            }
            changeJson[k][listSubIndex]['data'][index]['name'] = {$set: newValue};
          }
        });
      }
      count++;
    }
    
    // return updateState;
    return update(state, {
      'reportData': {
        [selectedAddressIndex]: {
          [`${selectedBigCategory}`]: changeJson
        }
      }      
    });
  },

  [UPDATE_DETAIL_ITEM]: (state, action) => {
    const {selectedAddressIndex, listIndex, listSubIndex, selectedGoEditDetailItemIndex, newValue} = action.payload;
    // console.log(selectedArray);
    let updateState = Object.assign({}, state);
    let changeJson = {};
    const selectedBigCategory = updateState.reportData[selectedAddressIndex].selectedBigCategory;

    let count = 0; 
    for(var k in updateState.reportData[selectedAddressIndex][selectedBigCategory]) {
      if ( count == listIndex) {        
        changeJson[k] = {};
        changeJson[k][listSubIndex] = {'endData':{
          [selectedGoEditDetailItemIndex]: {
            $set: {name: newValue}
          }
        }};        
      }
      count++;
    }
    
    // return updateState;
    return update(state, {
      'reportData': {
        [selectedAddressIndex]: {
          [`${selectedBigCategory}`]: changeJson
        }
      }      
    });
  },

  [DEL_ITEM]: (state, action) => {
    const {selectedAddressIndex, listIndex, listSubIndex, selectedGoEditItemIndex} = action.payload;
    // console.log(selectedArray);
    let updateState = Object.assign({}, state);
    let changeJson = {};
    const selectedBigCategory = updateState.reportData[selectedAddressIndex].selectedBigCategory;

    let count = 0; 
    for(var k in updateState.reportData[selectedAddressIndex][selectedBigCategory]) {
      if ( count == listIndex) {
        if( !changeJson.hasOwnProperty(k) ) {
          changeJson[k] = {};
          changeJson[k][listSubIndex] = {'data':{}};
        }

        changeJson[k][listSubIndex] = {'data':{
          $splice: [[selectedGoEditItemIndex, 1]]
        }};
      }
      count++;
    }
    
    // return updateState;
    return update(state, {
      'reportData': {
        [selectedAddressIndex]: {
          [`${selectedBigCategory}`]: changeJson
        }
      }      
    });
  },

  [DEL_DETAIL_ITEM]: (state, action) => {
    const {selectedAddressIndex, listIndex, listSubIndex, selectedGoEditDetailItemIndex} = action.payload;
    // console.log(selectedArray);
    let updateState = Object.assign({}, state);
    let changeJson = {};
    const selectedBigCategory = updateState.reportData[selectedAddressIndex].selectedBigCategory;

    let count = 0; 
    for(var k in updateState.reportData[selectedAddressIndex][selectedBigCategory]) {
      if ( count == listIndex) {
        if( !changeJson.hasOwnProperty(k) ) {
          changeJson[k] = {};
          changeJson[k][listSubIndex] = {'endData':{}};
        }

        changeJson[k][listSubIndex] = {'endData':{
          $splice: [[selectedGoEditDetailItemIndex, 1]]
        }};
      }
      count++;
    }
    
    // return updateState;
    return update(state, {
      'reportData': {
        [selectedAddressIndex]: {
          [`${selectedBigCategory}`]: changeJson
        }
      }      
    });
  },

  [SELECT_ITEM]: (state, action) => {	// listIndex, listSubIndex, selectedArray        
    
  	const {selectedAddressIndex, listIndex, listSubIndex, selectedArray} = action.payload;    
  	let updateState = Object.assign({}, state);
    let changeJson = {};

    const selectedBigCategory = updateState.reportData[selectedAddressIndex].selectedBigCategory;
    // console.log(selectedAddressIndex, selectedBigCategory);
    
  	let count = 0; let selectedCount = 0;
  	for(var k in updateState.reportData[selectedAddressIndex][selectedBigCategory]) {
  	  if ( count == listIndex) {
        selectedCount += parseInt(updateState.reportData[selectedAddressIndex][selectedBigCategory][k][listSubIndex].limitations.length);
        console.log(parseInt(updateState.reportData[selectedAddressIndex][selectedBigCategory][k][listSubIndex].limitations.length));
  	    updateState.reportData[selectedAddressIndex][selectedBigCategory][k][listSubIndex].data.map((item, index)=>{
          if( !changeJson.hasOwnProperty(k) ) {
            changeJson[k] = {};
            changeJson[k][listSubIndex] = {'data':{}};
          }

  	      if(selectedArray.includes(index)){
  	      	selectedCount++;
  	      	// updateState.reportData[selectedAddressIndex][selectedBigCategory][k][listSubIndex].data[index].selected = '1';            
            if( !changeJson[k][listSubIndex]['data'].hasOwnProperty(index) ) {
              changeJson[k][listSubIndex]['data'][index] = {selected:{}};
            }
            changeJson[k][listSubIndex]['data'][index]['selected'] = {$set: '1'};
  	      } else {
  	      	// updateState.reportData[selectedAddressIndex][selectedBigCategory][k][listSubIndex].data[index].selected = '0';
            // updateState.reportData[selectedAddressIndex][selectedBigCategory][k][listSubIndex].data[index].endDataSelected = [];
            if( !changeJson[k][listSubIndex]['data'].hasOwnProperty(index) ) {
              changeJson[k][listSubIndex]['data'][index] = {selected:{}};
            }
            changeJson[k][listSubIndex]['data'][index]['selected'] = {$set: '0'};
            changeJson[k][listSubIndex]['data'][index]['endDataSelected'] = {$set: []};
  	      }

          selectedCount += parseInt(item.endDataSelected.length);

    		});
    	    
        if ( updateState.reportData[selectedAddressIndex][selectedBigCategory][k][listSubIndex].images.length == 0 ) {
      		if ( selectedCount == 0 ) {
      		  // updateState.reportData[selectedAddressIndex][selectedBigCategory][k][listSubIndex]['state'] = '0';
            changeJson[k][listSubIndex]['state'] = {$set: '0'};
      		} else if ( selectedCount == 1 ) {
      		  // updateState.reportData[selectedAddressIndex][selectedBigCategory][k][listSubIndex]['state'] = '1';
            changeJson[k][listSubIndex]['state'] = {$set: '1'};
      		} else {
      		  // updateState.reportData[selectedAddressIndex][selectedBigCategory][k][listSubIndex]['state'] = '2';
            changeJson[k][listSubIndex]['state'] = {$set: '2'};
      		}
        }
          
  	  }
  	  count++;
  	}
    // console.log(changeJson);
    return update(state, {
      'reportData': {
        [selectedAddressIndex]: {
          [`${selectedBigCategory}`]: changeJson
        }
      }      
    });
    
    /*
    return update(state, {
      'reportData': {
        [selectedAddressIndex]: {
          [`${selectedBigCategory}`]: {
            'Flashings': {
              [0] :  {
                'state' : {$set: '1'},
                'data': {
                  [0]: {
                    'selected': {$set: '1'}
                  }
                }
              }
            }
          }
        }
      }      
    });
    */
  },

  [SELECT_DETAIL_ITEM]: (state, action) => { // listIndex, listSubIndex, selectedGoDetailItemIndex, selectedArray

    const {selectedAddressIndex, listIndex, listSubIndex, selectedGoDetailItemIndex, selectedArray} = action.payload;
    // console.log(selectedArray);
    let updateState = Object.assign({}, state);
    let changeJson = {};
    const selectedBigCategory = updateState.reportData[selectedAddressIndex].selectedBigCategory;

    let count = 0; let selectedCount = 0;
    for(var k in updateState.reportData[selectedAddressIndex][selectedBigCategory]) {
      if ( count == listIndex) {
        if( !changeJson.hasOwnProperty(k) ) {
          changeJson[k] = {};
          changeJson[k][listSubIndex] = {'data':{}};
        }
        selectedCount += parseInt(updateState.reportData[selectedAddressIndex][selectedBigCategory][k][listSubIndex].limitations.length);
        updateState.reportData[selectedAddressIndex][selectedBigCategory][k][listSubIndex].data.map((item, index)=>{
          if (selectedGoDetailItemIndex == index) {
            if( !changeJson[k][listSubIndex]['data'].hasOwnProperty(index) ) {
              changeJson[k][listSubIndex]['data'][index] = {};
            }
            changeJson[k][listSubIndex]['data'][index]['endDataSelected'] = {$set: selectedArray};
            // updateState.reportData[selectedAddressIndex][selectedBigCategory][k][listSubIndex].data[index].endDataSelected = selectedArray;
          }
          selectedCount += parseInt(selectedArray.length);
          selectedCount += parseInt(item.selected);
        });
        // console.log(selectedCount);
        if ( updateState.reportData[selectedAddressIndex][selectedBigCategory][k][listSubIndex].images.length == 0 ) {
          if ( selectedCount == 0 ) {
            // updateState.reportData[selectedAddressIndex][selectedBigCategory][k][listSubIndex]['state'] = '0';
            changeJson[k][listSubIndex]['state'] = {$set: '0'};
          } else if ( selectedCount == 1 ) {
            // updateState.reportData[selectedAddressIndex][selectedBigCategory][k][listSubIndex]['state'] = '1';
            changeJson[k][listSubIndex]['state'] = {$set: '1'};
          } else {
            // updateState.reportData[selectedAddressIndex][selectedBigCategory][k][listSubIndex]['state'] = '2';
            changeJson[k][listSubIndex]['state'] = {$set: '2'};
          }
        }
      }
      count++;
    }
    
    // return updateState;
    return update(state, {
      'reportData': {
        [selectedAddressIndex]: {
          [`${selectedBigCategory}`]: changeJson
        }
      }      
    });
  },
  [CREATE_DETAIL_ITEM]: (state, action) => {
    const{ selectedAddressIndex, listIndex, listSubIndex, newValue} = action.payload;    
    let updateState = Object.assign({}, state);
    let changeJson = {};

    const selectedBigCategory = updateState.reportData[selectedAddressIndex].selectedBigCategory;
    // console.log(selectedAddressIndex, selectedBigCategory);
    
    let count = 0; let selectedCount = 0;
    for(var k in updateState.reportData[selectedAddressIndex][selectedBigCategory]) {
      if ( count == listIndex) {        
        changeJson[k] = {};
        changeJson[k][listSubIndex] = {'endData':{
          $push:[{
            name: newValue
          }] 
        }};        
      }
      count++;
    }
    // console.log(changeJson);
    return update(state, {
      'reportData': {
        [selectedAddressIndex]: {
          [`${selectedBigCategory}`]: changeJson
        }
      }      
    });
  },

  [HIGHLIGHT_SELECT_END_ITEM]: (state, action) => {
    return state;
  },

  [SELECT_BIG_CATEGORY]: (state, action) => { //bigCategory
    const {selectedAddressIndex, bigCategory} = action.payload;

  	return update(state, {
      'reportData': {
        [selectedAddressIndex]: {
          selectedBigCategory: {$set: bigCategory}
        }
      }      
    });
  },

  [UPDATE_LOCATION]: (state, action) => {
  	const {selectedAddressIndex, listIndex, listSubIndex, location} = action.payload;
  	let updateState = Object.assign({}, state);
    let changeJson = {};
    const selectedBigCategory = updateState.reportData[selectedAddressIndex].selectedBigCategory;

  	let count = 0; let selectedCount = 0;
  	for(var k in updateState.reportData[selectedAddressIndex][selectedBigCategory]) {
  	  if ( count == listIndex) {
        if( !changeJson.hasOwnProperty(k) ) {
          changeJson[k] = {};
          changeJson[k][listSubIndex] = {};
        }
        changeJson[k][listSubIndex]['location'] = {$set: location};
	    // updateState.reportData[selectedAddressIndex][selectedBigCategory][k][listSubIndex].location = location;
  	  }
  	  count++;
  	}

    // return updateState;
    return update(state, {
      'reportData': {
        [selectedAddressIndex]: {
          [`${selectedBigCategory}`]: changeJson
        }
      }      
    });
  },
  [UPDATE_FLOOR]: (state, action) => {
    const {selectedAddressIndex, listIndex, listSubIndex, floor} = action.payload;
  	let updateState = Object.assign({}, state);
    let changeJson = {};
    const selectedBigCategory = updateState.reportData[selectedAddressIndex].selectedBigCategory;

  	let count = 0; let selectedCount = 0;
  	for(var k in updateState.reportData[selectedAddressIndex][selectedBigCategory]) {
  	  if ( count == listIndex) {
        if( !changeJson.hasOwnProperty(k) ) {
          changeJson[k] = {};
          changeJson[k][listSubIndex] = {};
        }
        changeJson[k][listSubIndex]['floor'] = {$set: floor};
	    // updateState.reportData[selectedAddressIndex][selectedBigCategory][k][listSubIndex].floor = floor;
  	  }
  	  count++;
  	}
    
    // return updateState;
    return update(state, {
      'reportData': {
        [selectedAddressIndex]: {
          [`${selectedBigCategory}`]: changeJson
        }
      }      
    });
  },
  [UPDATE_LIFE]: (state, action) => {
  	const {selectedAddressIndex, listIndex, listSubIndex, life} = action.payload;
  	let updateState = Object.assign({}, state);
    let changeJson = {};
    const selectedBigCategory = updateState.reportData[selectedAddressIndex].selectedBigCategory;

  	let count = 0; let selectedCount = 0;
  	for(var k in updateState.reportData[selectedAddressIndex][selectedBigCategory]) {
  	  if ( count == listIndex) {
        if( !changeJson.hasOwnProperty(k) ) {
          changeJson[k] = {};
          changeJson[k][listSubIndex] = {};
        }
        changeJson[k][listSubIndex]['life'] = {$set: life};
	     // updateState.reportData[selectedAddressIndex][selectedBigCategory][k][listSubIndex].life = life;
  	  }
  	  count++;
  	}
    
    // return updateState;
    return update(state, {
      'reportData': {
        [selectedAddressIndex]: {
          [`${selectedBigCategory}`]: changeJson
        }
      }      
    });
  },
  [UPDATE_COST]: (state, action) => {
  	const {selectedAddressIndex, listIndex, listSubIndex, cost} = action.payload;
  	let updateState = Object.assign({}, state);
    let changeJson = {};
    const selectedBigCategory = updateState.reportData[selectedAddressIndex].selectedBigCategory;

  	let count = 0; let selectedCount = 0;
  	for(var k in updateState.reportData[selectedAddressIndex][selectedBigCategory]) {
  	  if ( count == listIndex) {
        if( !changeJson.hasOwnProperty(k) ) {
          changeJson[k] = {};
          changeJson[k][listSubIndex] = {};
        }
        changeJson[k][listSubIndex]['cost'] = {$set: cost};
	     // updateState.reportData[selectedAddressIndex][selectedBigCategory][k][listSubIndex].cost = cost;
  	  }
  	  count++;
  	}

    // return updateState;
    return update(state, {
      'reportData': {
        [selectedAddressIndex]: {
          [`${selectedBigCategory}`]: changeJson
        }
      }      
    });
  },
  [SET_ALL_REPORT]: (state, action) => {
    const {sectionObj, length} = action.payload;
    let reportState = [];
    for(let k=0; k<length; k++) {
      reportState.push(sectionObj);
    }

    return {'reportData':reportState};
  },
  [DEL_IMAGE]: (state, action) => {
    const {selectedAddressIndex, listIndex, listSubIndex, imageIndex} = action.payload;
    let updateState = Object.assign({}, state);
    let changeJson = {};
    const selectedBigCategory = updateState.reportData[selectedAddressIndex].selectedBigCategory;

    let count = 0; let selectedCount = 0;
    for(var k in updateState.reportData[selectedAddressIndex][selectedBigCategory]) {
      if ( count == listIndex) {
        if( !changeJson.hasOwnProperty(k) ) {
          changeJson[k] = {};
          changeJson[k][listSubIndex] = {};
        }
        changeJson[k][listSubIndex]['images'] = {$splice: [[imageIndex, 1]]};
        // updateState.reportData[selectedAddressIndex][selectedBigCategory][k][listSubIndex].images.splice(imageIndex, 1);
        
        if ( (updateState.reportData[selectedAddressIndex][selectedBigCategory][k][listSubIndex].images.length -1 ) == 0 ) {
          updateState.reportData[selectedAddressIndex][selectedBigCategory][k][listSubIndex].data.map((item, index)=>{
            selectedCount += parseInt(item.endDataSelected.length);
            selectedCount += parseInt(item.selected);
          });

          if ( selectedCount == 0 ) {
            // updateState.reportData[selectedAddressIndex][selectedBigCategory][k][listSubIndex]['state'] = '0';
            changeJson[k][listSubIndex]['state'] = {$set: '0'};
          } else if ( selectedCount == 1 ) {
            // updateState.reportData[selectedAddressIndex][selectedBigCategory][k][listSubIndex]['state'] = '1';
            changeJson[k][listSubIndex]['state'] = {$set: '1'};
          } else {
            // updateState.reportData[selectedAddressIndex][selectedBigCategory][k][listSubIndex]['state'] = '2';
            changeJson[k][listSubIndex]['state'] = {$set: '2'};
          }          
        }
      }
      count++;
    }
    
    // return updateState;
    return update(state, {
      'reportData': {
        [selectedAddressIndex]: {
          [`${selectedBigCategory}`]: changeJson
        }
      }      
    });
  },
  [SET_HIGHLIGHT]: (state, action) => {
    const {selectedAddressIndex, listIndex, listSubIndex, highlight} = action.payload;
    let updateState = Object.assign({}, state);
    let changeJson = {};
    const selectedBigCategory = updateState.reportData[selectedAddressIndex].selectedBigCategory;

    let count = 0; let selectedCount = 0;
    for(var k in updateState.reportData[selectedAddressIndex][selectedBigCategory]) {
      if ( count == listIndex) {
        if( !changeJson.hasOwnProperty(k) ) {
          changeJson[k] = {};
          changeJson[k][listSubIndex] = {};
        }
        changeJson[k][listSubIndex]['highlight'] = {$set: highlight};
      }
      count++;
    }
    
    // return updateState;
    return update(state, {
      'reportData': {
        [selectedAddressIndex]: {
          [`${selectedBigCategory}`]: changeJson
        }
      }      
    });
  },
  [SAVE_IMAGE]: (state, action) => {
    const {selectedAddressIndex, listIndex, listSubIndex, imageIndex, res} = action.payload;
    let updateState = Object.assign({}, state);
    let changeJson = {};
    const selectedBigCategory = updateState.reportData[selectedAddressIndex].selectedBigCategory;

    let count = 0; let selectedCount = 0;
    for(var k in updateState.reportData[selectedAddressIndex][selectedBigCategory]) {
      if ( count == listIndex) {
        if( !changeJson.hasOwnProperty(k) ) {
          changeJson[k] = {};
          changeJson[k][listSubIndex] = {};
        }
        changeJson[k][listSubIndex]['images'] = {[imageIndex]: {drawImage: {$set: res}}};
        // updateState.reportData[selectedAddressIndex][selectedBigCategory][k][listSubIndex].images[imageIndex].drawImage = res;
      }
      count++;
    }
    
    // return updateState;
    return update(state, {
      'reportData': {
        [selectedAddressIndex]: {
          [`${selectedBigCategory}`]: changeJson
        }
      }      
    });
  },
  [ADD_IMAGE]: (state, action) => {
    const {selectedAddressIndex, listIndex, listSubIndex, res} = action.payload;
    let updateState = Object.assign({}, state);
    let changeJson = {};
    const selectedBigCategory = updateState.reportData[selectedAddressIndex].selectedBigCategory;

    let count = 0; let selectedCount = 0;
    for(var k in updateState.reportData[selectedAddressIndex][selectedBigCategory]) {
      if ( count == listIndex) {
        if( !changeJson.hasOwnProperty(k) ) {
          changeJson[k] = {};
          changeJson[k][listSubIndex] = {};
        }
        changeJson[k][listSubIndex]['images'] = {$push: [{
          'backImage': res,
          'drawImage': ''
        }]};
        changeJson[k][listSubIndex]['state'] = {$set: '3'};
        /*
        updateState.reportData[selectedAddressIndex][selectedBigCategory][k][listSubIndex].images.push({
          'backImage': res,
          'drawImage': ''
        });
        updateState.reportData[selectedAddressIndex][selectedBigCategory][k][listSubIndex]['state'] = '3';        
        */
      }
      count++;
    }
    
    // return updateState;
    return update(state, {
      'reportData': {
        [selectedAddressIndex]: {
          [`${selectedBigCategory}`]: changeJson
        }
      }      
    });
  },
  [SAVE_SECTION_NOTE]: (state, action) => {
    const {selectedAddressIndex, selectedBigCategory, sectionNote} = action.payload;
    let sectionNoteKey = `${selectedBigCategory}-notes`;
    return update(state, {
      'reportData': {
        [selectedAddressIndex]: {
          [sectionNoteKey]: {$set: sectionNote}
        }
      }      
    });
    /*
    return update(state, {
      [sectionNoteKey]: {$set: sectionNote}
    });
    */
  },
  [DEL_SECTION_NOTE]: (state, action) => {
    const {selectedAddressIndex, selectedBigCategory} = action.payload;
    let sectionNoteKey = `${selectedBigCategory}-notes`;
    /*
    return update(state, {
      [sectionNoteKey]: {$set: ''}
    });
    */
    return update(state, {
      'reportData': {
        [selectedAddressIndex]: {
          [sectionNoteKey]: {$set: ''}
        }
      }      
    });
  },
  [SAVE_CATEGORY_NOTE]: (state, action) => {
    const {selectedAddressIndex, listIndex, listSubIndex, categoryNote, selectedBigCategory} = action.payload;
    let updateState = Object.assign({}, state);
    let changeJson = {};

    let count = 0; let selectedCount = 0;
    for(var k in updateState.reportData[selectedAddressIndex][selectedBigCategory]) {
      if ( count == listIndex) {
        if( !changeJson.hasOwnProperty(k) ) {
          changeJson[k] = {};
          changeJson[k][listSubIndex] = {};
        }
        changeJson[k][listSubIndex]['notes'] = {$set: categoryNote};
        // updateState.reportData[selectedAddressIndex][selectedBigCategory][k][listSubIndex].notes = categoryNote;
      }
      count++;
    }

    // return updateState;
    return update(state, {
      'reportData': {
        [selectedAddressIndex]: {
          [`${selectedBigCategory}`]: changeJson
        }
      }      
    });
  },
  [DEL_CATEGORY_NOTE]: (state, action) => {
    const {selectedAddressIndex, listIndex, listSubIndex, selectedBigCategory} = action.payload;
    let updateState = Object.assign({}, state);
    let changeJson = {};

    let count = 0; let selectedCount = 0;
    for(var k in updateState.reportData[selectedAddressIndex][selectedBigCategory]) {
      if ( count == listIndex) {
        if( !changeJson.hasOwnProperty(k) ) {
          changeJson[k] = {};
          changeJson[k][listSubIndex] = {};
        }
        changeJson[k][listSubIndex]['notes'] = {$set: ''};
        // updateState.reportData[selectedAddressIndex][selectedBigCategory][k][listSubIndex].notes = '';
      }
      count++;
    }

    // return updateState;
    return update(state, {
      'reportData': {
        [selectedAddressIndex]: {
          [`${selectedBigCategory}`]: changeJson
        }
      }      
    });
  },
  [SET_LIMITATION]: (state, action) => {
    const {selectedAddressIndex, listIndex, listSubIndex, selectedBigCategory, limitations} = action.payload;
    let updateState = Object.assign({}, state);
    let changeJson = {};

    let count = 0; let selectedCount = 0;
    for(var k in updateState.reportData[selectedAddressIndex][selectedBigCategory]) {
      if ( count == listIndex) {
        if( !changeJson.hasOwnProperty(k) ) {
          changeJson[k] = {};
          changeJson[k][listSubIndex] = {};
        }
        changeJson[k][listSubIndex]['limitations'] = {$set: limitations};

        if ( (updateState.reportData[selectedAddressIndex][selectedBigCategory][k][listSubIndex].images.length) == 0 ) {
          updateState.reportData[selectedAddressIndex][selectedBigCategory][k][listSubIndex].data.map((item, index)=>{
            selectedCount += parseInt(item.endDataSelected.length);
            selectedCount += parseInt(item.selected);
          });
          selectedCount += parseInt(limitations.length);

          if ( selectedCount == 0 ) {
            // updateState.reportData[selectedAddressIndex][selectedBigCategory][k][listSubIndex]['state'] = '0';
            changeJson[k][listSubIndex]['state'] = {$set: '0'};
          } else if ( selectedCount == 1 ) {
            // updateState.reportData[selectedAddressIndex][selectedBigCategory][k][listSubIndex]['state'] = '1';
            changeJson[k][listSubIndex]['state'] = {$set: '1'};
          } else {
            // updateState.reportData[selectedAddressIndex][selectedBigCategory][k][listSubIndex]['state'] = '2';
            changeJson[k][listSubIndex]['state'] = {$set: '2'};
          }          
        }

      }
      count++;
    }

    // return updateState;
    return update(state, {
      'reportData': {
        [selectedAddressIndex]: {
          [`${selectedBigCategory}`]: changeJson
        }
      }      
    });
  }
}, initialState);
