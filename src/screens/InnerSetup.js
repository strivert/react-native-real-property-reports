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

import {
  AddressCamera, Signature, NewAddress
} from '../components/Molecule';

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

    this.state = {
      isInspectorSignatureVisible: false,
      isClientSignatureVisible: false,
      isNewAddressVisible: false
    }
  }

  /**
   * Render InnerSetup page
   * @return {jsxresult} result in jsx format
   */
  render() {
    const {clickedPage, reportEditBtnClicked, userEditBtnClicked, isAddressCameraVisible, isUserCameraVisible} = this.props;
    const {address, selectedAddressIndex, account} = this.props;
    const {onSelectAddress, onDeleteAddress, onStoreTempAddress, onUpdateAddress} = this.props;
    const {isInspectorSignatureVisible, isClientSignatureVisible, isNewAddressVisible} = this.state;

    const addressImages = address[selectedAddressIndex].images;
    const accountImages = account[0].images;

    const inspectorSignature = address[selectedAddressIndex].inspectorSignature;
    const clientSignature = address[selectedAddressIndex].clientSignature;
    
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
          onNewAddress={()=>{
            this.setState({
              isNewAddressVisible: !this.state.isNewAddressVisible
            });
          }}
        />;
      rightPage =
        <InnerSetupReviewRight
          reportEditBtnClicked={reportEditBtnClicked}
          address={address}
          selectedAddressIndex={selectedAddressIndex}
          onStoreTempAddress={(tempAddress)=>onStoreTempAddress(tempAddress)}
          onDisableCameraPicVisible = {()=>{
            this.props.onDisableCameraPicVisible();
          }}
          onDisableSignatureVisible = {(type)=>{
            if ( type =='inspector' ){
              this.setState({
                isInspectorSignatureVisible: !this.state.isInspectorSignatureVisible
              });
            } else {
              this.setState({
                isClientSignatureVisible: !this.state.isClientSignatureVisible
              });              
            }
          }}
        />;
    } else {
      leftPage = <InnerSetupUserLeft />;
      rightPage =
        <InnerSetupUserRight
          userEditBtnClicked={userEditBtnClicked}
          account={account}
          onStoreTempAddress={(tempAddress)=>onStoreTempAddress(tempAddress)}
          onDisableCameraPicVisible = {()=>{
            this.props.onDisableCameraPicVisible();
          }}
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

        {
          isNewAddressVisible && 
          <View>
            <NewAddress
              onDisableNewAddressVisible = {()=>{
                this.setState({
                  isNewAddressVisible: !this.state.isNewAddressVisible
                });
              }}
              onSaveNewAddress= {(text)=>{
                this.setState({
                  isNewAddressVisible: !this.state.isNewAddressVisible
                }, ()=>{
                  this.props.onSaveNewAddress(text);
                });
              }}
            />
          </View>
        }

        {
          isUserCameraVisible && 
          <View>
            <AddressCamera
              propImages={accountImages}
              onDelImages={(imageIndex)=>{this.props.onDelImages(imageIndex);}}
              onSaveImage={(imageIndex, res)=>{this.props.onSaveImage(imageIndex, res);}}
              onAddImage={(res)=>{this.props.onAddImage(res);}}
              onDisableCameraPicVisible = {()=>{
                this.props.onDisableCameraPicVisible();
              }}
            />
          </View>
        }

        {
          isAddressCameraVisible && 
          <View>
            <AddressCamera
              propImages={addressImages}
              onDelImages={(imageIndex)=>{this.props.onDelImages(imageIndex);}}
              onSaveImage={(imageIndex, res)=>{this.props.onSaveImage(imageIndex, res);}}
              onAddImage={(res)=>{this.props.onAddImage(res);}}
              onDisableCameraPicVisible = {()=>{
                this.props.onDisableCameraPicVisible();
              }}
            />
          </View>
        }
        {
          isInspectorSignatureVisible && 
          <View>
            <Signature
              propImage={inspectorSignature}
              onDelSignature={()=>{
                this.setState({
                  isInspectorSignatureVisible: !this.state.isInspectorSignatureVisible
                }, ()=>{
                  this.props.onDelSignature('inspector');
                });
              }}
              onSaveSignature={(res)=>{
                this.setState({
                  isInspectorSignatureVisible: !this.state.isInspectorSignatureVisible
                }, ()=>{
                  this.props.onSaveSignature('inspector', res);
                });                
              }}
              onDisableSignatureVisible = {()=>{
                this.setState({
                  isInspectorSignatureVisible: !this.state.isInspectorSignatureVisible
                });
              }}
            />
          </View>
        }

        {
          isClientSignatureVisible && 
          <View>
            <Signature
              propImage={clientSignature}
              onDelSignature={()=>{
                this.setState({
                  isClientSignatureVisible: !this.state.isClientSignatureVisible
                }, ()=>{
                  this.props.onDelSignature('client');
                });
              }}
              onSaveSignature={(res)=>{
                this.setState({
                  isClientSignatureVisible: !this.state.isClientSignatureVisible
                }, ()=>{
                  this.props.onSaveSignature('client', res);
                });                
              }}
              onDisableSignatureVisible = {()=>{
                this.setState({
                  isClientSignatureVisible: !this.state.isClientSignatureVisible
                });
              }}
            />
          </View>
        }


      </View>
    );
  }
}

let styles = StyleSheet.create({  
});

export default InnerSetup;
