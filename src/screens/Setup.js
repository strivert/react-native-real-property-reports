import React, {Component} from 'react';
import ReactNative from 'react-native';
import {Header, Footer} from '../components';
import {InnerSetup} from './';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import config from '../config/config';
import * as addressActions from '../modules/address';

const {
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableHighlight,
  Linking,
  Alert
} = ReactNative;

import * as previewActions from '../modules/preview';
import * as reportActions from '../modules/report';
import * as accountActions from '../modules/account';

var ImagePicker = require('react-native-image-picker');

/**
 * Container component for Setup page
 */
class Setup extends Component {

  /**
    * Setup Container Constructor
    * @param {props} props from parent component
    * @return {void}
    */
  constructor(props){
    super(props);
    this.state={
      clickedPage: 'report',
      reportEditBtnClicked: false,
      userEditBtnClicked: false,
      isAddressCameraVisible: false,
      isUserCameraVisible: false
    };

    this.tempAddress = {};
    this.tempAccount = {};
  }

  onUpdateAddress() {
    const {clickedPage} = this.state;
    
    if (clickedPage == 'report') {
      if ( Object.keys(this.tempAddress).length !== 0 ) {
        this.setState({
          reportEditBtnClicked: false,
          userEditBtnClicked: false
        }, ()=>{
            this.props.addressActions.updateAddress(this.tempAddress);
            this.tempAddress = {};
        });      
      } else {
        this.setState({
          reportEditBtnClicked: false,
          userEditBtnClicked: false
        });
      }
    } else {
      if ( Object.keys(this.tempAccount).length !== 0 ) {
        this.setState({
          reportEditBtnClicked: false,
          userEditBtnClicked: false
        }, ()=>{
            this.props.accountActions.updateAccount(this.tempAccount);
            this.tempAccount = {};
        });      
      } else {
        this.setState({
          reportEditBtnClicked: false,
          userEditBtnClicked: false
        });
      }
    }
  }

  /**
   * Render Setup page
   * @return {jsxresult} result in jsx format
   */
  render() {
    const {address, reportParent, selectedAddressIndex, reportSeed} = this.props;
    const selectedBigCategory = reportParent.hasOwnProperty('reportData')?reportParent.reportData[selectedAddressIndex].selectedBigCategory : 'Roofing';
    const {isAddressCameraVisible, isUserCameraVisible, clickedPage} = this.state;
    return (
      <View style={{flex: 1, flexDirection: 'column'}}>
      	<Header.Main
          page='Setup'
          selectBigCategoryForPreview={()=>{
            this.props.previewActions.selectBigCategory({bigCategory: selectedBigCategory });
          }}
          onDisableCameraPicVisible={()=>{
            if (clickedPage =='report') {
              this.setState({
                isAddressCameraVisible: !this.state.isAddressCameraVisible
              });
            } else {
              this.setState({
                isUserCameraVisible: !this.state.isUserCameraVisible
              });              
            }
          }}
          onFromPickerImage={()=>{
            var options = {
              title: 'Select Avatar',
              storageOptions: {
                skipBackup: true,
                path: 'images'
              }
            };
            ImagePicker.launchImageLibrary(options, (response)  => {
              // Same code as in above section!
              let source = { uri: response.data };

              if (response.data) {
                if (clickedPage =='report') {
                  this.props.addressActions.addImage({res: response.data});
                } else {
                  this.props.accountActions.addImage({res: response.data});
                }
              }

            });
          }}
        />
     	  <View style={{flex:1}}>
          <Image source={require('../assets/imgs/mainBackground.png')}>
            <InnerSetup
              clickedPage={this.state.clickedPage}
              reportEditBtnClicked={this.state.reportEditBtnClicked}
              userEditBtnClicked={this.state.userEditBtnClicked}
              address={this.props.address}
              account={this.props.account}
              selectedAddressIndex={this.props.selectedAddressIndex}
              isAddressCameraVisible = {isAddressCameraVisible}
              isUserCameraVisible = {isUserCameraVisible}
              onSaveNewAddress={(text)=>{
                this.props.addressActions.create({title: text});
                this.props.reportActions.createParentReport({oneReport: reportSeed});
              }}
              onDelSignature = {(type)=>{
                this.props.addressActions.delSignature({type: type});
              }}
              onSaveSignature = {(type, res)=>{
                this.props.addressActions.saveSignature({type: type, res: res});
              }}
              onAddImage={(res)=>{
                if (clickedPage =='report') {
                  this.props.addressActions.addImage({res: res});
                } else {
                  this.props.accountActions.addImage({res: res});                  
                }
              }}
              onSaveImage={(imageIndex, res)=>{
                if (clickedPage =='report') {
                  this.props.addressActions.saveImage({imageIndex: imageIndex, res: res});
                } else {
                this.props.accountActions.saveImage({imageIndex: 0, res: res});                  
                }
              }}
              onDelImages={(imageIndex)=>{
                if (clickedPage =='report') {
                  this.props.addressActions.delImage({imageIndex: imageIndex});
                } else {
                  this.props.accountActions.delImage({imageIndex: 0});                  
                }
              }}
              onDisableCameraPicVisible={()=>{
                if (clickedPage =='report') {
                  this.setState({
                    isAddressCameraVisible: !this.state.isAddressCameraVisible
                  });
                } else {
                  this.setState({
                    isUserCameraVisible: !this.state.isUserCameraVisible
                  });  
                }
              }}
              onSelectAddress={(index)=>{
                this.setState({
                  reportEditBtnClicked: false
                }, ()=>this.props.addressActions.setAddressIndex(index))                
              }}
              onDeleteAddress={()=>{
                if(this.props.address.length == 1) {

                } else {                
                  Alert.alert(
                    config.DEL_ADDRESS_TITLE,
                    config.DEL_ADDRESS_CNT,
                    [
                      {text: 'Cancel', onPress: () => {} },
                      {text: 'OK', onPress: () => { 

                        this.setState({
                          reportEditBtnClicked: false
                        }, ()=>{
                          this.props.addressActions.remove();
                        });

                      }},
                    ]
                  );
                }
              }}
              onStoreTempAddress={(tempAddress)=>{
                if (clickedPage =='report') {
                  this.tempAddress = Object.assign({}, tempAddress);
                } else {
                  this.tempAccount = Object.assign({}, tempAddress);                  
                }
              }}
              onUpdateAddress={()=>{
                this.onUpdateAddress();
              }}
            />
          </Image>
        </View>
        <Footer.Main
          page='Setup'
          changePage={(innerPage)=>{
            this.setState({
              clickedPage: innerPage,
              reportEditBtnClicked: false,
              userEditBtnClicked: false
            })
          }}
          reportEditBtnClicked={this.state.reportEditBtnClicked}
          userEditBtnClicked={this.state.userEditBtnClicked}
          changeEditToggle={(reportEditBtnClicked, userEditBtnClicked)=>{

            this.setState({
              reportEditBtnClicked: reportEditBtnClicked,
              userEditBtnClicked: userEditBtnClicked
            }, ()=>{
              if (clickedPage=='report' && this.state.reportEditBtnClicked === false) {
                this.onUpdateAddress();
              }
              if (clickedPage=='user' && this.state.userEditBtnClicked === false) {
                this.onUpdateAddress();
              }
            })
          }}
        />
      </View>
    );
  }
}

let styles = StyleSheet.create({
  
});

export default connect(
  (state) => ({
    address: state.address.address,
    account: state.account.account,
    selectedAddressIndex: state.address.selectedAddressIndex,
    reportParent: state.report,
    reportSeed: state.reportSeed
  }),
  (dispatch) => ({
    addressActions: bindActionCreators(addressActions, dispatch),
    accountActions: bindActionCreators(accountActions, dispatch),
    reportActions: bindActionCreators(reportActions, dispatch),
    previewActions: bindActionCreators(previewActions, dispatch)
  })
)(Setup);
