import React, {Component} from 'react';
import ReactNative from 'react-native';
import {
  FooterCenterBtn,
  BarCircularBtn,
  GreenToggleBtn
} from '../Atoms';

const {
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableHighlight,
  TouchableOpacity,
  Linking
} = ReactNative;

/**
 * Container component for Setup page
 */
class FooterSetup extends Component {

  /**
    * Setup Container Constructor
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
    return (
      
      <View style={{flex:1, flexDirection: 'row'}}>

        <View style={{flex:0.15, justifyContent:'center', alignItems:'center', marginLeft:10}}>
        </View>

        <View style={{flex:0.7, flexDirection: 'row', justifyContent:'center', alignItems:'center', }}>
          <FooterCenterBtn
            clicked={false}
            imgSrcClicked={require('../../assets/imgs/ReportsBtnSMOVR.png')}
            imgSrcUnClicked={require('../../assets/imgs/ReportsBtnSM.png')}
          />
          <FooterCenterBtn
            clicked={true}
            imgSrcClicked={require('../../assets/imgs/UserBtnSMOVR.png')}
            imgSrcUnClicked={require('../../assets/imgs/UserBtnSM.png')}
          />
        </View>

        <View style={{flex:0.15, flexDirection: 'row', justifyContent:'center', alignItems:'center'}}>
          <GreenToggleBtn
            clicked={false}
            textClicked='Edit'
            textUnClicked='Save'
          />
        </View>

      </View>
      );
  }
}

let styles = StyleSheet.create({  
});

export default FooterSetup;