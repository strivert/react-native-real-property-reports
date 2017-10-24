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
    const {selectedBigCategory, isEdit} = this.props;
    return (
      
      <View style={{flex:1, flexDirection: 'row'}}>

        <View style={{flex:0.15, flexDirection: 'row', justifyContent:'flex-start', alignItems:'center', marginLeft: 30}}>
          <BarCircularBtn imgSrc={require('../../assets/imgs/visibilityBtn.png')} onPress={()=>{ this.props.onLimitationNote(); }}/>
          <Text style={{color: 'white', fontSize: 20, marginLeft:10, fontWeight: 'bold'}}>
            Limitations
          </Text>
        </View>

        <View style={{flex:0.7, flexDirection: 'row', justifyContent:'center', alignItems:'center', }}>
          <FooterCenterBtn
            clicked={'Roofing'===selectedBigCategory?true:false}
            imgSrcClicked={require('../../assets/imgs/BtnRptRoofingOVR.png')}
            imgSrcUnClicked={require('../../assets/imgs/BtnRptRoofing.png')}
            onPress={()=>{this.props.pressReportFooterBtn('Roofing');}}
          />
          <FooterCenterBtn
            clicked={'Exterior'===selectedBigCategory?true:false}
            imgSrcClicked={require('../../assets/imgs/BtnRptExteriorOVR.png')}
            imgSrcUnClicked={require('../../assets/imgs/BtnRptExterior.png')}
            onPress={()=>{this.props.pressReportFooterBtn('Exterior');}}
          />
          <FooterCenterBtn
            clicked={'Structure'===selectedBigCategory?true:false}
            imgSrcClicked={require('../../assets/imgs/BtnRptStructureOVR.png')}
            imgSrcUnClicked={require('../../assets/imgs/BtnRptStructure.png')}
            onPress={()=>{this.props.pressReportFooterBtn('Structure');}}
          />
          <FooterCenterBtn
            clicked={'Interior'===selectedBigCategory?true:false}
            imgSrcClicked={require('../../assets/imgs/BtnRptInteriorOVR.png')}
            imgSrcUnClicked={require('../../assets/imgs/BtnRptInterior.png')}
            onPress={()=>{this.props.pressReportFooterBtn('Interior');}}
          />
          <FooterCenterBtn
            clicked={'Electrical'===selectedBigCategory?true:false}
            imgSrcClicked={require('../../assets/imgs/BtnRptElectricalOVR.png')}
            imgSrcUnClicked={require('../../assets/imgs/BtnRptElectrical.png')}
            onPress={()=>{this.props.pressReportFooterBtn('Electrical');}}
          />
          <FooterCenterBtn
            clicked={'Plumbing'===selectedBigCategory?true:false}
            imgSrcClicked={require('../../assets/imgs/BtnRptPlumbingOVR.png')}
            imgSrcUnClicked={require('../../assets/imgs/BtnRptPlumbing.png')}
            onPress={()=>{this.props.pressReportFooterBtn('Plumbing');}}
          />
          <FooterCenterBtn
            clicked={'Cooling'===selectedBigCategory?true:false}
            imgSrcClicked={require('../../assets/imgs/BtnRptCoolingOVR.png')}
            imgSrcUnClicked={require('../../assets/imgs/BtnRptCooling.png')}
            onPress={()=>{this.props.pressReportFooterBtn('Cooling');}}
          />
          <FooterCenterBtn
            clicked={'Heating'===selectedBigCategory?true:false}
            imgSrcClicked={require('../../assets/imgs/BtnRptHeatingOVR.png')}
            imgSrcUnClicked={require('../../assets/imgs/BtnRptHeating.png')}
            onPress={()=>{this.props.pressReportFooterBtn('Heating');}}
          />
        </View>

        <View style={{flex:0.15, flexDirection: 'row', justifyContent:'center', alignItems:'center'}}>
          {
            !isEdit ?
              <GreenToggleBtn
                clicked={false}
                textClicked='Save'
                textUnClicked='Edit'
                onPress={()=>{this.props.handleEditReport();}}
              />
            :
              <GreenToggleBtn
                clicked={true}
                textClicked='Save'
                textUnClicked='Edit'
                onPress={()=>{this.props.handleSaveUpdatedReport();}}
              />
          }
        </View>

      </View>
      );
  }
}

let styles = StyleSheet.create({  
});

export default FooterReport;