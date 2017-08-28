import React, {Component} from 'react';
import ReactNative from 'react-native';
import {
  TextBtn,
  TextWithLetterSpacing
} from '../components/Atoms';
import {
  ItemListsWithTag
} from '../components/Molecule';

const {
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableHighlight,
  Linking,
  TextInput
} = ReactNative;

/**
 * Container component for Left of Report page
 */
class InnerReportLeft extends Component {

  /**
    * ReportLeft Container Constructor
    * @param {props} props from parent component
    * @return {void}
    */
  constructor(props){
    super(props);
    this.state={
      'Roofing': {
        'Roofing': [
          {
            name: 'Sloped(roof)',
            state: "3",
            data:[
              {
                name: 'Asphalt shingles',
                selected: '0'
              },
              {
                name: 'Wood shingles / shakes',
                selected: '0'
              }
            ],
            endData: [
              {name: 'In good shape', selected: 0},
              {name: 'In relatively good shape', selected: 1},
              {name: 'Initial signs of wear beginning to show', selected: 0}
            ]
          },

          {
            name: 'Porch(roof)',
            state: "2",
            data:[
              {
                name: 'Slate',
                selected: '0'
              },
              {
                name: 'Metal',
                selected: '0'
              }
            ],
            endData: [
              {name: 'Wind', selected: 0},
              {name: 'Poor', selected: 0},
              {name: 'Repairs', selected: 0}
            ]
          },

          {
            name: 'Bay',
            state: "0",
            data:[
              {
                name: 'Slate',
                selected: '0'
              },
              {
                name: 'Metal',
                selected: '0'
              }
            ],
            endData: [
              {name: 'Wind', selected: 0},
              {name: 'Poor', selected: 1},
              {name: 'Repairs', selected: 0}
            ]
          }


        ],
        'Flashings': [
          {
            name: 'Valley(flashing)',
            state: "0",
            data:[
              {
                name: 'Metal open',
                selected: '0'
              },
              {
                name: 'Asphalt strip',
                selected: '0'
              }
            ],
            endData: [
              {name: 'Minor cracking', selected: 0},
              {name: 'Poor installation', selected: 1},
              {name: 'Repairs', selected: 0}
            ]
          }
        ],
        'Chimneys': [
          {
            name: 'Chimney',
            state: "0",
            data:[
              {
                name: 'Metal open',
                selected: '0'
              },
              {
                name: 'Asphalt strip',
                selected: '0'
              }
            ],
            endData: [
              {name: 'Minor cracking', selected: 0},
              {name: 'Poor installation', selected: 1},
              {name: 'Repairs', selected: 0}
            ]
          }
        ]
      }
    }
  }

  /**
   * Render ReportLeft page
   * @return {jsxresult} result in jsx format
   */
  render() {
    let leftCnt = [];
    let itemListData = null;

    let count = 0;
    for(var key in this.state.Roofing) {
      itemListData = this.state.Roofing[key].map((item,index)=>{
        //itemListData = item.map((obj, key)=>{
          return {'label': item.name, value: index, radioBtnState: item.state}; //0: inital gray, 1: only blue, 2: checked blue, 3: checked blue with camera icon
        //});        
      });

      leftCnt[count] = {
        listTag: key,
        listData: itemListData
      };        
      count++;
    }

    return (
      <View style={{flex: 1}}>
        <View>
          <TextBtn
            imgSrc={require('../assets/imgs/BTN_Blue_Large.png')}
            style={{height: 40, resizeMode: 'stretch', margin: 10}}
          >
            Overview Notes
          </TextBtn>
          <ItemListsWithTag itemInfo={leftCnt} handleChangeItem = {()=>{}} />
        </View>
      </View>
    );
  }
}

let styles = StyleSheet.create({
  
});

export default InnerReportLeft;
