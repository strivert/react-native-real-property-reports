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
class HeaderSetup extends Component {

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

        <View style={{flex: 0.2, justifyContent: 'center', alignItems: 'flex-start', marginLeft: 30}}>
          <BarCircularBtn
            imgSrc={require('../../assets/imgs/helpBtn.png')}
            onPress={()=>{
              Linking.openURL('http://www.fortreports.com/').catch(err => console.error('An error occurred', err));
            }}
            style={{width:40, height:42}} />
        </View>

        <View style={{flex: 0.6, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
          <HeaderCenterBtn clicked={true} imgSrc={require('../../assets/imgs/mainBtnBkgHvr.png')}>SET-UP</HeaderCenterBtn>
          <HeaderCenterBtn clicked={false} onPress={()=>{Actions.report()}}>REPORT</HeaderCenterBtn>
          <HeaderCenterBtn clicked={false} onPress={()=>{
            this.props.selectBigCategoryForPreview();
            Actions.preview();
          }}>PREVIEW</HeaderCenterBtn>
        </View>

        <View style={{flex: 0.2, flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', marginRight: 30}}>
          <BarCircularBtn imgSrc={require('../../assets/imgs/paperclipBtn.png')} 
            onPress={()=>{
              this.props.onFromPickerImage();
            }} 
            style={{marginRight:20}}
          />
          <BarCircularBtn imgSrc={require('../../assets/imgs/PhotoBtn.png')} 
            onPress={()=>{
              this.props.onDisableCameraPicVisible();
            }} 
          />
        </View>

      </View>
    );
  }
}

let styles = StyleSheet.create({  
});

export default HeaderSetup;