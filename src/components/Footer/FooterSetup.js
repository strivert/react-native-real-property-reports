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
 * Container component for FooterSetup page
 */
class FooterSetup extends Component {

  /**
    * Setup Container Constructor
    * @param {props} props from parent component
    * @return {void}
    */
  constructor(props){
    super(props);
    this.state={
      reportBtnClicked: true,
      userBtnClicked: false,
      reportEditBtnClicked: false,
      userEditBtnClicked: false
    }
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
            clicked={this.state.reportBtnClicked}
            imgSrcClicked={require('../../assets/imgs/ReportsBtnSMOVR.png')}
            imgSrcUnClicked={require('../../assets/imgs/ReportsBtnSM.png')}
            onPress={()=>{
              this.setState({
                reportBtnClicked: true,
                userBtnClicked: false
              });
              this.props.changePage("report");
            }}
          />
          <FooterCenterBtn
            clicked={this.state.userBtnClicked}
            imgSrcClicked={require('../../assets/imgs/UserBtnSMOVR.png')}
            imgSrcUnClicked={require('../../assets/imgs/UserBtnSM.png')}
            onPress={()=>{
              this.setState({
                reportBtnClicked: false,
                userBtnClicked: true
              });
              this.props.changePage("user");
            }}
          />
        </View>

        <View style={{flex:0.15, flexDirection: 'row', justifyContent:'center', alignItems:'center'}}>
          <GreenToggleBtn
            clicked={(this.state.reportBtnClicked)?this.state.reportEditBtnClicked:this.state.userEditBtnClicked}
            textClicked='Save'
            textUnClicked='Edit'
            onPress={()=>{
              if ( this.state.reportBtnClicked ) {
                this.setState({
                  reportEditBtnClicked: !this.state.reportEditBtnClicked
                },()=>{
                  this.props.changeEditToggle(this.state.reportEditBtnClicked, this.state.userEditBtnClicked);
                })
              } else {
                this.setState({
                  userEditBtnClicked: !this.state.userEditBtnClicked
                },()=>{
                  this.props.changeEditToggle(this.state.reportEditBtnClicked, this.state.userEditBtnClicked);
                })
              }

            }}
          />
        </View>

      </View>
      );
  }
}

let styles = StyleSheet.create({  
});

export default FooterSetup;