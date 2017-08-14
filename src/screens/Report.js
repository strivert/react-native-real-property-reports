import React, {Component} from 'react';
import ReactNative from 'react-native';
import {Header, Footer} from '../components';
import {InnerReport} from './';

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
 * Container component for Report page
 */
class Report extends Component {

  /**
    * Report Container Constructor
    * @param {props} props from parent component
    * @return {void}
    */
  constructor(props){
    super(props);
  }

  /**
   * Render Report page
   * @return {jsxresult} result in jsx format
   */
  render() {    
    return (
      <View style={{flex: 1, flexDirection: 'column'}}>
      	<Header.Main
          page='Report'
        />
     	  <View style={{flex:1}}>
          <Image source={require('../assets/imgs/mainBackground.png')}>
            <InnerReport />
          </Image>
        </View>
        <Footer.Main
          page='Report'
        />
      </View>
    );
  }
}

let styles = StyleSheet.create({
  
});

export default Report;