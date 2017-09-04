import {createAction, handleActions} from 'redux-actions';
import update from 'react-addons-update';

// action type
const CREATE_CATEGORY = 'report/CREATE_CATEGORY';
const REMOVE_CATEGORY = 'report/REMOVE_CATEGORY';
const HIGHLIGHT_SELECT_CATEGORY = 'report/HIGHLIGHT_SELECT_CATEGORY';

const CREATE_ITEM = 'report/CREATE_ITEM';
const UPDATE_ITEM = 'report/UPDATE_ITEM';
const SELECT_ITEM = 'report/SELECT_ITEM';	

const CREATE_END_ITEM = 'report/CREATE_END_ITEM';
const UPDATE_END_ITEM = 'report/UPDATE_END_ITEM';
const HIGHLIGHT_SELECT_END_ITEM = 'report/HIGHLIGHT_SELECT_END_ITEM';

const SELECT_BIG_CATEGORY = 'report/SELECT_BIG_CATEGORY';

const UPDATE_LOCATION = 'report/UPDATE_LOCATION';
const UPDATE_FLOOR = 'report/UPDATE_FLOOR';
const UPDATE_LIFE = 'report/UPDATE_LIFE';
const UPDATE_COST = 'report/UPDATE_COST';
// action creators
export const createCategory = createAction(CREATE_CATEGORY); 
export const removeCategory = createAction(REMOVE_CATEGORY); // 
export const selectItem = createAction(SELECT_ITEM);  // listIndex, listSubIndex, selectedArray

export const selectBigCategory = createAction(SELECT_BIG_CATEGORY); // bigCategory

export const updateLocation = createAction(UPDATE_LOCATION); // listIndex, listSubIndex, location
export const updateFloor = createAction(UPDATE_FLOOR); // listIndex, listSubIndex, floor
export const updateLife = createAction(UPDATE_LIFE); // listIndex, listSubIndex, life
export const updateCost = createAction(UPDATE_COST); // listIndex, listSubIndex, cost

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
            endDataSelected: []
          },          
          {
            name: 'Wood shingles / shakes',
            selected: '0',
            endDataSelected: []
          },          
          {
            name: 'Concrete / Clay tiles',
            selected: '0',
            endDataSelected: []
          },          
          {
            name: 'Slate',
            selected: '0',
            endDataSelected: []
          },          
          {
            name: 'Plastic / Fiberglass',
            selected: '0',
            endDataSelected: []
          },          
          {
            name: 'Metal',
            selected: '0',
            endDataSelected: []
          },          
          {
            name: 'One layer noted',
            selected: '0',
            endDataSelected: []
          },          
          {
            name: 'Two plus layers noted',
            selected: '0',
            endDataSelected: []
          },          
          {
            name: 'Vendor advises of a recent upgrade',
            selected: '0',
            endDataSelected: []
          },          
          {
            name: 'Low slope',
            selected: '0',
            endDataSelected: []
          }
        ],
        endData: [
          {name: 'In good shape'},
          {name: 'In relatively good shape'},
          {name: 'Initial signs of wear beginning to show'}
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
            endDataSelected: []
          },
          {
            name: 'Roll roofing rubberized membrane',
            selected: '0',
            endDataSelected: []
          },
          {
            name: 'Single ply',
            selected: '0',
            endDataSelected: []
          },
          {
            name: 'Vendor advises of a recent upgrade',
            selected: '0',
            endDataSelected: []
          },
          {
            name: 'Flat roofing materials should be used on a Low slope',
            selected: '0',
            endDataSelected: []
          },
          {
            name: 'Low slope: Shingle use inappropriate in this application',
            selected: '0',
            endDataSelected: []
          }
        ],
        endData: [
          {name: 'In good shape'},
          {name: 'In relatively good shape'},
          {name: 'Nearing the end of natural life'}
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
            endDataSelected: []
          },
          {
            name: 'Wood shingles / shakes',
            selected: '0',
            endDataSelected: []
          },
          {
            name: 'Concrete / Clay tiles',
            selected: '0',
            endDataSelected: []
          },
          {
            name: 'Slate',
            selected: '0',
            endDataSelected: []
          },
          {
            name: 'Plastic / Fiberglass',
            selected: '0',
            endDataSelected: []
          },
          {
            name: 'Metal',
            selected: '0',
            endDataSelected: []
          },
          {
            name: 'Copper',
            selected: '0',
            endDataSelected: []
          }
        ],
        endData: [
          {name: 'Wind'},
          {name: 'Poor'},
          {name: 'Repairs'}
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
            endDataSelected: []
          },
          {
            name: 'Wood shingles / shakes',
            selected: '0',
            endDataSelected: []
          },
          {
            name: 'Concrete / Clay tiles',
            selected: '0',
            endDataSelected: []
          },
          {
            name: 'Slate',
            selected: '0',
            endDataSelected: []
          },
          {
            name: 'Plastic / Fiberglass',
            selected: '0',
            endDataSelected: []
          },
          {
            name: 'Metal',
            selected: '0',
            endDataSelected: []
          },
          {
            name: 'Copper',
            selected: '0',
            endDataSelected: []
          }
        ],
        endData: [
          {name: 'Wind'},
          {name: 'Poor'},
          {name: 'Repairs'}
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
            endDataSelected: []
          },
          {
            name: 'Wood shingles / shakes',
            selected: '0',
            endDataSelected: []
          },
          {
            name: 'Concrete / Clay tiles',
            selected: '0',
            endDataSelected: []
          },
          {
            name: 'Slate',
            selected: '0',
            endDataSelected: []
          },
          {
            name: 'Plastic / Fiberglass',
            selected: '0',
            endDataSelected: []
          },
          {
            name: 'Metal',
            selected: '0',
            endDataSelected: []
          },
          {
            name: 'Copper',
            selected: '0',
            endDataSelected: []
          }
        ],
        endData: [
          {name: 'Wind'},
          {name: 'Poor'},
          {name: 'Repairs'}
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
            endDataSelected: []
          },
          {
            name: 'Asphalt strip open valley',
            selected: '0',
            endDataSelected: []
          },
          {
            name: 'Closed valley',
            selected: '0',
            endDataSelected: []
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
        name: 'Hips & Ridges(flashing)',
        state: "0",
        data:[
          {
            name: 'Typical',
            selected: '0',
            endDataSelected: []
          },
          {
            name: 'Elevated ridge vent',
            selected: '0',
            endDataSelected: []
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
        name: 'Wall, Flat, Gutter(flashing)',
        state: "0",
        data:[
          {
            name: 'Gutter from sloped roof',
            selected: '0',
            endDataSelected: []
          },
          {
            name: 'Facia from sloped roof',
            selected: '0',
            endDataSelected: []
          },
          {
            name: 'Flat roof from sloped roof',
            selected: '0',
            endDataSelected: []
          },
          {
            name: 'Wall flashing to a sloped roof',
            selected: '0',
            endDataSelected: []
          },
          {
            name: 'Bay window underside',
            selected: '0',
            endDataSelected: []
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
        name: 'Parapet/Cap(flashing)',
        state: "0",
        data:[
          {
            name: 'Metal',
            selected: '0',
            endDataSelected: []
          },
          {
            name: 'Asphalt',
            selected: '0',
            endDataSelected: []
          },
          {
            name: 'Tar',
            selected: '0',
            endDataSelected: []
          },
          {
            name: 'Pre-cast concrete',
            selected: '0',
            endDataSelected: []
          },
          {
            name: 'Natural stone',
            selected: '0',
            endDataSelected: []
          },
          {
            name: 'Masonry',
            selected: '0',
            endDataSelected: []
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
            endDataSelected: []
          },
          {
            name: 'Wood shingle siding',
            selected: '0',
            endDataSelected: []
          },
          {
            name: 'Metal siding',
            selected: '0',
            endDataSelected: []
          },
          {
            name: 'Vinyl siding',
            selected: '0',
            endDataSelected: []
          },
          {
            name: 'Stucco siding',
            selected: '0',
            endDataSelected: []
          },
          {
            name: 'Asphalt shingle siding',
            selected: '0',
            endDataSelected: []
          },
          {
            name: 'Insulbrick / asphalt siding',
            selected: '0',
            endDataSelected: []
          },
          {
            name: 'Asbestos tile siding',
            selected: '0',
            endDataSelected: []
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
            endDataSelected: []
          },
          {
            name: 'Turbine roof vent',
            selected: '0',
            endDataSelected: []
          },
          {
            name: 'Ridge vent',
            selected: '0',
            endDataSelected: []
          },
          {
            name: 'Plumbing waste vant',
            selected: '0',
            endDataSelected: []
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
            endDataSelected: []
          },
          {
            name: 'High neck curb mount',
            selected: '0',
            endDataSelected: []
          },
          {
            name: 'Multi-Paneled vault',
            selected: '0',
            endDataSelected: []
          },
          {
            name: 'Solarium panels',
            selected: '0',
            endDataSelected: []
          },
          {
            name: 'Roof access hatch',
            selected: '0',
            endDataSelected: []
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
            endDataSelected: []
          },
          {
            name: 'Chinmney saddle',
            selected: '0',
            endDataSelected: []
          },
          {
            name: 'Metal',
            selected: '0',
            endDataSelected: []
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
            endDataSelected: []
          },
          {
            name: 'Chimney saddle',
            selected: '0',
            endDataSelected: []
          },
          {
            name: 'Metal',
            selected: '0',
            endDataSelected: []
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
            endDataSelected: []
          },
          {
            name: 'Above grade gutter discharge',
            selected: '0',
            endDataSelected: []
          },
          {
            name: 'Alumnium',
            selected: '0',
            endDataSelected: []
          },
          {
            name: 'Galvanized Steel',
            selected: '0',
            endDataSelected: []
          },
          {
            name: 'Copper',
            selected: '0',
            endDataSelected: []
          },
          {
            name: 'Plastic',
            selected: '0',
            endDataSelected: []
          },
          {
            name: 'Built-in gutter system',
            selected: '0',
            endDataSelected: []
          },
          {
            name: 'Flat roof with scuppers',
            selected: '0',
            endDataSelected: []
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
            endDataSelected: []
          },
          {
            name: 'Aluminum',
            selected: '0',
            endDataSelected: []
          },
          {
            name: 'Galvanized steel',
            selected: '0',
            endDataSelected: []
          },
          {
            name: 'open Facia',
            selected: '0',
            endDataSelected: []
          },
          {
            name: 'open Soffit',
            selected: '0',
            endDataSelected: []
          },
          {
            name: 'Trim',
            selected: '0',
            endDataSelected: []
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
            name: 'Below grade gutter',
            selected: '0',
            endDataSelected: []
          },
          {
            name: 'Above grade gutter discharge',
            selected: '0',
            endDataSelected: []
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
            name: 'Wood',
            selected: '0',
            endDataSelected: []
          },
          {
            name: 'Aluminum',
            selected: '0',
            endDataSelected: []
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
            name: 'Wood',
            selected: '0',
            endDataSelected: []
          },
          {
            name: 'Aluminum',
            selected: '0',
            endDataSelected: []
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
            name: 'Below grade gutter',
            selected: '0',
            endDataSelected: []
          },
          {
            name: 'Above grade gutter discharge',
            selected: '0',
            endDataSelected: []
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
            name: 'Wood',
            selected: '0',
            endDataSelected: []
          },
          {
            name: 'Aluminum',
            selected: '0',
            endDataSelected: []
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
            name: 'Wood',
            selected: '0',
            endDataSelected: []
          },
          {
            name: 'Aluminum',
            selected: '0',
            endDataSelected: []
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
            name: 'Below grade gutter',
            selected: '0',
            endDataSelected: []
          },
          {
            name: 'Above grade gutter discharge',
            selected: '0',
            endDataSelected: []
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
            name: 'Wood',
            selected: '0',
            endDataSelected: []
          },
          {
            name: 'Aluminum',
            selected: '0',
            endDataSelected: []
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
            name: 'Wood',
            selected: '0',
            endDataSelected: []
          },
          {
            name: 'Aluminum',
            selected: '0',
            endDataSelected: []
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
            name: 'Wood',
            selected: '0',
            endDataSelected: []
          },
          {
            name: 'Aluminum',
            selected: '0',
            endDataSelected: []
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
            name: 'Wood',
            selected: '0',
            endDataSelected: []
          },
          {
            name: 'Aluminum',
            selected: '0',
            endDataSelected: []
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
            name: 'Below grade gutter',
            selected: '0',
            endDataSelected: []
          },
          {
            name: 'Above grade gutter discharge',
            selected: '0',
            endDataSelected: []
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
            endDataSelected: []
          },
          {
            name: 'Aluminum',
            selected: '0',
            endDataSelected: []
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
            name: 'Wood',
            selected: '0',
            endDataSelected: []
          },
          {
            name: 'Aluminum',
            selected: '0',
            endDataSelected: []
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
            name: 'Wood',
            selected: '0',
            endDataSelected: []
          },
          {
            name: 'Aluminum',
            selected: '0',
            endDataSelected: []
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
            endDataSelected: []
          },
          {
            name: 'Slopes away from structure',
            selected: '0',
            endDataSelected: []
          },
          {
            name: 'Slopes towards structure',
            selected: '0',
            endDataSelected: []
          },
          {
            name: 'Ravine with a rear walk-out',
            selected: '0',
            endDataSelected: []
          },
          {
            name: 'Reverse ravine sloping towards front',
            selected: '0',
            endDataSelected: []
          },
          {
            name: 'Inaccessible due to snow',
            selected: '0',
            endDataSelected: []
          },
          {
            name: 'Incomplete',
            selected: '0',
            endDataSelected: []
          },
          {
            name: 'Sprinkler system',
            selected: '0',
            endDataSelected: []
          },
          {
            name: 'Rear ravine with level / flat frontage',
            selected: '0',
            endDataSelected: []
          },
          {
            name: 'Trees / Foilage',
            selected: '0',
            endDataSelected: []
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
            endDataSelected: []
          },
          {
            name: 'Slopes away from structure',
            selected: '0',
            endDataSelected: []
          },
          {
            name: 'Slopes towards structure',
            selected: '0',
            endDataSelected: []
          },
          {
            name: 'Ravine with a rear walk-out',
            selected: '0',
            endDataSelected: []
          },
          {
            name: 'Reverse ravine sloping towards front',
            selected: '0',
            endDataSelected: []
          },
          {
            name: 'Wood retainer',
            selected: '0',
            endDataSelected: []
          },
          {
            name: 'Metal retainer',
            selected: '0',
            endDataSelected: []
          },
          {
            name: 'Stone / Masonry retainer',
            selected: '0',
            endDataSelected: []
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
            endDataSelected: []
          },
          {
            name: 'Metal',
            selected: '0',
            endDataSelected: []
          },
          {
            name: 'Plastic',
            selected: '0',
            endDataSelected: []
          },
          {
            name: 'Stone',
            selected: '0',
            endDataSelected: []
          },
          {
            name: 'Masonry',
            selected: '0',
            endDataSelected: []
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
            endDataSelected: []
          },
          {
            name: 'In-ground concrete',
            selected: '0',
            endDataSelected: []
          },
          {
            name: 'In-ground liner',
            selected: '0',
            endDataSelected: []
          },
          {
            name: 'In-ground pre-manufactured',
            selected: '0',
            endDataSelected: []
          },
          {
            name: 'Above ground',
            selected: '0',
            endDataSelected: []
          },
          {
            name: 'Above ground permanant(fixed)',
            selected: '0',
            endDataSelected: []
          },
          {
            name: 'Above ground pre-manufactured',
            selected: '0',
            endDataSelected: []
          },
          {
            name: 'Fountain / Pond',
            selected: '0',
            endDataSelected: []
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
            endDataSelected: []
          },
          {
            name: 'Metal',
            selected: '0',
            endDataSelected: []
          },
          {
            name: 'Glass',
            selected: '0',
            endDataSelected: []
          },
          {
            name: 'Open frame',
            selected: '0',
            endDataSelected: []
          },
          {
            name: 'Closed frame',
            selected: '0',
            endDataSelected: []
          },
          {
            name: 'Attached to main structure',
            selected: '0',
            endDataSelected: []
          },
          {
            name: 'Stand Alone',
            selected: '0',
            endDataSelected: []
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
    'Gutters': [
      {
        name: 'Gutters',
        state: "0",
        data:[
          {
            name: 'Below grade gutter',
            selected: '0',
            endDataSelected: []
          },
          {
            name: 'Above grade gutter discharge',
            selected: '0',
            endDataSelected: []
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
            endDataSelected: []
          },
          {
            name: 'Aluminum',
            selected: '0',
            endDataSelected: []
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
            endDataSelected: []
          },
          {
            name: 'Above grade gutter discharge',
            selected: '0',
            endDataSelected: []
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
            endDataSelected: []
          },
          {
            name: 'Aluminum',
            selected: '0',
            endDataSelected: []
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
    'Gutters': [
      {
        name: 'Gutters',
        state: "0",
        data:[
          {
            name: 'Below grade gutter',
            selected: '0',
            endDataSelected: []
          },
          {
            name: 'Above grade gutter discharge',
            selected: '0',
            endDataSelected: []
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
            endDataSelected: []
          },
          {
            name: 'Aluminum',
            selected: '0',
            endDataSelected: []
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
            endDataSelected: []
          },
          {
            name: 'Above grade gutter discharge',
            selected: '0',
            endDataSelected: []
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
            endDataSelected: []
          },
          {
            name: 'Aluminum',
            selected: '0',
            endDataSelected: []
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
    'Gutters': [
      {
        name: 'Gutters',
        state: "0",
        data:[
          {
            name: 'Below grade gutter',
            selected: '0',
            endDataSelected: []
          },
          {
            name: 'Above grade gutter discharge',
            selected: '0',
            endDataSelected: []
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
            endDataSelected: []
          },
          {
            name: 'Aluminum',
            selected: '0',
            endDataSelected: []
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
            endDataSelected: []
          },
          {
            name: 'Above grade gutter discharge',
            selected: '0',
            endDataSelected: []
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
            endDataSelected: []
          },
          {
            name: 'Aluminum',
            selected: '0',
            endDataSelected: []
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
            endDataSelected: []
          },
          {
            name: 'Above grade gutter discharge',
            selected: '0',
            endDataSelected: []
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
            endDataSelected: []
          },
          {
            name: 'Aluminum',
            selected: '0',
            endDataSelected: []
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
            endDataSelected: []
          },
          {
            name: 'Above grade gutter discharge',
            selected: '0',
            endDataSelected: []
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
            endDataSelected: []
          },
          {
            name: 'Aluminum',
            selected: '0',
            endDataSelected: []
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
            endDataSelected: []
          },
          {
            name: 'Above grade gutter discharge',
            selected: '0',
            endDataSelected: []
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
            endDataSelected: []
          },
          {
            name: 'Aluminum',
            selected: '0',
            endDataSelected: []
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
            endDataSelected: []
          },
          {
            name: 'Above grade gutter discharge',
            selected: '0',
            endDataSelected: []
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
            endDataSelected: []
          },
          {
            name: 'Aluminum',
            selected: '0',
            endDataSelected: []
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
            endDataSelected: []
          },
          {
            name: 'Above grade gutter discharge',
            selected: '0',
            endDataSelected: []
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
            endDataSelected: []
          },
          {
            name: 'Aluminum',
            selected: '0',
            endDataSelected: []
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
            endDataSelected: []
          },
          {
            name: 'Above grade gutter discharge',
            selected: '0',
            endDataSelected: []
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
            endDataSelected: []
          },
          {
            name: 'Aluminum',
            selected: '0',
            endDataSelected: []
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

// reducers
export default handleActions({
  [CREATE_CATEGORY]: (state, action) => {
    return state;
  },

  [REMOVE_CATEGORY]: (state, action) => {
    return state;
  },

  [HIGHLIGHT_SELECT_CATEGORY]: (state, action) => {
    return state;
  },

  [CREATE_ITEM]: (state, action) => {
    return state;
  },

  [UPDATE_ITEM]: (state, action) => {
    return state;
  },

  [SELECT_ITEM]: (state, action) => {	// listIndex, listSubIndex, selectedArray
  	const {listIndex, listSubIndex, selectedArray} = action.payload;
  	let updateState = Object.assign({}, state);

  	let count = 0; let selectedCount = 0;
  	for(var k in updateState[state.selectedBigCategory]) {
  	  if ( count === listIndex) {
	    updateState[state.selectedBigCategory][k][listSubIndex].data.map((item, index)=>{
	      if(selectedArray.includes(index)){
	      	selectedCount++;
	      	updateState[state.selectedBigCategory][k][listSubIndex].data[index].selected = '1';
	      } else {
	      	updateState[state.selectedBigCategory][k][listSubIndex].data[index].selected = '0';
	      }
		});
	    
		if ( selectedCount === 0 ) {
		  updateState[state.selectedBigCategory][k][listSubIndex]['state'] = '0';
		} else if ( selectedCount === 1 ) {
		  updateState[state.selectedBigCategory][k][listSubIndex]['state'] = '1';
		} else {
		  updateState[state.selectedBigCategory][k][listSubIndex]['state'] = '2';
		}

  	  }
  	  count++;
  	}
    
    return updateState;
  },

  [CREATE_END_ITEM]: (state, action) => {
    return state;
  },

  [UPDATE_END_ITEM]: (state, action) => {
    return state;
  },

  [HIGHLIGHT_SELECT_END_ITEM]: (state, action) => {
    return state;
  },

  [SELECT_BIG_CATEGORY]: (state, action) => { //bigCategory
  	return update(state, {
      selectedBigCategory: {$set: action.payload}
    });
  },

  [UPDATE_LOCATION]: (state, action) => {
  	const {listIndex, listSubIndex, location} = action.payload;
  	let updateState = Object.assign({}, state);

  	let count = 0; let selectedCount = 0;
  	for(var k in updateState[state.selectedBigCategory]) {
  	  if ( count === listIndex) {
	    updateState[state.selectedBigCategory][k][listSubIndex].location = location;
  	  }
  	  count++;
  	}

    return updateState;
  },
  [UPDATE_FLOOR]: (state, action) => {
    const {listIndex, listSubIndex, floor} = action.payload;
  	let updateState = Object.assign({}, state);

  	let count = 0; let selectedCount = 0;
  	for(var k in updateState[state.selectedBigCategory]) {
  	  if ( count === listIndex) {
	    updateState[state.selectedBigCategory][k][listSubIndex].floor = floor;
  	  }
  	  count++;
  	}
    
    return updateState;
  },
  [UPDATE_LIFE]: (state, action) => {
  	const {listIndex, listSubIndex, life} = action.payload;
  	let updateState = Object.assign({}, state);

  	let count = 0; let selectedCount = 0;
  	for(var k in updateState[state.selectedBigCategory]) {
  	  if ( count === listIndex) {
	    updateState[state.selectedBigCategory][k][listSubIndex].life = life;
  	  }
  	  count++;
  	}
    
    return updateState;
  },
  [UPDATE_COST]: (state, action) => {
  	const {listIndex, listSubIndex, cost} = action.payload;
  	let updateState = Object.assign({}, state);

  	let count = 0; let selectedCount = 0;
  	for(var k in updateState[state.selectedBigCategory]) {
  	  if ( count === listIndex) {
	    updateState[state.selectedBigCategory][k][listSubIndex].cost = cost;
  	  }
  	  count++;
  	}

    return updateState;
  }
}, initialState);
