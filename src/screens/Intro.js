import React, {Component} from 'react';
import ReactNative from 'react-native';
import Swiper from 'react-native-swiper';

const {
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableHighlight,
  Linking,
  TextInput
} = ReactNative;
import EStyleSheet from 'react-native-extended-stylesheet';

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
  }

  /**
   * Render ReportLeft page
   * @return {jsxresult} result in jsx format
   */
  render() {
    return (
      <Swiper
        style={styles.wrapper}
        onIndexChanged={(i)=>{}}
      >
        <View style={styles.slide1}>
          <Text style={styles.text}>Hello Swiper</Text>
          <TouchableHighlight onPress={()=>{alert('');}}>
            <Text>
              Hello
            </Text>
          </TouchableHighlight>
        </View>
        <View style={styles.slide2}>
          <Text style={styles.text}>Beautiful</Text>          
        </View>
        <View style={styles.slide3}>
          <Text style={styles.text}>And simple</Text>
        </View>
      </Swiper>
    );
  }
}

let styles = EStyleSheet.create({
  wrapper: {
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  }
});

export default Intro;
