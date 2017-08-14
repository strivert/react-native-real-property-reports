import React, {Component} from 'react';
import ReactNative from 'react-native';
import {
  TextBtn,
  TextWithLetterSpacing
} from '../components/Atoms';
import {
  ItemList
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
            state: "0",
            data:[
              {
                name: 'Asphalt shingles',
                selected: '0',
                selectedEndDataIndex:[
                  0,
                  1
                ]
              },
              {
                name: 'Wood shingles / shakes',
                selected: '0',
                selectedEndDataIndex:[
                  1
                ]
              }
            ],
            endData: [
              {name: 'In good shape'},
              {name: 'In relatively good shape'},
              {name: 'Initial signs of wear beginning to show'}
            ]
          },

          {
            name: 'Porch(roof)',
            state: "0",
            data:[
              {
                name: 'Slate',
                selected: '0',
                selectedEndDataIndex:[
                  0,
                  1
                ]
              },
              {
                name: 'Metal',
                selected: '0',
                selectedEndDataIndex:[
                  1
                ]
              }
            ],
            endData: [
              {name: 'Wind'},
              {name: 'Poor'},
              {name: 'Repairs'}
            ]
          }


        ]/*,
        'Flashings': [
          {
            name: 'Valley(flashing)',
            state: "0",
            data:[
              {
                name: 'Metal open',
                selected: '0',
                selectedEndDataIndex:[
                  0,
                  1
                ]
              },
              {
                name: 'Asphalt strip',
                selected: '0',
                selectedEndDataIndex:[
                  1
                ]
              }
            ],
            endData: [
              {name: 'Minor cracking'},
              {name: 'Poor installation'},
              {name: 'Repairs'}
            ]
          }
        ]*/
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

      leftCnt[count] = 
        (
          <View>
            <Text style={{fontSize: 20, fontWeight: 'bold', color: 'black', marginLeft: 10}}>{key}</Text>
            <ItemList items={itemListData} handleChangeItem = {()=>{}} />
          </View>
        )
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
          {leftCnt.map((item,i)=>{
            return <View key={`rep-group-${i}`}>{item}</View>;
          })}
        </View>
      </View>
    );
  }
}

let styles = StyleSheet.create({
  
});

export default InnerReportLeft;
