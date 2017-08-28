import React, {Component} from 'react';
import ReactNative from 'react-native';
import {
  TextBtn
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
  Linking
} = ReactNative;

/**
 * Container component for ReportLeft of Setup page
 */
class InnerSetupReviewLeft extends Component {

  /**
    * SetupReportLeft Container Constructor
    * @param {props} props from parent component
    * @return {void}
    */
  constructor(props){
    super(props);
  }

  /**
   * Render Setup page
   * @return {jsxresult} result in jsx format
   */
  render() {
    const {address, selectedAddressIndex, reportEditBtnClicked} = this.props;
    const {onSelectAddress, onDeleteAddress, onUpdateAddress} = this.props;
    /*
    let itemData = 
    [
      {"name": "123 Sample Street", state: "0"},
      {"name": "Address 1", state: "1"},
      {"name": "Address 2", state: "0"},
      {"name": "Address 3", state: "0"},
    ];    
    itemData = itemData.map((item, key)=>{
      return {'label': item.name, value: key, radioBtnState: item.state}; //0: inital gray, 1: only blue, 2: checked blue, 3: checked blue with camera icon
    });
    */

    let itemData = [];
    itemData = address.map((item, key)=>{
      return {'label': item.reportName, value: key, radioBtnState: "0"}; //0: inital gray, 1: only blue, 2: checked blue, 3: checked blue with camera icon
    });

    return (
      <View style={{flex: 1}}>
        {(reportEditBtnClicked) ? (
        	<View style={{flexDirection: 'row', justifyContent: 'space-between', margin: 10}}>
            <TextBtn imgSrc={require('../assets/imgs/BTN_Green_Small.png')}>New</TextBtn>
            <TextBtn imgSrc={require('../assets/imgs/BTN_Blue_Small.png')} onPress={()=>onUpdateAddress()}>Save</TextBtn>
            <TextBtn imgSrc={require('../assets/imgs/BTN_Red_Small.png')} onPress={()=>onDeleteAddress()}>Delete</TextBtn>
          </View> )
        : (
          <View style={{flexDirection: 'row', justifyContent: 'space-between', margin: 10}}>
            <TextBtn imgSrc={require('../assets/imgs/BTN_Green_Small.png')}>New</TextBtn>
          </View>
        )}
        
        <View style={{margin: 10, marginTop: 0}}>
          <TextBtn
            imgSrc={require('../assets/imgs/BTN_Blue_Large.png')}
            style={{height:50, resizeMode: 'stretch'}}
          >
            Start Report
          </TextBtn>
        </View>

        
        <View style={{flex: 0.89}}>
          <ScrollView>            
            <ItemList
              items={itemData}
              handleChangeItem = {(label, index)=>{onSelectAddress(index)}}
              defaultSelectedIndex={selectedAddressIndex}
            />
          </ScrollView>
        </View>

        <View style={{flexDirection: 'row', justifyContent: 'space-between', margin: 10}}>
          <TextBtn imgSrc={require('../assets/imgs/BTN_Grey_Small.png')}>ISN</TextBtn>
          <TextBtn
            imgSrc={require('../assets/imgs/BtnBlue1.png')}
            style={{height:30, width: 230, resizeMode: 'stretch'}}
          >
            Send Client Confirmation
          </TextBtn>
        </View>
      </View>
    );
  }
}

let styles = StyleSheet.create({
  
});

export default InnerSetupReviewLeft;
