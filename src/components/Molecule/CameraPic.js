import React, {Component} from 'react';
import ReactNative from 'react-native';
import {ActionConst, Scene, Router} from 'react-native-router-flux';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import Camera from 'react-native-camera';
import RNFS from 'react-native-fs'

import update from 'react-addons-update';
import config from '../../config/config';

import {
  AppRegistry,
  Dimensions,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  Image,
  Alert
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
class CameraPic extends Component {

  /**
    * App Container Constructor
    * @param {props} props from parent component
    * @return {void}
    */
  constructor(props) {
    super(props);

    this.camera = null;

    this.state = {      
      selectedIndex: 0,
      isDraw: false,
      isCamera: false,
      isAfterTake: false, //to be false
      tempImage: '',
      shotOption: {
        format: "jpg",
        quality: 0.8,
        result: "base64",
        snapshotContentContainer: false
      }
    }
  }

  componentDidMount() {
    const {propImages} = this.props;

    this.setState({
      isCamera: (propImages.length>0) ? false : true
    });
  }

  takePicture() {
    const options = {
    };
    
    this.camera.capture({metadata: options})
      .then((data) => {

        RNFS.readFile(data.path.substring(7), "base64").then(res => {
          this.setState({
            isAfterTake: true,
            tempImage: res,
            isCamera: false
          })
          /*
          this.setState(
            update(this.state, {
              images: { 
                $push: [{
                  'backImage': res,
                  'drawImage': ''
                }]
              },
              isCamera: {$set: false},
              selectedIndex: {$set: 0},
              isDraw: {$set: false}
            })
          );
          */
        })
      })
      .catch(err => {
        alert('err');
        alert(err);
      });      
  }

  snapshot = refname => {
    captureRef(this.refs[refname], this.state.shotOption)
    .then(
      res => {

        this.props.onSaveImage(this.state.selectedIndex, res);

        this.setState(
          update(this.state,{
            isDraw: {$set: false}
          })
        );
            
      }
    )     
    .catch(
      error => {
        console.log(error)
      }
    );
  }

  showSwiper() {
    const {isDraw, selectedIndex} = this.state;
    console.log(selectedIndex);
    const {propImages} = this.props;
    return propImages.map((item, index)=>{
      return (
        <View style={styles.slide} key={`swiper-${index}`}>
          <Image source={{uri: `data:image/png;base64,${item.backImage}`}} style={{height: '100%', width: '100%'}}>
            {
              item.drawImage!=='' && 
              <Image source={{uri: `data:image/png;base64,${item.drawImage}`}} style={{height: '100%', width: '100%'}}>
            
                {
                  (isDraw && selectedIndex===index) &&
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
                    viewMode={"landscape"}/>
                }

              </Image>
            }
            {
              (item.drawImage==='' && isDraw && selectedIndex===index) &&
              <SignatureCapture
                style={{flex:1}}
                ref="sign"
                onSaveEvent={()=>{}}
                onDragEvent={()=>{}}
                saveImageFileInExtStorage={false}
                showNativeButtons={false}
                showTitleLabel={false}
                square={false}
                rotateClockwise={false}
                viewMode={"landscape"}/>
            }
          </Image>
        </View>
      );
    });
  }

  fromPicker() {
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
        this.setState(
          update(this.state, {
            images: { 
              $push: [{
                'backImage': response.data,
                'drawImage': ''
              }]
            },
            isCamera: {$set: false},
            selectedIndex: {$set: 0},
            isDraw: {$set: false}
          })
        );
      }

    });

  }

  onSaveEvent(result) {
    console.log(result.encoded);
    this.setState(
      update(this.state,{
        images: {
          [this.state.selectedIndex]: {
            drawImage: {$set: `${result.encoded}`}
          }
        },
        isDraw: {$set: false}
      }, console.log(this.state.images[this.state.selectedIndex].drawImage))
    );
  }

  saveToRoll() {
    const {selectedIndex} = this.state;
    const {propImages} = this.props;
    let img64Str = '';
    if (propImages[selectedIndex].drawImage !=='') {
      img64Str = propImages[selectedIndex].drawImage;
    } else {
      img64Str = propImages[selectedIndex].backImage;
    }

    const myAlbumPath = RNFS.PicturesDirectoryPath;
    let imageLocation = myAlbumPath+'/'+'filename'+new Date().getTime().toString()+'.png';
    // alert(imageLocation);
    // RNFS.mkdir(myAlbumPath).then(()=>{
      RNFS.writeFile(imageLocation, img64Str, 'base64').then((success) => {
       // alert('FILE WRITTEN!');
      })
      .catch((err) => {
        alert(err.message);
      });

    // });    
  }

  saveTempToRoll() {
    const {tempImage} = this.state;
    
    const myAlbumPath = RNFS.PicturesDirectoryPath;
    let imageLocation = myAlbumPath+'/'+'filename'+new Date().getTime().toString()+'.png';    
    
    RNFS.writeFile(imageLocation, tempImage, 'base64').then((success) => {
     // alert('FILE WRITTEN!');
    })
    .catch((err) => {
      alert(err.message);
    }); 
  }

  saveTempToImageList() {
    const {tempImage} = this.state;
    this.props.onAddImage(tempImage);
    this.setState(
      update(this.state, {
        isAfterTake: {$set: false},
        selectedIndex: {$set: 0}
      })
    );    
  }

  showPanel(styles) {
    const {isCamera, isAfterTake} = this.state;

    let returnObj = null;
    if ( !isAfterTake ) {
      if ( isCamera) {
        returnObj = 
          <Camera
            ref={(cam) => {
              this.camera = cam;
            }}
            style={{flex: 1, justifyContent: 'flex-end', alignItems: 'center'}}
            captureTarget={Camera.constants.CaptureTarget.temp}
            captureQuality={Camera.constants.CaptureQuality.medium}
            aspect={Camera.constants.Aspect.fill}>
          </Camera>
      } else {
        returnObj = 
          <Swiper
            style={styles.wrapper}
            showsButtons={false}
            onIndexChanged={(index)=>{
              this.setState({
                selectedIndex: index
              })
            }}
            ref="snapView"
          >
            {this.showSwiper()}
          </Swiper>
      }
    }

    return returnObj;      
  }

  componentWillReceiveProps(nextProps) {
    // alert(nextProps.propImages.length);
    if (nextProps.propImages.length ==  0) {
      this.setState({
        isCamera: true
      });
    }    
  }

  /**
   * Render a page(screen)
   * @return {jsxresult} result in jsx format
   */
  render() {

    const {isDraw, isCamera, isModalVisible, isAfterTake, tempImage} = this.state;
    
    const {propImages} = this.props;
    const {onDisableCameraPicVisible} = this.props;
    
    const imageLength = propImages.length;
    return (
        <View style={styles.container}>
          <Modal 
          isVisible={true}
          onBackdropPress = {()=>{
            onDisableCameraPicVisible();            
          }}
          >
            <View style={styles.cameraModal}>
              <View style={{flex: 1}}>
              {
                isAfterTake && 
                  <Image source={{uri: `data:image/png;base64,${tempImage}`}} style={{height: '100%', width: '100%'}} />
              }
              {
                this.showPanel(styles)
              }
              
                {/*<Image source={{uri: `data:image/jpeg;base64,${image1}`}} style={{height: '100%', width: '100%'}} />*/}
              </View>
              <View style={{height: 80, flexDirection: 'row', paddingTop: 10}}>
                {
                  (!isAfterTake && !isDraw && !isCamera && imageLength>0) && 
                  <TouchableHighlight style={{width: 100, height: 42, margin: 10, marginRight: 50}}
                      onPress={() => {

                        this.setState({
                          isDraw: true
                        });
                      } } >
                    <View style={{flexDirection: 'row'}}>
                      <Image source={require('../../assets/imgs/pencilBtn.png')} style={{width:40, height:42}} />
                      <Text style={{color: 'white', fontSize: 16, textAlign: 'center', fontWeight: 'bold', marginLeft: 10, lineHeight: 30}}>Draw</Text>
                    </View>
                  </TouchableHighlight>
                }                

                {
                  (!isAfterTake && !isDraw && !isCamera && imageLength>0) && 
                  <TextBtn
                    imgSrc={require('../../assets/imgs/PhotoControlBtn.png')}
                    style={{height: 34, resizeMode: 'stretch', margin: 10, marginRight: 20}}
                    onPress={()=>{
                      this.props.onDelImages(this.state.selectedIndex);
                    }}
                  >
                    Delete Photo
                  </TextBtn>
                }

                {
                  (!isAfterTake && !isDraw && !isCamera && imageLength>0) && 
                  <TextBtn
                    imgSrc={require('../../assets/imgs/PhotoControlBtn.png')}
                    style={{height: 34, resizeMode: 'stretch', margin: 10}}
                    onPress={()=>{
                      this.saveToRoll();
                    }}
                  >
                    Save to Roll
                  </TextBtn>
                }

                


                {
                  isDraw && 
                  <TextBtn
                    imgSrc={require('../../assets/imgs/PhotoControlBtn.png')}
                    style={{height: 34, resizeMode: 'stretch', margin: 10, marginRight: 20}}
                    onPress={()=>{
                      this.setState({
                        isDraw: false
                      });
                    }}
                  >
                    Cancel
                  </TextBtn>
                }

                {
                  isDraw && 
                  <TextBtn
                    imgSrc={require('../../assets/imgs/PhotoControlBtn.png')}
                    style={{height: 34, resizeMode: 'stretch', margin: 10, marginRight: 20}}
                    onPress={()=>{
                      this.setState({
                        isDraw: false
                      });
                    }}
                  >
                    Clear
                  </TextBtn>
                }

                {
                  isDraw && 
                  <TextBtn
                    imgSrc={require('../../assets/imgs/PhotoControlBtn.png')}
                    style={{height: 34, resizeMode: 'stretch', margin: 10}}
                    onPress={()=>{
                      this.snapshot('snapView');
                    }}
                  >
                    Save
                  </TextBtn>
                }

                



                {
                  (isCamera) && 
                  <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-end'}}>
                    <BarCircularBtn
                      imgSrc={require('../../assets/imgs/PhotoBtnLGBlue.png')}
                      onPress={()=>{
                        this.takePicture();
                      }}
                      style={{height: 60, width: 60, resizeMode: 'stretch', marginRight: 10}}
                    />
                  </View>
                }


                {
                  
                  (isAfterTake) && 
                  <TextBtn
                    imgSrc={require('../../assets/imgs/PhotoControlBtn.png')}
                    style={{height: 34, resizeMode: 'stretch', margin: 10}}
                    onPress={()=>{
                      this.saveTempToRoll();
                    }}
                  >
                    Save To Temp Roll
                  </TextBtn>                  
                }
                {
                  (isAfterTake) && 
                  <TextBtn
                    imgSrc={require('../../assets/imgs/PhotoControlBtn.png')}
                    style={{height: 34, resizeMode: 'stretch', margin: 10}}
                    onPress={()=>{
                      this.saveTempToImageList();
                    }}
                  >
                    Use Photo
                  </TextBtn>
                }
                


                {
                  (isAfterTake || (!isDraw && !isCamera && imageLength>0)) && 
                  <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-end'}}>
                    <TextBtn
                      imgSrc={require('../../assets/imgs/PhotoControlBtnBlue.png')}
                      style={{height: 34, resizeMode: 'stretch', margin: 10}}
                      onPress={()=>{
                        if (imageLength >=4 ){
                          Alert.alert(
                            config.PIC_LIMIT_TITLE,
                            config.PIC_LIMIT_CNT,
                            [
                              {text: 'OK', onPress: () => { } }
                            ]
                          )
                          return;
                        }

                        this.setState({
                          isAfterTake: false,
                          isCamera: true
                        });
                      }}
                    >
                      Camera
                    </TextBtn>
                  </View>
                }

                {/*
                  (isAfterTake) && 
                  <TouchableHighlight style={{width: 50}}
                    onPress={() => {
                      this.setState({
                        isCamera: true,
                        isAfterTake: false
                      })
                    } } >
                      <Text>Go Camera</Text>
                  </TouchableHighlight>
                  */
                }


                {
                  /*
                  <TouchableHighlight style={{width: 50, marginLeft: 10}}
                    onPress={() => {
                      this.setState({
                        isCamera: !this.state.isCamera
                      });
                    } } >
                      <Text>Camera</Text>
                  </TouchableHighlight>
                  */
                }

                {
                  /*
                  <TouchableHighlight style={{width: 50, marginLeft: 10}}
                    onPress={() => {
                      this.fromPicker();
                    } } >
                      <Text>FromPicker</Text>
                  </TouchableHighlight>
                  */
                }

                

              </View>
            </View>
          </Modal>
        </View>
    );
  }
}


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
  cameraModal: {
    flex: 1, borderRadius: 10, width: 797,
    height: 550, position: 'absolute', right: 0,
    top: 20, padding: 40, paddingTop: 60,
    paddingBottom: 0, backgroundColor: 'black'
  },
  '@media (max-height: 719)': {
    cameraModal: {
      width: 657, height: 400, top: 0
    }
  }
});

export default CameraPic;
