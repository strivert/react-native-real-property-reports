import React, {Component} from 'react';
import ReactNative from 'react-native';
import {
  InnerSetupReviewLeft,
  InnerSetupReviewRight,
  InnerSetupUserLeft,
  InnerSetupUserRight
} from './';

const {
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableHighlight,
  Linking
} = ReactNative;

/**
 * Container component for InnerSetup page
 */
class InnerSetup extends Component {

  /**
    * InnerSetup Container Constructor
    * @param {props} props from parent component
    * @return {void}
    */
  constructor(props){
    super(props);
  }

  /**
   * Render InnerSetup page
   * @return {jsxresult} result in jsx format
   */
  render() {
    const {clickedPage, reportEditBtnClicked, userEditBtnClicked} = this.props;
    const {address, selectedAddressIndex} = this.props;
    const {onSelectAddress, onDeleteAddress, onStoreTempAddress, onUpdateAddress} = this.props;
    
    let leftPage=null, rightPage=null;
    if (clickedPage==='report'){
      leftPage =
        <InnerSetupReviewLeft
          address={address}
          selectedAddressIndex={selectedAddressIndex}
          reportEditBtnClicked={reportEditBtnClicked}
          onSelectAddress={(index)=>onSelectAddress(index)}          
          onDeleteAddress={()=>{
            onDeleteAddress();
          }}
          onUpdateAddress={()=>onUpdateAddress()}
        />;
      rightPage =
        <InnerSetupReviewRight
          reportEditBtnClicked={reportEditBtnClicked}
          address={address}
          selectedAddressIndex={selectedAddressIndex}
          onStoreTempAddress={(tempAddress)=>onStoreTempAddress(tempAddress)}
        />;
    } else {
      leftPage = <InnerSetupUserLeft />;
      rightPage =
        <InnerSetupUserRight
          userEditBtnClicked={userEditBtnClicked}
        />;
    }

    return (
      <View style={{flex:1, flexDirection: 'row' }}>
      	<View style={{width: 360}}>
          {leftPage}
        </View>
        <View style={{flex: 1}}>
          {rightPage}
        </View>
      </View>
    );
  }
}

let styles = StyleSheet.create({  
});

export default InnerSetup;
