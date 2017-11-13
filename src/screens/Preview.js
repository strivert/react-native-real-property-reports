import React, {Component} from 'react';
import ReactNative from 'react-native';
import {Header, Footer} from '../components';
import {InnerPreview} from './';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

const {
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableHighlight,
  Linking
} = ReactNative;

import * as previewActions from '../modules/preview';
import * as addressActions from '../modules/address';

/**
 * Container component for Preview page
 */
class Preview extends Component {

  /**
    * Preview Container Constructor
    * @param {props} props from parent component
    * @return {void}
    */
  constructor(props){
    super(props);
  }

  /**
   * Render Preview page
   * @return {jsxresult} result in jsx format
   */
  render() {    
    const {address, reportParent, preview, addressActions} = this.props;
    const {selectedAddressIndex} = address;
    const {selectedBigCategory, categories} = preview;
    const report = reportParent.hasOwnProperty('reportData')?reportParent.reportData[selectedAddressIndex]:{};
    
    const addressName = address.address[selectedAddressIndex]['reportName'];
    const reportEmails = address.address[selectedAddressIndex]['reportEmails'];

    return (
      <View style={{flex: 1, flexDirection: 'column'}}>
      	<Header.Main
          page='Preview'
        />
     	  <View style={{flex:1}}>
          <Image source={require('../assets/imgs/mainBackground.png')}>
            <InnerPreview
              reportAddressData = {report}
              selectedBigCategory = {selectedBigCategory}
              categories = {categories}
              addressName = {addressName}
              reportEmails = {reportEmails}
              delReportEmail = {(index)=>{addressActions.delReportEmail({index: index});}}
              addReportEmail = {(email)=>{addressActions.addReportEmail({email: email});}}
            />
          </Image>
        </View>
        <Footer.Main
          page='Preview'
          selectedBigCategory={selectedBigCategory}
          pressPreviewFooterBtn={(bigCategory)=>{this.props.previewActions.selectBigCategory({bigCategory:bigCategory});}}
        />
      </View>
    );
  }
}

let styles = StyleSheet.create({
  
});

export default connect(
  (state) => ({
    address: state.address,
    reportParent: state.report,
    preview: state.preview
  }),
  (dispatch) => ({
    previewActions: bindActionCreators(previewActions, dispatch),
    addressActions: bindActionCreators(addressActions, dispatch)
  })
)(Preview);