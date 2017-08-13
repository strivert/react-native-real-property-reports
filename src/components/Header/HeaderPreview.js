import React, {Component} from 'react';
import ReactNative from 'react-native';
import { Actions } from 'react-native-router-flux';
import {
  HeaderCenterBtn,
  BarCircularBtn
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
class HeaderPreview extends Component {

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

        <View style={{flex:0.2, justifyContent:'center', alignItems:'flex-start', marginLeft:30}}>
          <BarCircularBtn imgSrc={require('../../assets/imgs/helpBtn.png')} onPress={()=>{}} style={{width:40, height:42}} />
        </View>

        <View style={{flex:0.6, flexDirection: 'row', justifyContent:'center', alignItems:'center'}}>
          <HeaderCenterBtn clicked={false} onPress={()=>{Actions.setup()}}>SET-UP</HeaderCenterBtn>
          <HeaderCenterBtn clicked={false} onPress={()=>{Actions.report()}}>REPORT</HeaderCenterBtn>
          <HeaderCenterBtn clicked={true} imgSrc={require('../../assets/imgs/mainBtnBkgHvr.png')}>PREVIEW</HeaderCenterBtn>
        </View>

        <View style={{flex: 0.2, flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', marginRight: 30}}>
        </View>
      </View>
    );
  }
}

let styles = StyleSheet.create({  
});

export default HeaderPreview;
