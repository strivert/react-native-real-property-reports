import React, {Component} from 'react';
import ReactNative from 'react-native';
import {ActionConst, Scene, Router} from 'react-native-router-flux';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import Camera from 'react-native-camera';
import RNFS from 'react-native-fs'

import update from 'react-addons-update';

import {
  AppRegistry,
  Dimensions,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  Image
} from 'react-native';
import Modal from 'react-native-modal';
import Swiper from 'react-native-swiper';
import SignatureCapture from 'react-native-signature-capture';
import { captureRef, captureScreen } from "react-native-view-shot";
import EStyleSheet from 'react-native-extended-stylesheet';

import {
  TextBtn
} from '../Atoms';
import {
  BarCircularBtn
} from '../Atoms';

let SQLite = require('react-native-sqlite-storage')
var ImagePicker = require('react-native-image-picker');

/**
 * High Level Container
 */
class Signature extends Component {

  /**
    * App Container Constructor
    * @param {props} props from parent component
    * @return {void}
    */
  constructor(props) {
    super(props);

    this.camera = null;

    this.state = {
      shotOption: {
        format: "jpg",
        quality: 0.8,
        result: "base64",
        snapshotContentContainer: false
      }
    };
  }

  snapshot = refname => {
    captureRef(this.refs[refname], this.state.shotOption)
    .then(
      res => {

        this.props.onSaveSignature(res);
        /*
        this.setState(
          update(this.state,{
            isDraw: {$set: false}
          })
        );
        */            
      }
    )     
    .catch(
      error => {
        console.log(error)
      }
    );
  }

  render() {
    const {propImage} = this.props;

    const styles = EStyleSheet.create({
      container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between'
      },
      preview: {
        flex: 1,
        alignItems: 'center'
      },
      capture: {
        flex: 0,
        backgroundColor: '#fff',
        borderRadius: 5,
        color: '#000',
        padding: 10,
        margin: 40
      },
      wrapper: {
      },
      signature: {
        flex: 1,
        borderColor: '#000033',
        borderWidth: 1,
      },
      slide: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB',
      },

      slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9',
      },
      signatureModal: {
        flex: 1, borderRadius: 10, width: 797,
        height: 550, position: 'absolute', right: 0,
        top: 20, padding: 40, paddingTop: 60,
        paddingBottom: 0, backgroundColor: 'white'
      },
      '@media (max-height: 719)': {
        signatureModal: {
          width: 657, height: 400, top: 0
        }
      }
    });

    return (
      <View style={styles.container}>
        <Modal 
          isVisible={true}
          onBackdropPress = {()=>{
            this.props.onDisableSignatureVisible();
          }}
          >
          <View style={styles.signatureModal}>
            <View style={{flex: 1}} ref="myViewSign" collapsable={false}>
              <Image source={require('../../assets/imgs/backWhite.png')} style={{height: '100%', width: '100%', resizeMode: 'stretch'}}>
                <Image source={{uri: `data:image/png;base64,${propImage}`}} style={{height: '100%', width: '100%'}}>
                  <SignatureCapture
                    style={[{flex:1},styles.signature]}
                    ref="sign"
                    onSaveEvent={()=>{}}
                    onDragEvent={()=>{}}
                    saveImageFileInExtStorage={false}
                    showNativeButtons={false}
                    showTitleLabel={false}
                    square={false}
                    rotateClockwise={false}
                    viewMode={"landscape"}
                  />
                </Image>
              </Image>
            </View>
            <View style={{height: 80, flexDirection: 'row', paddingTop: 10, justifyContent: 'space-between'}}>
              <TextBtn
                imgSrc={require('../../assets/imgs/PhotoControlBtn.png')}
                style={{height: 34, resizeMode: 'stretch', margin: 10, marginRight: 20}}
                onPress={()=>{
                  this.props.onDelSignature();
                }}
              >
                Delete
              </TextBtn>

              <TextBtn
                imgSrc={require('../../assets/imgs/PhotoControlBtn.png')}
                style={{height: 34, resizeMode: 'stretch', margin: 10, marginRight: 20}}
                onPress={()=>{
                  this.snapshot('myViewSign');
                }}
              >
                Save
              </TextBtn>

            </View>
          </View>
        </Modal>
      </View>
    );

  }  

}


export default Signature;
