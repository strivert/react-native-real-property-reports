import React, {Component} from 'react';
import ReactNative from 'react-native';
import {
  TextBtn
} from '../components/Atoms';
import {
  ItemList
} from '../components/Molecule';
import { Actions } from 'react-native-router-flux';
import EStyleSheet from 'react-native-extended-stylesheet';
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

  shouldComponentUpdate(nextProps, nextState){
    return (JSON.stringify(nextProps) != JSON.stringify(this.props));
  }

  /**
   * Render Setup page
   * @return {jsxresult} result in jsx format
   */
  render() {
    const {address, selectedAddressIndex, reportEditBtnClicked} = this.props;
    const {onSelectAddress, onDeleteAddress, onUpdateAddress, onNewAddress} = this.props;
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
            <TextBtn imgSrc={require('../assets/imgs/BTN_Green_Small.png')} onPress={()=>onNewAddress()}>New</TextBtn>
            <TextBtn imgSrc={require('../assets/imgs/BTN_Blue_Small.png')} onPress={()=>onUpdateAddress()}>Save</TextBtn>
            <TextBtn imgSrc={require('../assets/imgs/BTN_Red_Small.png')} onPress={()=>onDeleteAddress()}>Delete</TextBtn>
          </View> )
        : (
          <View style={{flexDirection: 'row', justifyContent: 'space-between', margin: 10}}>
            <TextBtn imgSrc={require('../assets/imgs/BTN_Green_Small.png')} onPress={()=>onNewAddress()}>New</TextBtn>
          </View>
        )}
        
        <View style={{margin: 10, marginTop: 0}}>
          <TextBtn
            imgSrc={require('../assets/imgs/BTN_Blue_Large.png')}
            style={{height:50, resizeMode: 'stretch'}}
            onPress={()=>{
              Actions.report();
            }}
          >
            Start Report
          </TextBtn>
        </View>

        
        <View style={styles.scrollLeftHeight}>
          <ScrollView>            
            <ItemList
              items={itemData}
              handleChangeItem = {(label, index)=>{onSelectAddress(index)}}
              defaultSelectedIndex={selectedAddressIndex}
            />
          </ScrollView>
        </View>

        <View style={{flexDirection: 'row', justifyContent: 'space-between', margin: 10}}>
          <TextBtn 
            imgSrc={require('../assets/imgs/BTN_Grey_Small.png')}
            onPress={()=>{}}
          >
            ISN
          </TextBtn>
          <TextBtn
            imgSrc={require('../assets/imgs/BtnBlue1.png')}
            style={{height:30, width: 230, resizeMode: 'stretch'}}
            onPress={()=>{}}
          >
            Send Client Confirmation
          </TextBtn>
        </View>
      </View>
    );
  }
}

let styles = EStyleSheet.create({
  scrollLeftHeight: {
    flex: 0.89
  },
  '@media (max-height: 719)': {
    scrollLeftHeight: {
      flex: 0.55
    }
  }
});

export default InnerSetupReviewLeft;
