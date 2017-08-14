import React, {Component} from 'react';
import ReactNative from 'react-native';
import {
  InnerReportLeft,
  InnerReportRight
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
 * Container component for InnerReport page
 */
class InnerReport extends Component {

  /**
    * InnerReport Container Constructor
    * @param {props} props from parent component
    * @return {void}
    */
  constructor(props){
    super(props);
  }

  /**
   * Render InnerReport page
   * @return {jsxresult} result in jsx format
   */
  render() {    
    return (
      <View style={{flex:1, flexDirection: 'row' }}>
        <View style={{width: 360}}>
          <InnerReportLeft />
        </View>
        <View style={{flex: 1}}>
          <InnerReportRight />
        </View>
      </View>
    );
  }
}

let styles = StyleSheet.create({
  
});

export default InnerReport;
