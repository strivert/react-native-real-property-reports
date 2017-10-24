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
      isAddressCameraVisible: false
    };

    this.tempAddress = {};
  }

  onUpdateAddress() {    
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
  }

  /**
   * Render Setup page
   * @return {jsxresult} result in jsx format
   */
  render() {
    const {address, reportParent, selectedAddressIndex, reportSeed} = this.props;
    const selectedBigCategory = reportParent.hasOwnProperty('reportData')?reportParent.reportData[selectedAddressIndex].selectedBigCategory : 'Roofing';
    const {isAddressCameraVisible} = this.state;

    return (
      <View style={{flex: 1, flexDirection: 'column'}}>
      	<Header.Main
          page='Setup'
          selectBigCategoryForPreview={()=>{
            this.props.previewActions.selectBigCategory({bigCategory: selectedBigCategory });
          }}
          onDisableCameraPicVisible={()=>{
            this.setState({
              isAddressCameraVisible: !this.state.isAddressCameraVisible
            });
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
                this.props.addressActions.addImage({res: response.data});
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
              selectedAddressIndex={this.props.selectedAddressIndex}
              isAddressCameraVisible = {isAddressCameraVisible}
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
                this.props.addressActions.addImage({res: res});
              }}
              onSaveImage={(imageIndex, res)=>{
                this.props.addressActions.saveImage({imageIndex: imageIndex, res: res});
              }}
              onDelImages={(imageIndex)=>{
                this.props.addressActions.delImage({imageIndex: imageIndex});
              }}
              onDisableCameraPicVisible={()=>{
                this.setState({
                  isAddressCameraVisible: !this.state.isAddressCameraVisible
                });
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
                this.tempAddress = Object.assign({}, tempAddress);
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
              if (this.state.reportEditBtnClicked === false) {
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
    selectedAddressIndex: state.address.selectedAddressIndex,
    reportParent: state.report,
    reportSeed: state.reportSeed
  }),
  (dispatch) => ({
    addressActions: bindActionCreators(addressActions, dispatch),
    reportActions: bindActionCreators(reportActions, dispatch),
    previewActions: bindActionCreators(previewActions, dispatch)
  })
)(Setup);
