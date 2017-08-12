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
class FooterReport extends Component {

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

        <View style={{flex:0.15, flexDirection: 'row', justifyContent:'flex-start', alignItems:'center', marginLeft: 30}}>
          <BarCircularBtn imgSrc={require('../../assets/imgs/visibilityBtn.png')} onPress={()=>{}}/>
          <Text style={{color: 'white', fontSize: 20, marginLeft:10, fontWeight: 'bold'}}>
            Limitations
          </Text>
        </View>

        <View style={{flex:0.7, flexDirection: 'row', justifyContent:'center', alignItems:'center', }}>
          <FooterCenterBtn
            clicked={false}
            imgSrcClicked={require('../../assets/imgs/BtnRptRoofingOVR.png')}
            imgSrcUnClicked={require('../../assets/imgs/BtnRptRoofing.png')}
          />
          <FooterCenterBtn
            clicked={false}
            imgSrcClicked={require('../../assets/imgs/BtnRptExteriorOVR.png')}
            imgSrcUnClicked={require('../../assets/imgs/BtnRptExterior.png')}
          />
          <FooterCenterBtn
            clicked={true}
            imgSrcClicked={require('../../assets/imgs/BtnRptStructureOVR.png')}
            imgSrcUnClicked={require('../../assets/imgs/BtnRptStructure.png')}
          />
          <FooterCenterBtn
            clicked={false}
            imgSrcClicked={require('../../assets/imgs/BtnRptInteriorOVR.png')}
            imgSrcUnClicked={require('../../assets/imgs/BtnRptInterior.png')}
          />
          <FooterCenterBtn
            clicked={false}
            imgSrcClicked={require('../../assets/imgs/BtnRptElectricalOVR.png')}
            imgSrcUnClicked={require('../../assets/imgs/BtnRptElectrical.png')}
          />
          <FooterCenterBtn
            clicked={false}
            imgSrcClicked={require('../../assets/imgs/BtnRptPlumbingOVR.png')}
            imgSrcUnClicked={require('../../assets/imgs/BtnRptPlumbing.png')}
          />
          <FooterCenterBtn
            clicked={false}
            imgSrcClicked={require('../../assets/imgs/BtnRptCoolingOVR.png')}
            imgSrcUnClicked={require('../../assets/imgs/BtnRptCooling.png')}
          />
          <FooterCenterBtn
            clicked={false}
            imgSrcClicked={require('../../assets/imgs/BtnRptHeatingOVR.png')}
            imgSrcUnClicked={require('../../assets/imgs/BtnRptHeating.png')}
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

export default FooterReport;