import React, {Component} from 'react';
import ReactNative from 'react-native';
import {
  InnerPreviewLeft,
  InnerPreviewRight
} from './';

const {
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableHighlight,
  Linking
} = ReactNative;

/**
 * Container component for InnerPreview page
 */
class InnerPreview extends Component {

  /**
    * InnerPreview Container Constructor
    * @param {props} props from parent component
    * @return {void}
    */
  constructor(props){
    super(props);
  }

  /**
   * Render InnerPreview page
   * @return {jsxresult} result in jsx format
   */
  render() {
    const {reportAddressData, selectedBigCategory, categories, addressName} = this.props;

    let previewData = {};
    // const 
    categories.map((item, index)=>{
      if(item == selectedBigCategory || selectedBigCategory =='') {
        previewData[item] = {};
        let reportData = reportAddressData[item];

        let endData = [];
        let data = [];

        let location = '';
        let floor = '';
        let life = '';
        let cost = '';
        let notes = '';
        let categoryName = '';
        let limitations = '';

        let images = [];

        let count = 0;
        for (var k in reportData) {
          for(var listSubIndex in reportData[k]) {          
            let itemStr = '';
            categoryName = reportData[k][listSubIndex].name;

            previewData[item][categoryName] = {};

            data = reportData[k][listSubIndex].data;
            endData = reportData[k][listSubIndex].endData;

            location = reportData[k][listSubIndex].location;
            floor = reportData[k][listSubIndex].floor;
            life = reportData[k][listSubIndex].life;
            cost = reportData[k][listSubIndex].cost;

            notes = reportData[k][listSubIndex].notes;

            images = reportData[k][listSubIndex].images;
            limitations = reportData[k][listSubIndex].limitations;

            let dataList = [];
            data.map((item, index)=>{
              itemStr += (item.selected !='0')?`${item.name}, `: '';

              endData.map((endItem, endIndex)=>{
                if (item.endDataSelected.indexOf(endIndex) !== -1) {
                  itemStr += `${endItem.name}, `;
                }                
              });
            });
            

            itemStr += (floor!='')?`Level: ${floor}, `:'';
            itemStr += (location!='')?`Location: ${location}, `:'';
            itemStr += (floor!='')?`Life expectancy: ${life} years, `:'';
            itemStr += (cost!='')?`Estimated cost: ${cost}, `:'';

            itemStr += (limitations.length > 0)?`Limitations: `:'';
            limitations.map((item, index)=>{
              itemStr += `${item},`;
            });

            previewData[item][categoryName]['desc'] = itemStr;
            previewData[item][categoryName]['images'] = images;

            if (itemStr=='' && images.length == 0) {
              delete previewData[item][categoryName];
            }
          }
        }

      }
    });
    // console.log(previewData);
    return (
      <View style={{flex:1, flexDirection: 'row' }}>
        <View style={{width: 360}}>
          <InnerPreviewLeft />
        </View>
        <View style={{flex: 1}}>
          <InnerPreviewRight
            previewData={previewData}
            addressName={addressName}
          />
        </View>
      </View>
    );
  }
}

let styles = StyleSheet.create({
  
});

export default InnerPreview;
