import React, {Component} from 'react';
import ReactNative from 'react-native';
import {Header, Footer} from '../components';
import {InnerPreview} from './';

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
    return (
      <View style={{flex: 1, flexDirection: 'column'}}>
      	<Header.Main
          page='Preview'
        />
     	  <View style={{flex:1}}>
          <Image source={require('../assets/imgs/mainBackground.png')}>
            <InnerPreview />
          </Image>
        </View>
        <Footer.Main
          page='Preview'
        />
      </View>
    );
  }
}

let styles = StyleSheet.create({
  
});

export default Preview;