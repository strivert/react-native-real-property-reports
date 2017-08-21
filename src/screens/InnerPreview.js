import React, {Component} from 'react';
import ReactNative from 'react-native';
import {
  InnerPreviewLeft,
  InnerPreviewRight
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
 * Container component for InnerPreview page
 */
class InnerPreview extends Component {

  /**
    * InnerPreview Container Constructor
    * @param {props} props from parent component
    * @return {void}
    */
  constructor(props){
    super(props);
  }

  /**
   * Render InnerPreview page
   * @return {jsxresult} result in jsx format
   */
  render() {    
    return (
      <View style={{flex:1, flexDirection: 'row' }}>
        <View style={{width: 360}}>
          <InnerPreviewLeft />
        </View>
        <View style={{flex: 1}}>
          <InnerPreviewRight />
        </View>
      </View>
    );
  }
}

let styles = StyleSheet.create({
  
});

export default InnerPreview;
