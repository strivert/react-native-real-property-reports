import React, {Component} from 'react';
import ReactNative from 'react-native';
import Swiper from 'react-native-swiper';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
import { Actions } from 'react-native-router-flux';

const {
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  TouchableHighlight,
  Linking,
  TextInput
} = ReactNative;
import EStyleSheet from 'react-native-extended-stylesheet';
import {
  TextBtn
} from '../components/Atoms';

/**
 * Container component for Left of Report page
 */
class Intro extends Component {

  /**
    * ReportLeft Container Constructor
    * @param {props} props from parent component
    * @return {void}
    */
  constructor(props) {
    super(props);

    // this.selectedSwipeIndex = 0;
    this.state = {
      selectedSwipeIndex: 0
    }
  }

  /**
   * Render ReportLeft page
   * @return {jsxresult} result in jsx format
   */
  render() {

    const {selectedSwipeIndex} = this.state;

    const config = {
      velocityThreshold: 0.3,
      directionalOffsetThreshold: 80
    };

    let nextBtn = null;

    if (selectedSwipeIndex == 0) {
      nextBtn = (
        <View style={{display: 'none'}}>
          <Image source={require('../assets/imgs/TutorialRightBlue.png')} />
        </View>
      );
    } else {
      nextBtn = (
        <View>
          <Image source={require('../assets/imgs/TutorialRightBlue.png')} style={styles.nextPrevBtn} />
        </View>
      );
    }

    const prevBtn = (
      <View>
        <Image source={require('../assets/imgs/TutorialLeftBlue.png')} style={styles.nextPrevBtn} />
      </View>
    );

    return (
      <GestureRecognizer
        onSwipe={(direction, state) => {}}
        onSwipeLeft={(state) => {
          if (selectedSwipeIndex < 4) {
            this._swiper.scrollBy(1, false);
          }
        }}
        onSwipeRight={(state) => {
          if (selectedSwipeIndex > 0) {
            this._swiper.scrollBy(-1, false);
          }
        }}
        config={config}
        style={{
          flex: 1
        }}
      >
        <Image source={require('../assets/imgs/tutorialBackground.png')} style={{height: '100%', width: '100%'}}>
            <Swiper
              style={styles.wrapper}
              onIndexChanged={(i)=>{
                this.setState({
                  selectedSwipeIndex: i
                });
              }}
              buttonWrapperStyle={styles.ctrlBtn}
              ref={(swiper) => {this._swiper = swiper;}}
              scrollEnabled={false}
              showsButtons={true}
              loop={false}
              nextButton={nextBtn}
              prevButton={prevBtn}
            >
              <View style={styles.slide1}>
                <Image source={require('../assets/imgs/tutorial1.png')} style={{height: '100%', width: '100%'}}>
                  <View style={{
                    flex: 1,
                    backgroundColor: 'transparent',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}>
                    <TouchableOpacity style={{width: 200, height: 200}} onPress={()=>{
                      this._swiper.scrollBy(1, false);
                    }}>
                      <Text>&nbsp;</Text>
                    </TouchableOpacity>
                  </View>
                </Image>
              </View>
              <View style={styles.slide2}>
                <Image source={require('../assets/imgs/tutorial2.png')} style={{height: '100%', width: '100%'}} />
              </View>
              <View style={styles.slide3}>
                <Image source={require('../assets/imgs/tutorial3.png')} style={{height: '100%', width: '100%'}} />
              </View>
              <View style={styles.slide4}>
                <Image source={require('../assets/imgs/tutorial4.png')} style={{height: '100%', width: '100%'}} />
              </View>
              <View style={styles.slide5}>
                <Image source={require('../assets/imgs/tutorialsignInBGNew1.png')} style={{height: '100%', width: '100%'}}>
                  <View style={styles.firstLine}>
                  </View>
                  <View style={styles.mainCnt}>
                    <Text style={{color: 'gray', fontSize: 20, fontWeight: 'bold'}}>Create Account</Text>
                    <View style={styles.mainCntLine}></View>
                    <TextInput
                      style={{height: 40, width: 300, borderColor: 'gray', borderWidth: 1, borderRadius: 10 }}
                      underlineColorAndroid='transparent'
                      onChangeText={(text) => {
                      }}
                      value=''
                    />
                    <View style={styles.mainCntLine}></View>
                    <TextInput
                      style={{height: 40, width: 300, borderColor: 'gray', borderWidth: 1, borderRadius: 10}}
                      underlineColorAndroid='transparent'
                      onChangeText={(text) => {                      
                      }}
                      value=''
                    />
                    <View style={styles.mainCntLine}></View>
                    <TextBtn 
                      imgSrc={require('../assets/imgs/signinBtn.png')} 
                      style={{height: 40, width: 300, resizeMode: 'stretch'}} 
                      onPress={()=>{
                        Actions.setup();
                      }}>
                      Create Account
                    </TextBtn>
                  </View>
                  <View style={styles.bottomCnt}>
                    <View style={{flexDirection: 'row'}}>
                      <Text style={{fontSize: 10}}>
                        By clicking create Account. I agree to the
                      </Text>
                      <TouchableOpacity>
                        <Text style={{color: 'blue', fontSize: 10, marginLeft: 5}}>
                          Terms of Service and Privacy Policy
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                  <View style={styles.lastLine}>
                  </View>
                </Image>
              </View>
            </Swiper>
        </Image>
      </GestureRecognizer>
    );
  }
}

let styles = EStyleSheet.create({
  wrapper: {
    flex:1
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  slide4: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  slide5: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  firstLine: {
    flex: 0.15
  },
  mainCnt: {
    flex: 0.55, flexDirection: 'column', alignItems: 'center'
  },
  mainCntLine: {
    height: 20
  },
  bottomCnt: {
    flex: 0.15, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: 30
  },
  lastLine: {
    flex: 0.15
  },
  ctrlBtn: {
    backgroundColor: 'transparent',
    flexDirection: 'row',
    position: 'absolute',
    top: 0,
    left: 0,
    flex: 1,
    paddingHorizontal: 100,
    paddingVertical: 100,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  '@media (max-height: 719)': {
    firstLine: {
      flex: 0.1
    },
    mainCnt: {
      flex: 0.6, flexDirection: 'column', alignItems: 'center'
    },
    mainCntLine: {
      height: 10
    },
    bottomCnt: {
      flex: 0.15, flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'center', marginTop: 0
    },
    lastLine: {
      flex: 0.15      
    },
    ctrlBtn: {
      paddingHorizontal: 50,
      paddingVertical: 50
    },
    nextPrevBtn: {
      resizeMode: 'stretch',
      width: 110,
      height: 110
    }
  }
});

export default Intro;
