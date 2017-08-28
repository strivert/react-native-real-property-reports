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
      userEditBtnClicked: false
    };

    this.tempAddress = {};
  }

  onUpdateAddress() {    
    if ( Object.keys(this.tempAddress).length !== 0 ) {
      this.setState({
        reportEditBtnClicked: false,
        userEditBtnClicked: false
      }, ()=>{
        this.props.AddressActions.updateAddress(this.tempAddress);
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
    return (
      <View style={{flex: 1, flexDirection: 'column'}}>
      	<Header.Main
          page='Setup'
        />
     	  <View style={{flex:1}}>
          <Image source={require('../assets/imgs/mainBackground.png')}>
            <InnerSetup
              clickedPage={this.state.clickedPage}
              reportEditBtnClicked={this.state.reportEditBtnClicked}
              userEditBtnClicked={this.state.userEditBtnClicked}
              address={this.props.address}
              selectedAddressIndex={this.props.selectedAddressIndex}
              onSelectAddress={(index)=>{
                this.setState({
                  reportEditBtnClicked: false
                }, ()=>this.props.AddressActions.setAddressIndex(index))                
              }}
              onDeleteAddress={()=>{
                
                Alert.alert(
                  config.DEL_ADDRESS_TITLE,
                  config.DEL_ADDRESS_CNT,
                  [
                    {text: 'Cancel', onPress: () => {} },
                    {text: 'OK', onPress: () => { 

                      this.setState({
                        reportEditBtnClicked: false
                      }, ()=>this.props.AddressActions.remove());

                    }},
                  ]
                );
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
    selectedAddressIndex: state.address.selectedAddressIndex
  }),
  (dispatch) => ({
    AddressActions: bindActionCreators(addressActions, dispatch)
  })
)(Setup);
